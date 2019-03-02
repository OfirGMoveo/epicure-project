import { Router } from 'express'
import { RestaurantController } from '../controllers/restaurant.controller';
import { DishController } from '../controllers/dish.controller';

const routes = Router();
const restaurantController = new RestaurantController();
const dishController = new DishController();

routes.get('/restaurant/all', restaurantController.getAll());
routes.get('/restaurant/filter', restaurantController.filter());
routes.get('/restaurant/cuisines', restaurantController.getCuisines());
routes.get('/restaurant/searchcompletion', restaurantController.getSearchCompletion());
routes.get('/restaurant/:id', restaurantController.getById());

routes.get('/dish/all', dishController.getAll());
routes.get('/dish/filter', dishController.filter());
routes.get('/dish/:id', dishController.getById());


export { routes };