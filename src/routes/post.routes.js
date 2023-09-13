const routes = require('express').Router();
const {getAllPost, createPost,getOnePost,deletePost,updatePost}= require('../controllers/post.controller')



routes.get('/',getAllPost);// todos los post
routes.post('/create', createPost);//crea un post
routes.get('/post/:post_id',getOnePost)//muestra un post por su id
routes.delete('/post/:post_id',deletePost)//elimina un post
routes.put('/post/:post_id',updatePost)//edita un post







module.exports= routes;