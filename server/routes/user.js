import express from 'express';

// Controllers
import UserController from '../controllers/User.js';


const userRouter = express.Router();

userRouter.post('/sign-up', UserController.signUp);

export default userRouter;