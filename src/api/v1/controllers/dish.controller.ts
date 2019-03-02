
import { ControllerFunction } from '../../../ts-coverage';
import { DishHandler } from '../handlers/Dish.handler';

export class DishController {

    DishHandler = new DishHandler()

    constructor() { }

    filter(): ControllerFunction {
        return (req, res, next) => {
            const {skip, limit} = req.query; 
            const page = { skip: parseInt(skip), limit: parseInt(limit)};
            const { ingredients, tags, priceLt, priceGt } = req.query; 

            this.DishHandler.filter({page, filter: { ingredients, tags, priceLowThen: priceLt, priceGreatThen: priceGt }}, (error, result) => {
                if(error) {
                    return next(error);
                }
                return res.send({ dishes: result });
            });
        }
    }
    
    getById(): ControllerFunction {
        return (req, res, next) => {
            const {id} = req.params; 
            
            this.DishHandler.getById({ id }, (error, result) => {
                if(error) {
                    return next(error);
                }
                return res.send({ dish: result });
            });
        }
    }

    getAll(): ControllerFunction {
        return (req, res, next) => {

            const {skip, limit} = req.query; 
            const page = { skip: parseInt(skip), limit: parseInt(limit)};
            this.DishHandler.getAll({page}, (error, result) => {
                if(error) {
                    return next(error);
                }
                return res.send({ dishes: result });
            });
        }    
    }

}