import express from 'express';
import { authCtrlr } from '../controllers/index.js';

const router = express.Router();

router.get('/register', authCtrlr.register);
router.get('/verify-otp', authCtrlr.verifyOtp);
router.get('/login', authCtrlr.login);
router.get('/forget-password', authCtrlr.forgetPassword);
router.get('/reset-password/:token', authCtrlr.resetPassword);

export default router;
