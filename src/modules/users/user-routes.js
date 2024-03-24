import express from 'express';
import { authMiddleware } from '../../middleware/auth-middleware.js';
import userController from './user-controller.js';

const userRoutes = new express.Router();
userRoutes.use(authMiddleware);

// users
userRoutes.get('/users/current', userController.get);
userRoutes.patch('/users/current', userController.update);

export { userRoutes };
