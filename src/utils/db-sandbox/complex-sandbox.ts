
import { ObjectID } from 'mongodb';
import { DishSandbox  } from '../db-sandbox/models/dish-sandbox'
import { OrderSandbox  } from '../db-sandbox/models/order-sandbox'
import { IUserModel } from '../../db/models/users';
import { IOrderModel, IOrder } from '../../db/models/orders';

export class ComplexSandbox {


    public static async postOrder(user : Partial<IUserModel>, details: IOrderModel['details']) {
        const dishes = details.items.map(item => typeof (item.dish) == 'string'? item.dish : item.dish['_id'] );
        const total = await DishSandbox.getPrice(dishes as string[])
        const order: IOrderModel = await OrderSandbox.createOrder(user, details, total);
        return order;
    }
}



