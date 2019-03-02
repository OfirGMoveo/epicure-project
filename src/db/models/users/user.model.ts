import { Schema, model } from 'mongoose';
import { BoundTo, StrongSchema, createStrongSchema } from './../../../ts-coverage';
import { IUser } from './i-user';


class UserMethods {
    /**
     * print this doc _id.
     */
    printId: BoundTo<IUserModel> = function() { console.log(this._id); };

    // more methods ...
}

export interface IUserModel extends IUser, UserMethods { }


const UserSchema = createStrongSchema(({
    orders: {type: [{ type: Schema.Types.ObjectId, ref: 'dishes' }] },
    favoriteRestaurants: {type: [{ type: Schema.Types.ObjectId, ref: 'restaurants' }] },

} as StrongSchema<IUser>), new UserMethods(), { timestamps: true });

UserSchema.set('toJSON', { transform: function(doc, ret, option) { return ret; }})


export const User = model<IUserModel>('menus', UserSchema) 


