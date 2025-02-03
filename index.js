const {app,startServer} = require('./app/config.js')
app.use(require('./model/m_user.js'))

startServer()
  
