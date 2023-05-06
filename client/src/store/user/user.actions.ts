import { createAsyncThunk } from '@reduxjs/toolkit';

// Action types
import {
  SIGN_UP,
} from './user.actionTypes';

// Services
import UserService from '../../services/UserService';

// Types
import {IGetUserPayloadData, IGetUserActionReturnData, IUserData } from './types';


export const signUp = createAsyncThunk<IGetUserActionReturnData, IGetUserPayloadData>(
  SIGN_UP,
  async (data) => {
    try {
      const response = await UserService.signUp<IUserData, IGetUserPayloadData>(data);

      console.log(response.data);

      return response.data.data;
    } catch (error: any) {
      throw error.message;
    }
  },
);