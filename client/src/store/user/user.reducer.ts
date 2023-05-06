import { createReducer } from '@reduxjs/toolkit';
import store from 'store';

// Actions
import { signUp } from './user.actions';

// Types
import { IUserState } from './types';


const initialState: IUserState = {
  accessToken: store.get('accessToken'),
  userData: null,
  verificationData: null,
  isVerificationPassed: null,
  forgotPasswordData: null,
  error: null,
  loading: false,
};

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(signUp.fulfilled, (state, action) => {
      state.verificationData = action.payload;
      state.error = null;
      state.loading = false;
    })
    .addCase(signUp.rejected, (state, action) => {
      state.error = action.payload as string;
      state.loading = false;
    })
    .addCase(signUp.pending, (state) => {
      state.error = null;
      state.loading = false;
    })

    .addDefaultCase((state) => state);
});

export default userReducer;