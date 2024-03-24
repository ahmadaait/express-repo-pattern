import express from 'express';
import { authMiddleware } from '../../middleware/auth-middleware.js';
import authController from './auth-controller.js';

const authRoutes = new express.Router();

authRoutes.post('/auth/register', authController.register);
authRoutes.post('/auth/login', authController.login);

// authRoutes.use(authMiddleware);
// authRoutes.logout('/auth/current', authController.get);
// authRoutes.patch('/auth/current', authController.update);

export { authRoutes };
