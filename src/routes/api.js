import express from 'express';
// import authRoutes from './auth-routes';
import { authRoutes } from '../modules/auth/auth-routes.js';
import { healthRoutes } from '../modules/health/health-routes.js';
import { userRoutes } from '../modules/users/user-routes.js';

const router = express.Router();
const prefix = '/api';

router.use(prefix, healthRoutes);
router.use(prefix, authRoutes);
router.use(prefix, userRoutes);
// router.use('/api/auth', authRoutes);

export default router;
