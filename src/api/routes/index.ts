import { Router } from 'express';
import { routes } from './../v1/routes';

export const apiRoutes = Router().use('/v1', routes);
export { generalRouter } from './general-routes'