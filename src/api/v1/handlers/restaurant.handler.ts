
import { HandlerCallback } from '../../../ts-coverage';
import { IRestaurantModel } from './../../../db/models/restaurants'
import { PaginationParams, RestaurantsFilterParams } from './../../../shared' 
import { DbSandbox } from './../../../utils/db-sandbox';

export class RestaurantHandler {


    getAll(params: { page: PaginationParams }, cb: HandlerCallback<Partial<IRestaurantModel>[]>) {
        DbSandbox.restaurants.getAll(params.page)
            .then( docs => cb(null, docs) )
            .catch( error => cb(error, null) );
    }

    
    filter(params: { page: PaginationParams, filter: RestaurantsFilterParams }, cb: HandlerCallback<Partial<IRestaurantModel>[]>) {
        DbSandbox.restaurants.filter(params.page, params.filter)
            .then( docs => cb(null, docs) )
            .catch( error => cb(error, null) );
    }

    getById(params: {id: string }, cb: HandlerCallback<Partial<IRestaurantModel>>) {
        DbSandbox.restaurants.getById(params.id)
            .then( docs => cb(null, docs) )
            .catch( error => cb(error, null) );
    }
    
    patchDeactivateById(params: {id: string }, cb: HandlerCallback<Partial<IRestaurantModel>>) {
        DbSandbox.restaurants.patchDeactivateById(params.id)
            .then( docs => cb(null, docs) )
            .catch( error => cb(error, null) );
    }

    patchReactivateById(params: {id: string }, cb: HandlerCallback<Partial<IRestaurantModel>>) {
        DbSandbox.restaurants.patchReactivateById(params.id)
            .then( docs => cb(null, docs) )
            .catch( error => cb(error, null) );
    }

    getCuisines(cb: HandlerCallback<{cuisines: string[]}>) {
        DbSandbox.restaurants.getCuisines()
            .then( docs => cb(null, docs[0]) )
            .catch( error => cb(error, null) );
    }

    getSearchCompletion(params: { page: PaginationParams, search: string }, cb: HandlerCallback<{restaurants: string[]}>) {
        DbSandbox.restaurants.searchCompletion(params.page, params.search)
            .then( docs => cb(null, docs) )
            .catch( error => cb(error, null) );
    }

}