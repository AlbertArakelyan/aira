import { createReducer } from '@reduxjs/toolkit';
import store from 'store';

// Actions
import { summarize } from './summary.actions';

// Types
import { ISummaryState } from './types';


const initialState: ISummaryState = {
  summaryData: store.get('latest-summary'),
  loading: false,
  error: null,
};

const summaryReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(summarize.fulfilled, (state, action) => {
      state.summaryData = action.payload;
      state.error = null;
      state.loading = false;
    })
    .addCase(summarize.rejected, (state, action) => {
      state.error = action.payload as string;
      state.loading = false;
    })
    .addCase(summarize.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
  
    .addDefaultCase((state) => state);
});

export default summaryReducer;