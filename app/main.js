const express = require('express')
const validation = require('./token_validation.js')

const DB = require('./connection.js').DB()
const router = express.Router();
const  status_500 = {status:500, message: 'Something Wrong'}
module.exports ={
    express : express,
    validation : validation,
    DB : DB,
    router : router,
    status_500
}