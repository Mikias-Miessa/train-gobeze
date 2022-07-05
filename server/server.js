const express = require('express')
const cors = require('cors');
require('dotenv').config()   
const dev = process.env.NODE_ENV !== 'production'

const app = express();
const connectMongo = require('./utils/db')    


app.use(express.json({ extended: false }));
app.use(cors());
  //Define Routess 
  app.use('/api/auth', require('./routes/api/auth'));
  app.use('/api/users', require('./routes/api/users'));

  const PORT = 8000;
  console.log(process.env.NODE_ENV);

  app.listen(PORT, () => console.log(`Server started on port ${PORT}`));