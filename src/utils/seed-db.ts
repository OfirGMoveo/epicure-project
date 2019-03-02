import * as mongoose from 'mongoose';

import { DbSandbox } from './db-sandbox';
import { DishTag } from './../db/models/dish-tags/dish-tags.model';
import {seed} from './seed';

    async function dropAll() {
            await DbSandbox.chefs.Chef.remove({});
            await DbSandbox.restaurants.Restaurant.remove({});
            await DbSandbox.dishes.Dish.remove({});
            await DbSandbox.menus.Menu.remove({});
            await DishTag.remove({});
    }


export async function insertSeed() {

    dropAll().then(() => {
        DbSandbox.chefs.Chef.insertMany(seed.chefs)
            .then( () => console.log('seed Chef successfully.'))
            .catch((e) => console.log(e));
        
        DbSandbox.restaurants.Restaurant.insertMany(seed.restaurants)
            .then( () => console.log('seed Restaurant successfully.'))
            .catch((e) => console.log(e));
        
        DbSandbox.dishes.Dish.insertMany(seed.dishes)
            .then( () => console.log('seed Dish successfully.'))
            .catch((e) => console.log(e));

        DbSandbox.menus.Menu.insertMany(seed.menus)
            .then( () => console.log('seed Menu successfully.'))
            .catch((e) => console.log(e));
        
        DishTag.insertMany(seed.dishTags)
            .then( () => console.log('seed DishTag successfully.'))
            .catch((e) => console.log(e));
    })
    .catch(err => console.log(err));

}

insertSeed();

