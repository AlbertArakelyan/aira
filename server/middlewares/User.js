import jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';

// Constants
import userMiddlewareMessages from '../constants/userMiddlewareMessages.js';


dotenv.config();

class UserMiddleware {
  static async auth(req, res, next) {
    try {
      const token = req.headers.authorization.split(' ')[1];

      jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
        if (error) {
          return res.status(401).json({
            success: false,
            message: userMiddlewareMessages.invalidOrExpiredToken,
            statusCode: 401,
          });
        }

        req.user = decoded;
        next();
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        success: false,
        message: error.message || 'Something went worng',
      });
    }
  }
}

export default UserMiddleware;