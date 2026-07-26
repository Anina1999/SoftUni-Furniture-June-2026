import { Router } from "express";
import { furnitureController } from './controllers/index.js';

const routes = Router();

routes.get('/data/catalog', furnitureController.getAll);

export default routes;