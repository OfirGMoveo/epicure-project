

import { ChefSandbox } from './models/chef-sandbox';
import { RestaurantSandbox } from './models/restaurant-sandbox';
import { DishSandbox } from './models/dish-sandbox';
import { MenuSandbox } from './models/menu-sandbox';
import { DishTag } from './../../db/models/dish-tags/dish-tags.model'

export class DbSandbox {
    static dishTags = {DishTag};
    static chefs = ChefSandbox;
    static dishes = DishSandbox;
    static restaurants = RestaurantSandbox;
    static menus = MenuSandbox;

}

