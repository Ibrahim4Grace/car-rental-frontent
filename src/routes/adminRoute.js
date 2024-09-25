import express from 'express';
import { adminCtrlr } from '../controllers/index.js';

const router = express.Router();

router.get('/index', adminCtrlr.adminPage);
router.get('/carList', adminCtrlr.carListPage);
router.get('/carDetails', adminCtrlr.carDetailsPage);
router.get('/reservations', adminCtrlr.reservationsPage);
router.get('/reservation-details', adminCtrlr.reservationsdeatailsPage);
router.get('/rentedcars', adminCtrlr.rentedcarsPage);

export default router;
