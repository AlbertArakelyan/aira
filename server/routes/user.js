import express from 'express';

// Controllers
import UserController from '../controllers/User.js';


const userRouter = express.Router();

userRouter.post('/sign-up', UserController.signUp);
userRouter.get('/verify-email/:token', UserController.verifyEmail);

export default userRouter;