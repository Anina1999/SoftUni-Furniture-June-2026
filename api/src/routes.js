import { Router } from "express";
import { 
    furnitureController, 
    userController, 
} from './controllers';
import { isAuth } from "./middlewares/authMiddleware";

const routes = Router();

routes.get('/data/catalog', furnitureController.getAll);
routes.post('/data/catalog', isAuth, furnitureController.create);
routes.get('/data/catalog/:furnitureId', furnitureController.getById);
routes.delete('/data/catalog/:furnitureId', isAuth, furnitureController.remove);
routes.put('/data/catalog/:furnitureId', isAuth, furnitureController.update);

routes.post('/users/register', userController.register);
routes.post('/users/login', userController.login); 
routes.get('/users/logout', userController.logout);

export default routes;