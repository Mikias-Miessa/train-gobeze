const express = require('express')
const next = require('next')
require('dotenv').config()   
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const connectMongo = require('./utils/db')    
app.prepare()
.then(async () => {
  console.log('connecting mongoDB')
  const mongoDB = await connectMongo();
  console.log('connected to mongoDB')
  const server = express();

//Init Middleware
server.use(express.json({ extended: false }));
server.use(cors());
  //Define Routess 
  server.use('/api/auth', require('./routes/api/auth'));
  server.use('/api/users', require('./routes/api/users'));

      //For Client
//   server.get('/p/:id', (req, res) => {
//     const actualPage = '/post'
//     const queryParams = { id: req.params.id } 
//     app.render(req, res, actualPage, queryParams)
// })
  server.get('*', (req, res) => {
    return handle(req, res)
  })
    
  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})