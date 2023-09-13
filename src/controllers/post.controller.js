const Post = require('../models').Post

const PostController ={}
//lista todos los posts
 PostController.getAllPost= async(req,res)=>{
  try {
    const post = await Post.findAll();
    return res.status(200).json(post);
  } catch (error) {
    return res.status(500).json({mensaje:`se produjo el siguiente error: ${error}`})
  }
 }
 //crea un post
 PostController.createPost = async (req, res) => {
  try {
    const post = await Post.create(req.body)
    return res.status(201).json(post)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error: 'Error al crear Post' })
  }
}
//muestra un post buscando por su id
PostController.getOnePost =async (req,res)=>{
  try {
    const id = req.params.post_id;
    const post = await Post.findAll({
      where: {
        id: id
      }
    });
    if(post.length === 0){
      return res.status(404).json(`no se encontro post con el id ${id}`)
    }
    return res.status(200).json(post)
  } catch (error) {
    return res.status(500).json({mensaje:`se produjo el siguiente error: ${error}`})
  }
}
//elimina un post buscando por su id
PostController.deletePost =async (req,res)=>{
  try {
    const id = parseInt( req.params.post_id );
    const post = await Post.findByPk(id);
    if (post === null) {
      return res.status(404).json(`no se encontro post con el id ${id}`)
    }
    post.destroy();
    return res.status(200).json(`se elimino el post con el titulo: ${post.titlePost}`)

  } catch (error) {
    return res.status(500).json({mensaje:`no se pudo eliminar el post.`, error:`${error}`})
  }
  

}
//edita un post
PostController.updatePost =async (req,res)=>{
  try {
    const id = parseInt( req.params.post_id );
    const post = await Post.findByPk(id);
    if (post === null) {
      return res.status(404).json(`no se encontro post con el id ${id}`)
    }
    const{titlePost,contentPost,imagePost} =req.body;
    post.titlePost = titlePost;
    post.contentPost = contentPost;
    post.imagePost = imagePost;

    await post.save({ fields: ['titlePost','contentPost','imagePost'] });
    return res.status(200).json({mensaje:`se edito el post con id: ${id}`,data:post});

  } catch (error) {
    return res.status(500).json({mensaje:`no se pudo eliminar el post.`, error:`${error}`})
  }

}

module.exports= PostController;