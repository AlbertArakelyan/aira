import express from 'express';

// Controllers
import UserController from '../controllers/User.js';


const userRouter = express.Router();

userRouter.post('/sign-up', UserController.signUp);
userRouter.get('/verify-email/:token', UserController.verifyEmail);
userRouter.post('/forgot-password', UserController.forgotPassord);

export default userRouter;