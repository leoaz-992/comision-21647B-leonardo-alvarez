const routes = require("express").Router();
const {
  getAllPost,
  createPost,
  getOnePost,
  deletePost,
  updatePost,
  redirectUpdatePost,
  redirectdeletePost,
} = require("../controllers/post.controller");
const middlewaresValidate = require("../middlewares/post.middleware");

routes.get("/", getAllPost); // trae todos los post
routes.post("/create", middlewaresValidate.validateNewPost, createPost); //crea un post
routes.get(
  "/post/:post_id",
  middlewaresValidate.validateExistPostWithId,
  getOnePost
); //muestra un post por su id
routes.get(
  "/delete/post/:post_id",
  middlewaresValidate.validateExistPostWithId,
  redirectdeletePost
); //elimina un post y redirecciona.
routes.post(
  "/edit/post/:post_id",
  middlewaresValidate.validateNotRepeatedPost,
  redirectUpdatePost
);

//usandolo como una api de post
routes.delete(
  "/post/:post_id",
  middlewaresValidate.validateExistPostWithId,
  deletePost
); //elimina un post
routes.put(
  "/post/:post_id",
  middlewaresValidate.validateNotRepeatedPost,
  updatePost
); //edita un post

module.exports = routes;
