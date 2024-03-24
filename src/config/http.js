import express from 'express';
import { errorMiddleware } from '../middleware/error-middleware.js';
import routes from '../routes/api.js';

export const http = express();
http.use(express.json());

//* PUBLIC ROUTER FIRST *//
http.use(routes);

http.use(errorMiddleware);
