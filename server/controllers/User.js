// Controllers
import Controller from './Controller.js';

// Models
import User from '../models/User.js';


class UserController extends Controller {
  static async signUp(req, res) {
    try {
      const body = req.body;

      console.log(body);
    } catch (error) {
      console.log(error);
      res.status(500).json({
        success: false,
        message: error.message || 'Something went wrong.',
        statusCode: 500,
      });
    }
  }
}

export default UserController;