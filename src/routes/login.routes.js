const routes = require('express').Router();
const {login} =require('../controllers/login.controller')

routes.get("/",login)

module.exports= routes;