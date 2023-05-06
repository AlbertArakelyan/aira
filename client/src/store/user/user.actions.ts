import { createAsyncThunk } from '@reduxjs/toolkit';

// Action types
import {
  SIGN_UP,
} from './user.actionTypes';

// Services
import UserService from '../../services/UserService';

// Types
import {ISignUpPayloadData, ISignUpActionReturnData } from './types';


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