import { createAsyncThunk } from '@reduxjs/toolkit';

// Action types
import {
  SIGN_UP,
  VERIFY_EMAIL,
  FORGOT_PASSWORD,
  RESET_PASSWORD,
} from './user.actionTypes';

// Services
import UserService from '../../services/UserService';

// Types
import {
  ISignUpPayloadData,
  ISignUpActionReturnData,
  IVerifyEmailPayloadData,
  IVerifyEmailActionReturnData,
  IForgotPasswordPayloadData,
  IForgotPasswordActionReturnData,
  IResetPasswordPayloadData,
  IResetPasswordActionReturnData,
} from './types';


export const signUp = createAsyncThunk<ISignUpActionReturnData, ISignUpPayloadData>(
  SIGN_UP,
  async (data) => {
    try {
      const response = await UserService.signUp<ISignUpActionReturnData, ISignUpPayloadData>(data);

      if (!response.data?.success) {
        throw new Error(response.data.message || 'Something went wrong');
      }

      return response.data.data;
    } catch (error: any) {
      throw error.message as string;
    }
  },
);

export const verifyEmail = createAsyncThunk<IVerifyEmailActionReturnData, IVerifyEmailPayloadData>(
  VERIFY_EMAIL,
  async ({ token }) => {
    try {
      const response = await UserService.verifyEmail<IVerifyEmailActionReturnData>(token);

      if (!response.data?.success) {
        throw new Error(response.data.message || 'Something went wrong');
      }

      return response.data.data;
    } catch (error: any) {
      throw error.message as string;
    }
  },
);

export const forgotPassword = createAsyncThunk<IForgotPasswordActionReturnData, IForgotPasswordPayloadData>(
  FORGOT_PASSWORD,
  async (data) => {
    try {
      const response = await UserService.forgotPassword<IForgotPasswordActionReturnData, IForgotPasswordPayloadData>(data);

      if (!response.data?.success) {
        throw new Error(response.data.message || 'Something went wrong');
      }
      
      return response.data.data;
    } catch (error: any) {
      throw error.message as string;
    }
  },
);

export const resetPassword = createAsyncThunk<IResetPasswordActionReturnData, IResetPasswordPayloadData>(
  RESET_PASSWORD,
  async (data) => {
    try {
      const response = await UserService.resetPassword<IResetPasswordActionReturnData, IResetPasswordPayloadData>(data);

      if (!response.data?.success) {
        throw new Error(response.data.message || 'Something went wrong');
      }

      return response.data.data;
    } catch (error: any) {
      throw error.message as string;
    }
  },
);