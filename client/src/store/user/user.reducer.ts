import { createReducer } from '@reduxjs/toolkit';
import store from 'store';

// Actions
import {
  signUp,
  verifyEmail,
  forgotPassword,
  resetPassword,
} from './user.actions';

// Types
import { IUserState } from './types';


const initialState: IUserState = {
  accessToken: store.get('accessToken'),
  userData: null,
  verificationData: null,
  isVerificationPassed: null,
  forgotPasswordData: null,
  isPasswordReset: null,
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

    .addCase(verifyEmail.fulfilled, (state, action) => {
      state.isVerificationPassed = action.payload.isEmailVerified;
      state.loading = false;
      state.error = null;
    })
    .addCase(verifyEmail.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    })
    .addCase(verifyEmail.pending, (state) => {
      state.loading = true;
      state.error = null;
    })

    .addCase(forgotPassword.fulfilled, (state, action) => {
      state.forgotPasswordData = action.payload;
      state.error = null;
      state.loading = false;
    })
    .addCase(forgotPassword.rejected, (state, action) => {
      state.error = action.payload as string;
      state.loading = false;
    })
    .addCase(forgotPassword.pending, (state) => {
      state.loading = true;
      state.error = null; 
    })

    .addCase(resetPassword.fulfilled, (state, action) => {
      state.isPasswordReset = action.payload.isPasswordReset;
      state.loading = false;
      state.error = null;
    })
    .addCase(resetPassword.rejected, (state, action) => {
      state.error = action.payload as string;
      state.loading = false;
    })
    .addCase(resetPassword.pending, (state) => {
      state.loading = true;
      state.error = null; 
    })

    .addDefaultCase((state) => state);
});

export default userReducer;