import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import * as dotenv from 'dotenv';

// Controllers
import Controller from './Controller.js';

// Models
import User from '../models/User.js';

// Utils
import transporter from '../utils/transporter.js';

// Constants
import userControllerMessages from '../constants/userControllerMessages.js';


dotenv.config();

class UserController extends Controller {
  static async signUp(req, res) {
    try {
      const {
        email,
        password,
        fullName,
        confirmPassword,
      } = req.body;

      // TODO add validations based on all fields

      const existingUser = await User.findOne({ email });

      if (existingUser) {
        return res.status(400).json({
          success: false,
          message: userControllerMessages.alreadyExists,
          statusCode: 400,
        });
      }

      const hashedPassword = await bcrypt.hash(password, 14);

      const user = new User({
        email,
        password: hashedPassword,
        fullName,
        role: 'user',
        isEmailVerified: false,
      });

      const token = jwt.sign({
        userId: user._id,
      }, process.env.JWT_SECRET);

      const verificationUrl = `${process.env.NODEMAILER_WEBSITE_URL}${token}`;
      
      const mailOptions = {
        from: 'albertarakelyan1998@gmail.com',
        to: email,
        subject: 'Please verify your email',
        html: `Please click this link to verify your email: <a href="${verificationUrl}">${verificationUrl}</a>`,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
        } else {
          console.log(`Email sent: ${info.response}`);
        }
      });

      await user.save();

      res.status(201).json({
        success: true,
        data: {
          email,
        },
        message: userControllerMessages.verifyEmail,
        statusCode: 201,
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

  static async verifyEmail (req, res) {
    try {
      const { token } = req.params;
      const { userId } = jwt.verify(token, process.env.JWT_SECRET);

      const user = await User.findById(userId);

      user.isEmailVerified = true;

      await user.save();

      res.status(200).json({
        success: true,
        data: {
          token,
          isEmailVerified: true,
        },
        message: userControllerMessages.emailVerified,
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

export default UserController;