const contentSecurityPolicy={}

contentSecurityPolicy.cspValidator = (req, res, next)=>{
  res.setHeader(
    'Content-Security-Policy',
    "default-src 'self'; font-src 'self'; img-src 'self' data: https://cdn.pixabay.com  https://img.freepik.com ; script-src 'self'; style-src 'self';frame-src 'self'"
  );
  next();
}

module.exports= contentSecurityPolicy;