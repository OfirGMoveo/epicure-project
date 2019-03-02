import { Schema, model } from 'mongoose';
import { BoundTo, Mesh, StrongSchema, createStrongSchema, BoundMethod } from './../../../ts-coverage';
import { IRestaurant } from './i-restaurant';


class RestaurantMethods {

    isOpen: BoundMethod<IRestaurantModel, [number], boolean> = function(time: number = Date.now()): boolean { 
        const timeAsHour = new Date(time).getHours();
        const timeAsDay = new Date(time).getDay();
        const {open, close} = this.openingTime[timeAsDay];
        if(open < close) { // open 02 before noon, close 10 before noon
            return open <= timeAsHour && timeAsHour < close;
        } else { // open 17 after noon, close 02 before noon
            return open <= timeAsHour || timeAsHour < close;
        }
    };

    /**
     * print this doc _id.
     */
    printId: BoundTo<IRestaurantModel> = function() { console.log(this._id); };

    // more methods ...
}

export interface IRestaurantModel extends IRestaurant, RestaurantMethods { }; 

const RestaurantSchema = createStrongSchema(({
    name:        { type: String,   required: true },
    menus:       { type: [{type: Schema.Types.ObjectId, ref: 'menus'}] },
    chef:        { type: Schema.Types.ObjectId, ref: 'chefs'},
    cuisine:     { type: String,   required: true },
    openingTime: {  
        1: { open: { type: Number, required: true }, close: { type: Number, required: true } } ,
        2: { open: { type: Number, required: true }, close: { type: Number, required: true } } ,
        3: { open: { type: Number, required: true }, close: { type: Number, required: true } } ,
        4: { open: { type: Number, required: true }, close: { type: Number, required: true } } ,
        5: { open: { type: Number, required: true }, close: { type: Number, required: true } } ,
        6: { open: { type: Number, required: true }, close: { type: Number, required: true } } ,
        7: { open: { type: Number, required: true }, close: { type: Number, required: true } } ,
    },
    address:     { type: String,   required: true },
    about:       { type: String,   required: true }, 

} as StrongSchema<IRestaurant>), new RestaurantMethods(), { timestamps: true });

RestaurantSchema.set('toJSON', { transform: function(doc, ret, option) { return ret; }})


export const Restaurant = model<IRestaurantModel>('restaurants', RestaurantSchema);

