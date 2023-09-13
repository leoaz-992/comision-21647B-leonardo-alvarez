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
    return res.status(201).json(post)
  } catch (error) {
    return res.status(500).json({mensaje:`se produjo el siguiente error: ${error}`})
  }
}
//elimina un post buscando por su id

//edita un post
 

module.exports= PostController;