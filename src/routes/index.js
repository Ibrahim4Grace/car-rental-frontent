import express from 'express';
const router = express.Router();

// Import route handlers
import pageRoute from './pageRoute.js';

import middleware from '../middlewares/expressMiddleware.js';

//middlewares
router.use(middleware);

// Mount the landing page route
router.use('/', pageRoute);

export default router;
