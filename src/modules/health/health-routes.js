import express from 'express';
import healthController from './health-controller.js';

const healthRoutes = new express.Router();

healthRoutes.get('/health/ping', healthController.ping);

export { healthRoutes };
