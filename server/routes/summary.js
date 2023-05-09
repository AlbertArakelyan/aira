import express from 'express';

// Controllers
import SummaryController from '../controllers/Summary.js';

// Middlewares
import UserMiddleware from '../middlewares/User.js';


const summaryRouter = express.Router();

summaryRouter.post('/', UserMiddleware.auth, SummaryController.summarize);

export default summaryRouter;