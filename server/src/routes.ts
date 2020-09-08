import express, { response } from 'express'
import ClassesController from './controllers/ClassesController';
import ConnectionController from './controllers/ConectionsController';

const routes = express.Router();
const classControllers = new ClassesController();

const connectionController = new ConnectionController();


routes.get('/classes', classControllers.index)
routes.post('/classes', classControllers.create)

routes.post('/connections', connectionController.create)
routes.get('/connections', connectionController.index)

export default routes;