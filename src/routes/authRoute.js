import express from 'express';
import { authCtrlr } from '../controllers/index.js';

const router = express.Router();

router.get('/register', authCtrlr.register);
router.get('/login', authCtrlr.login);
router.get('/forgetPassword', authCtrlr.forgetPassword);
router.get('/resetPassword', authCtrlr.resetPassword);

export default router;
