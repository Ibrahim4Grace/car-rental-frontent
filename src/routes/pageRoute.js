import express from 'express';

import {
  index,
  about,
  service,
  blog,
  contact,
  cars,
  team,
  testimonial,
} from '../controllers/pageCtrlr.js';

const router = express.Router();

router.route('/').get(index);
router.route('/about').get(about);
router.route('/service').get(service);
router.route('/blog').get(blog);
router.route('/contact').get(contact);
router.route('/cars').get(cars);
router.route('/team').get(team);
router.route('/testimonial').get(testimonial);

export default router;
