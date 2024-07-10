import express from 'express';
import { pageCtrlr } from '../controllers/index.js';

const router = express.Router();

router.get('/', pageCtrlr.index);
router.get('/about', pageCtrlr.about);
router.get('/service', pageCtrlr.service);
router.get('/blog', pageCtrlr.blog);
router.get('/contact', pageCtrlr.contact);
router.get('/cars', pageCtrlr.cars);
router.get('/team', pageCtrlr.team);
router.get('/testimonial', pageCtrlr.testimonial);

export default router;
