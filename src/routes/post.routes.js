const routes = require('express').Router();
const {getAllPost, createPost,getOnePost,deletePost,updatePost}= require('../controllers/post.controller')
const middlewaresValidate = require('../middlewares/post.middleware')

routes.get('/',getAllPost);// trae todos los post
routes.post('/create', middlewaresValidate.validateNewPost, createPost);//crea un post
routes.get('/post/:post_id',getOnePost)//muestra un post por su id
routes.delete('/post/:post_id',deletePost)//elimina un post
routes.put('/post/:post_id', middlewaresValidate.validateNotRepeatedPost ,updatePost)//edita un post

module.exports= routes;