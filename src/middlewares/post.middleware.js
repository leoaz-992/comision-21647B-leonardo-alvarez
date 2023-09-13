const { Op } = require("sequelize");
const Posts = require('../models').Post

const middlewaresValidate = {}

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
    if(arrayPost.length > 1 ){
      return res.status(404).json({mensaje:``})
    } 
    next()
  } catch (error) {
    console.log(error);
  }
  
}

middlewaresValidate.validateNotRepeatedPost = async (req, res, next) => {
  try {
    const id = parseInt( req.params.post_id );
    const post = await Posts.findByPk(id);
    if (post === null) {
      return res.status(404).json(`no se encontro post con el id: ${id}`)
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
      return res.status(404).json({mensaje:`ya existe un post con el titulo: ${titlePost}`});
    }
    if(postWithsameContent){
      return res.status(404).json({mensaje:`ya existe un post con la descripcion:${contentPost}`});
    }
    if(postWithsameImage){
      return res.status(404).json({mensaje:`ya existe un post la imagen: ${imagePost}`});
    }
    next()
  } catch (error) {
    console.log(error);
  }
  
}

module.exports = middlewaresValidate