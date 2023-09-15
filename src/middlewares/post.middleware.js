const { Op } = require("sequelize");
const Posts = require('../models').Post

const middlewaresValidate = {}
//para validar que no se cree un post con duplicados
middlewaresValidate.validateNewPost = async (req, res, next) => {
  try {
    const{titlePost,contentPost,imagePost} =req.body;
    const arrayPost = await Posts.findAll({
      where: {
        [Op.or]: [
          {titlePost  : titlePost },
          {imagePost  : imagePost },
          {contentPost: contentPost}
        ]
      }
    });
    if(arrayPost.length > 0 ){
      return res.render('base/error',{titulo:"ERROR",link:'Ir a mis publicaciones', mensaje: 'el post ya existe', color:"danger"})
    } 
    next()
  } catch (error) {
    console.log(error);
  }
  
}
//para validar que no se repitan post al editarlos
middlewaresValidate.validateNotRepeatedPost = async (req, res, next) => {
  try {
    const id = parseInt( req.params.post_id );
    const post = await Posts.findByPk(id);
    if (post === null) {
      return res.render('template_post/createPost',{titulo:"ERROR",link:'Ir a mis publicaciones', mensaje: `no se encontro post con el id: ${id}`, color:"danger"})
    }
    const{titlePost,contentPost, imagePost} =req.body;
    const arrayPosts = await Posts.findAll({
      where: {
        [Op.not]: [
          { id: id },
        ]
      }
    });
    const postWithsameTitle   = arrayPosts.find(p=> p.titlePost === titlePost)
    const postWithsameContent = arrayPosts.find(p=> p.contentPost=== contentPost);
    const postWithsameImage   = arrayPosts.find(p=> p.imagePost ==imagePost);
    if(postWithsameTitle){
      return res.render('template_post/createPost',{titulo:"ERROR",link:'Ir a mis publicaciones', mensaje: `ya existe un post con el titulo: ${titlePost}`, color:"danger"})
    }
    if(postWithsameContent){
      return res.render('template_post/createPost',{titulo:"ERROR",link:'Ir a mis publicaciones', mensaje:`ya existe un post con la descripcion:${contentPost}`, color:"danger"})
      return res.status(404).json({});
    }
    if(postWithsameImage){
      return res.render('template_post/createPost',{titulo:"ERROR",link:'Ir a mis publicaciones', mensaje: `ya existe un post la imagen: ${imagePost}`, color:"danger"})
    }
    next()
  } catch (error) {
    console.log(error);
  }
  
}
middlewaresValidate.validateExistPostWithId= async (req, res, next) =>{
  try {
    const id = parseInt( req.params.post_id );
    if (isNaN(id)) {
      return res.status(404).render('base/error',{titulo:"ERROR",link:'Ir a mis publicaciones', mensaje:`No exite post con el id: ${req.params.post_id}`,showb:false, color:"warning"})
    }
    const post = await Posts.findByPk(id);
    if (post === null) {
      return res.status(404).render('base/error',{titulo:"ERROR",link:'Ir a mis publicaciones', mensaje:`No exite post con el id: ${id}`,showb:false, color:"warning"})
    }
    next();
  } catch (error) {
    console.log(error);
  }
  
}
module.exports = middlewaresValidate;