import { Schema, model } from 'mongoose';
import { BoundTo, StrongSchema, createStrongSchema } from './../../../ts-coverage';
import { IChef } from './i-chef';


class ChefMethods {
    /**
     * print this doc _id.
     */
    printId: BoundTo<IChefModel> = function() { console.log(this._id); };

    // more methods ...
}

export interface IChefModel extends IChef, ChefMethods { }; 


const ChefSchema = createStrongSchema(({
    name:           { type: String,   required: true },
    restaurants:    { type: [{type: Schema.Types.ObjectId, ref: 'restaurants'}], default: [] },
    about:          { type: String,   required: true },

} as StrongSchema<IChef>), new ChefMethods(), { timestamps: true })

ChefSchema.set('toJSON', { transform: function(doc, ret, option) { return ret; }})


export const Chef = model<IChefModel>('chefs', ChefSchema) 


