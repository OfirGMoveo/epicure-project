
import { ObjectID } from 'mongodb';
import { Menu, IMenuModel } from '../../../db/models/menus/menu.model'
// import { auth } from 'firebase-admin';

// export interface PageOptions { skip: number, limit: number }
// export interface SortOptions { by: ('popularity' | 'alfa'), order: 1 | -1 }

export class MenuSandbox {

    // public static get Chef() { return Chef; } // for seeding
    public static Menu =  Menu;  // for seeding

    public static alwaysLean: boolean = true;

    public static getAll() { 
        Menu.find({}).lean();
    }
    



}



