
import { ObjectID } from 'mongodb';
import { Menu, IMenuModel } from '../../../db/models/menus/menu.model'

export class MenuSandbox {

    public static Menu =  Menu;  // for seeding

    public static alwaysLean: boolean = true;

    public static getAll() { 
        Menu.find({}).lean();
    }
    



}



