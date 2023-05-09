import axios from 'axios';

// Controllers
import Controller from './Controller.js';

// Models
import Summary from '../models/Summary.js';

// Services
import SummaryService from '../services/SummaryService.js';

// Constants
import summaryControllerMessages from '../constants/summaryControllerMessages.js';


class SummaryController extends Controller {
  static async summarize(req, res) {
    try {
      const { url, length } = req.body;
      const userId = req.user.id;

      if (!url) {
        return res.status(400).json({
          success: false,
          message: summaryControllerMessages.urlNotProvidedCorrectly,
          statusCode: 400,
        });
      }

      const params = {
        url,
        length,
      };

      const response = await SummaryService.summarize(params);
      const { data } = response;

      if (!response.data?.summary) {
        throw new Error('Something went wrong');
      }

      const summary = new Summary({
        url,
        summary: data.summary,
        userId,
      });

      await summary.save();

      res.status(200).json({
        success: true,
        data: {
          summary: data.summary,
          url,
        },
        message: summaryControllerMessages.summarizeSucces,
        statusCode: 200,
      });
    } catch (error) {
      super.catchError(error);
      res.status(500).json({
        success: false,
        message: error.message || 'Something went wrong.',
        statusCode: 500,
      });
    }
  }
}

export default SummaryController;