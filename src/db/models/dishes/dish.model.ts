import { Schema, model } from 'mongoose';
import { BoundTo, StrongSchema, createStrongSchema } from './../../../ts-coverage';
import { IDish } from './i-dish';


class DishMethods {
    /**
     * print this doc _id.
     */
    printId: BoundTo<IDishModel> = function() { console.log(this._id); };

    // more methods ...
}


export interface IDishModel extends IDish, DishMethods { }; 

const DishSchema = createStrongSchema(({
    name:           { type: String,   required: true },
    description:    { type: String },
    price:          { type: Number,   required: true },
    ingredients:    { type: [{ type: String,  required: true }]},
    tags:           { type: [{ type: Schema.Types.ObjectId, ref: 'dish_tags'}] },
    restaurant:     { type: Schema.Types.ObjectId, ref: 'restaurants'} 

} as StrongSchema<IDish>), new DishMethods(), { timestamps: true });

DishSchema.set('toJSON', { transform: function(doc, ret, option) { return ret; }})


export const Dish = model<IDishModel>('dishes', DishSchema) 


