const dotenv = require('dotenv')
const express = require('express');


dotenv.config();
const app = express();
app.use(helmet());

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});


