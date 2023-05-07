import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import crypto from 'crypto';
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
  static async signIn(req, res) {
    try {
      const { email, password } = req.body;

      // TODO add validations based on all fields

      const user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({
          success: false,
          message: userControllerMessages.invalidEmailorPassword,
          statusCode: 400,
        });
      }

      const isPasswordCorrect = await bcrypt.compare(password, user.password);

      if (!isPasswordCorrect) {
        return res.status(400).json({
          success: false,
          message: userControllerMessages.invalidEmailorPassword,
          statusCode: 400,
        });
      }

      const accessToken = jwt.sign({
        id: user._id,
        email: user.email,
        fullName: user.fullName,
        role: user.role,
      }, process.env.JWT_SECRET);

      const userData = {
        id: user._id,
        email: user.email,
        fullName: user.fullName,
        photoPath: user.photoPath,
        role: user.role,
      };

      res.status(200).json({
        success: true,
        data: {
          accessToken,
          userData,
        },
        message: userControllerMessages.loginSuccess,
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

      const verificationUrl = `${process.env.NODEMAILER_WEBSITE_URL}verify-email/${token}`;
      
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

  static async forgotPassord(req, res) {
    try {
      const { email } = req.body;

      const user = await User.findOne({ email });

      if (!user) {
        return res.status(404).json({
          success: false,
          message: userControllerMessages.notFound,
          statusCode: 404,
        });
      }

      const resetToken = crypto.randomUUID().toString('hex');

      user.resetPasswordToken = resetToken;
      user.resetPasswordExpires = Date.now() + 3600000; // 1 hour

      await user.save();

      const resetUrl = `${process.env.NODEMAILER_WEBSITE_URL}reset-password/${resetToken}`;

      const mailOptions = {
        from: 'albertarakelyan1998@gmail.com',
        to: email,
        subject: 'Password Reset Request',
        html: `Please click this link to reset your password: <a href="${resetUrl}">${resetUrl}</a>`,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
          return res.status(500).json({
            success: false,
            message: userControllerMessages.sendMailError,
            statusCode: 500,
          });
        } else {
          console.log(`Email sent: ${info.response}`);
          return res.status(200).json({
            success: true,
            data: {
              email,
            },
            message: userControllerMessages.resetPassowrdMailSent,
            statusCode: 200,
          });
        }
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

  static async resetPassword(req, res) {
    try {
      const { resetToken, password, confirmPassword } = req.body;

      const user = await User.findOne({ resetPasswordToken: resetToken, resetPasswordExpires: { $gt: Date.now() } });

      if (!user) {
        return res.status(400).json({
          success: false,
          message: userControllerMessages.invalidToken,
          statusCode: 400,
        });
      }

      if (password !== confirmPassword) {
        return res.status(400).json({
          success: false,
          message: userControllerMessages.passwordsDontMatch,
          statusCode: 400,
        });
      }

      const hashedPassword = await bcrypt.hash(password, 14);

      user.password = hashedPassword;
      user.resetPasswordToken = undefined;
      user.resetPasswordExpires = undefined;

      await user.save();

      res.status(200).json({
        success: true,
        data: {
          isPasswordReset: true,
        },
        message: userControllerMessages.passwordResetSuccess,
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

  static async getUser(req, res) {
    try {
      const userId = req.user.id;
      console.log(userId);

      const user = await User.findById(userId);

      if (!user) {
        return res.status(404).json({
          success: false,
          message: userControllerMessages.userDataNotFound,
          statusCode: 404,
        });
      }

      const userData = {
        id: user._id,
        email: user.email,
        fullName: user.fullName,
        photoPath: user.photoPath,
      };

      res.status(200).json({
        success: true,
        data: {
          userData,
        },
        message: userControllerMessages.userDataReceived,
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