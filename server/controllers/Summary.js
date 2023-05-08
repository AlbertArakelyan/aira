import axios from 'axios';

// Controllers
import Controller from './Controller.js';

// Services
import SummaryService from '../services/SummaryService.js';

// Constants
import summaryControllerMessages from '../constants/summaryControllerMessages.js';


class SummaryController extends Controller {
  static async summarize(req, res) {
    try {
      const headers = req.headers;
      const { url, length } = req.query;

      if (!('X-RapidAPI-Key' in headers) || !('X-RapidAPI-Host' in headers)) {
        return res.status(400).json({
          success: false,
          message: summaryControllerMessages.neededHeadersNotProvided,
          statusCode: 400,
        });
      }

      if (!url || !length) {
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

      const response = await SummaryService.summarize(params, headers);
      const { data } = response;

      res.status(200).json({
        success: true,
        data: {
          summary: data,
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