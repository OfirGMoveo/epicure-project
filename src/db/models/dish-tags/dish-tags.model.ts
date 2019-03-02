import { Schema, model, Document } from 'mongoose';

export interface IDishTagsModel extends Document { name: string }; 

const DishTagSchema = new Schema<IDishTagsModel>({ 
    name: { 
        type: String,
        enum: ['spicy', 'vegan', 'vegetarian'],
        unique: true
    }
}, { timestamps: true })
    .set('toJSON', { transform: function(doc, ret, option) { return ret; }})

export const DishTag = model<IDishTagsModel>('dish_tags', DishTagSchema) 


