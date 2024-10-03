import express from 'express';
import { userCtrlr } from '../controllers/index.js';

const router = express.Router();

router.get('/index', userCtrlr.userPage);
router.get('/car-list', userCtrlr.carListPage);
router.get('/booking', userCtrlr.bookingPage);
router.get('/ental-history', userCtrlr.schedulePage);
router.get('/profile', userCtrlr.profilePage);

export default router;
