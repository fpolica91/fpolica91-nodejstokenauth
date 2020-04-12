const express = require('express')
const routes = express.Router()
const SessionController = require('./main/controllers/sessionController')
const UserController = require('./main/controllers/userController')
const WatchController = require('./main/controllers/watchController')
const authMiddleware = require('./main/middlewares/auth')

routes.post('/session', SessionController.session)
routes.post('/createUser', UserController.store)
routes.post('/createWatch', WatchController.store)

// ANY ROUTE BELOW HERE WILL REQUIRE AUTHENTICATION
routes.use(authMiddleware)
routes.get('/testing', (req, res) => {
  return res.json('hello world')
})

module.exports = routes
