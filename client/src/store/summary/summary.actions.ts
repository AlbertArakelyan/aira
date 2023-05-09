import { createAsyncThunk } from '@reduxjs/toolkit';
import store from 'store';

// Services
import SummaryService from '../../services/SummaryService';

// Action types
import { SUMMARIZE } from './summary.actionTypes';

// Types
import {
  ISummarizePayloadData,
  ISummarizeActionReturnData,
} from './types';


export const summarize = createAsyncThunk<ISummarizeActionReturnData, ISummarizePayloadData>(
  SUMMARIZE,
  async (params) => {
    try {
      const response = await SummaryService.summarize<ISummarizeActionReturnData, ISummarizePayloadData>(params);

      if (!response.data?.success) {
        throw new Error(response.data.message || 'Something went wrong');
      }

      store.set('latest-summary', response.data.data);

      return response.data.data;
    } catch (error: any) {
      throw error.message as string;   
    }
  },
);