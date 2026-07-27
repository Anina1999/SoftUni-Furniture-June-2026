import { Router } from "express";
import { 
    furnitureController, 
    userController, 
} from './controllers/index.js';

const routes = Router();

routes.get('/data/catalog', furnitureController.getAll);
routes.post('/users/register', userController.register);

export default routes;