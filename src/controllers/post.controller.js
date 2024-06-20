const Posts = require('../models').Post

const PostController ={}
//lista todos los posts
 PostController.getAllPost= async(req,res)=>{
  try {
    const posts = await Posts.findAll();
    return res.render('template_post/index',{posts, titulo:"mis publicaciones",link:'publicaciones'});
  } catch (error) {
    return res.status(500).render('base/error',{titulo:"ERROR",mensaje:`se produjo el siguiente error: ${error}`,link:'Ir al inicio', color:'danger' })
  }
 }
 //crea un post
 PostController.createPost = async (req, res) => {
  try {
    const post = await Posts.create(req.body)
    return res.render('template_post/createPost',{post, titulo:"post creado",link:'Ir a publicaciones', mensaje:"post creado satisfactoriamente.", color:"success"});
  } catch (error) {
    console.log(error)
    return res.status(404).render('base/error',{titulo:"ERROR",mensaje:`se produjo el siguiente error: ${error}`,link:'Ir a publicaciones', color:'danger' })
  }
}
//muestra un post buscando por su id
PostController.getOnePost =async (req,res)=>{
  try {
    const id = parseInt(req.params.post_id);
    const post = await Posts.findByPk(id);
    return res.status(200).render('template_post/post',{post, titulo:`publicacion ${id}` ,link:'Ir a publicaciones', mensaje:"", color:"success"});
  } catch (error) {
    return res.status(404).render('base/error',{titulo:"ERROR",mensaje:`se produjo el siguiente error: ${error}`,link:'Ir a publicaciones', color:'danger' });
  }
}
// !elimina un post buscando por su id  usa method=get
PostController.redirectdeletePost =async (req,res)=>{
  try {
    const id = parseInt( req.params.post_id );
    const post = await Posts.findByPk(id);
    post.destroy();
    return res.redirect('/')
  } catch (error) {
    return res.status(404).render('base/error',{titulo:"ERROR",mensaje:`se produjo el siguiente error: ${error}`,link:'Ir a publicaciones', color:'danger' });
  }
}
//* elimina un post buscando por su id
PostController.deletePost =async (req,res)=>{
  try {
    const id = parseInt( req.params.post_id );
    const post = await Posts.findByPk(id);
    post.destroy();
    return res.status(200).json(`se elimino el post con el titulo: ${post.titlePost}`)
  } catch (error) {
    return res.status(404).json({mensaje:`no se pudo eliminar el post.`, error:`${error}`})
  }
  

}
// ! edita un post por el metodo get
PostController.redirectUpdatePost =async (req,res)=>{
  try {
    const id = parseInt( req.params.post_id );
    const post = await Posts.findByPk(id);
    const{titlePost,contentPost,imagePost} =req.body;
    post.set({
      titlePost : titlePost,
      contentPost : contentPost,
      imagePost : imagePost,
    });
    await post.save();
    return res.redirect('/')
  } catch (error) {
    return res.status(404).render('base/error',{titulo:"ERROR",mensaje:`se produjo el siguiente error: ${error}`,link:'Ir a publicaciones', color:'danger' });
  }

}

//edita un post
PostController.updatePost =async (req,res)=>{
  try {
    const id = parseInt( req.params.post_id );
    const post = await Posts.findByPk(id);
    const{titlePost,contentPost,imagePost} =req.body;
    post.set({
      titlePost : titlePost,
      contentPost : contentPost,
      imagePost : imagePost,
    });
    await post.save();
    return res.status(200).json({mensaje:`se modifico el post con id: ${id}`,data:post});
  } catch (error) {
    return res.status(500).json({mensaje:`no se pudo editar el post.`, error:`${error}`})
  }

}

module.exports= PostController;