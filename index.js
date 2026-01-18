const {app,startServer} = require('./app/config.js')
app.use(require('./model/m_test.js'))

startServer()
  
