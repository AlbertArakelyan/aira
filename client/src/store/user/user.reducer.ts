import { createReducer } from '@reduxjs/toolkit';
import store from 'store';

// Types
import { IUserState } from './types';


const initialState: IUserState = {
  accessToken: store.get('accessToken'),
  userData: null,
  error: null,
  loading: false,
};

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addDefaultCase((state) => state);
});

export default userReducer;