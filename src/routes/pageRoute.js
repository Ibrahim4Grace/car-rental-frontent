import express from 'express';

import { landingPage } from '../controllers/pageController.js';

const router = express.Router();

router.route('/').post(landingPage);

export default router;
