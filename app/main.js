const express = require('express')
const validation = require('./token_validation.js')

const router = express.Router();
const  status_500 = {status:500, message: 'Something Wrong'}
module.exports ={
    express : express,
    validation : validation,
    router : router,
    status_500
}