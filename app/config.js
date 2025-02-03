require('dotenv').config()

var express = require('express');
var app = express();
const cors = require('cors');
var path = require('path');
const allowedOrigins = [
  'http://localhost:1000',
  'http://localhost'
];

const corsOptions = {
  origin: function (origin, callback) {
    // console.log(origin)
      if (!origin || allowedOrigins.indexOf(origin) !== -1) {
          callback(null, true);
      } else {
          callback(new Error(403), false);
      }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE','OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization','vrapi_token'],
};

// Menggunakan middleware CORS dengan opsi
app.use(cors(corsOptions));

app.use(express.static(path.join(__dirname, 'public')));
// Middleware to parse JSON bodies
app.use(express.json({ limit: '200mb' })); // Increase JSON payload limit to 5MB
// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true, limit: '200mb' })); // Increase URL-encoded form data limit to 5MB
app.use('/error', require('../errors.js'))

app.use((err, req, res, next) => {
  if(err.message==403){
    res.status(403).send({status:403, message: 'Forbidden Here!'})
  }else{
    next()
  }
})

function startServer(){
  app.use((req, res, next) => {
    res.status(404).json({status:404,message: 'Not Found!'});
  });
  app.listen(process.env.PORT, process.env.HOST, () => {
    console.log('Server is running');
  });
}

module.exports={
    app:app,
    path:path,
    express : express,
    startServer : startServer
}
