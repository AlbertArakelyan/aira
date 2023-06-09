import express from 'express';

// Controllers
import UserController from '../controllers/User.js';

// Middlewares
import UserMiddleware from '../middlewares/User.js';


const userRouter = express.Router();

userRouter.post('/sign-up', UserController.signUp);
userRouter.get('/verify-email/:token', UserController.verifyEmail);
userRouter.post('/forgot-password', UserController.forgotPassord);
userRouter.post('/reset-password', UserController.resetPassword);
userRouter.post('/sign-in', UserController.signIn);
userRouter.get('/', UserMiddleware.auth, UserController.getUser);

export default userRouter;