
import { HandlerCallback } from '../../../ts-coverage';
import { DbSandbox, ComplexSandbox } from './../../../utils/db-sandbox';
import { IUserModel } from 'src/db/models/users';
import { IOrderModel } from 'src/db/models/orders/order.model';




export class UserHandler {


    signIn(params: {user: IUserModel, token: string }, cb: HandlerCallback<{user: Partial<IUserModel>, token: String}>) {
        // DbSandbox.users.signIn(params.user)
            // .then( docs => cb(null, docs) )
            // .catch( error => cb(error, null) );
            cb(null, { user: {  ...(params.user.toObject()), password: undefined }, token: params.token })
    }
    signUp(params: {user: Partial<IUserModel>}, cb: HandlerCallback<Partial<IUserModel>>) {
        DbSandbox.users.signUp(params.user)
            .then( docs => cb(null, docs) )
            .catch( error => cb(error, null) );
    }

    
    order(params: { user: IUserModel, orderDetails: IOrderModel['details'] }, cb: HandlerCallback<{ order: Partial<IOrderModel> }>) {
        ComplexSandbox.postOrder(params.user, params.orderDetails)
        .then(order => cb(null, {order}) )
        .catch( error => cb(error, null) );
    }

    addFavoriteRestaurant(params: { restaurantId: string }, cb: HandlerCallback<Partial<IUserModel>>) {
      
    }

    removeFavoriteRestaurant(params: { restaurantId: string }, cb: HandlerCallback<Partial<IUserModel>>) {
      
    }
    

}