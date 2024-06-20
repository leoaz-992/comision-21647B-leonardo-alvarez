const LoginControoller={};

LoginControoller.login= (req,res)=>{
  return res.render('template_login/login',{ titulo:"Iniciar sesión",link:'publicaciones'});
}

module.exports= LoginControoller;