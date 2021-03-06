

import { ChefSandbox } from './models/chef-sandbox';
import { RestaurantSandbox } from './models/restaurant-sandbox';
import { DishSandbox } from './models/dish-sandbox';
import { MenuSandbox } from './models/menu-sandbox';
import { DishTag } from './../../db/models/dish-tags/dish-tags.model'
import { UserSandbox } from './models/user-sandbox';


export { ComplexSandbox } from './complex-sandbox'
export class DbSandbox {
    static dishTags = {DishTag};
    static chefs = ChefSandbox;
    static dishes = DishSandbox;
    static restaurants = RestaurantSandbox;
    static menus = MenuSandbox;
    static users = UserSandbox;



}

