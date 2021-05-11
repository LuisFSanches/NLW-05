import express from "express"

 //CONTROLLERS
 import {SettingsController} from './controllers/SettingsController'
 import {UsersController} from './controllers/UsersController'

 //New Instance
 const settingsController = new SettingsController()
 const usersController = new UsersController()

const routes = express.Router()

routes.post('/new-setting', settingsController.create)
routes.post('/new-user', usersController.create)



export default routes