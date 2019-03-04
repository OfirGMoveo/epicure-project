import { Schema, model } from 'mongoose';
import { BoundTo, StrongSchema, createStrongSchema } from './../../../ts-coverage';
import { IUser } from './i-user';
import { JWTMiddle } from 'jwt-middle';


class UserMethods {
    /**
     * print this doc _id.
     */
    printId: BoundTo<IUserModel> = function() { console.log(this._id); };

    // more methods ...
}

export interface IUserModel extends IUser, UserMethods { }


const UserSchema = createStrongSchema(({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },

    personal: {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true }
    },

    orders:                 {type: [{ type: Schema.Types.ObjectId, ref: 'orders' }], default: [] },
    favoriteRestaurants:    {type: [{ type: Schema.Types.ObjectId, ref: 'restaurants' }], default: [] },

} as StrongSchema<IUser>), new UserMethods(), { timestamps: true });

UserSchema.set('toJSON', { transform: function(doc, ret, option) { return ret; }})
UserSchema.pre<IUser>('save', JWTMiddle.preSaveHashing('password'));


export const User = model<IUserModel>('users', UserSchema) 


