
import { ObjectID } from 'mongodb';
import { Chef, IChefModel } from '../../../db/models/chefs/chef.model'

export interface PageOptions { skip: number, limit: number }
export interface SortOptions { by: ('popularity' | 'alfa'), order: 1 | -1 }

export class ChefSandbox {

    public static Chef =  Chef;  // for seeding

    public static alwaysLean: boolean = true;

    public static getAll() { 
        Chef.find({}).lean();
    }
}



