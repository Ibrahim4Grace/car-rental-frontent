import express from 'express';
import { adminCtrlr } from '../controllers/index.js';

const router = express.Router();

router.get('/index', adminCtrlr.adminPage);
router.get('/car-list', adminCtrlr.carListPage);
router.get('/car-details', adminCtrlr.carDetailsPage);
router.get('/reservations', adminCtrlr.reservationsPage);
router.get('/reservation-details', adminCtrlr.reservationsdeatailsPage);
router.get('/accept-reservation', adminCtrlr.reservationsAcceptPage);
router.get('/reject-reservation', adminCtrlr.reservationsRejectPage);
router.get('/rented-cars', adminCtrlr.rentedcarsPage);

export default router;
