import express from 'express';

// Controllers
import UserController from '../controllers/User.js';


const userRouter = express.Router();

userRouter.post('/sign-up', UserController.signUp);
userRouter.get('/verify-email/:token', UserController.verifyEmail);
userRouter.post('/forgot-password', UserController.forgotPassord);
userRouter.post('/reset-password', UserController.resetPassword);
userRouter.post('/sign-in', UserController.signIn);

export default userRouter;