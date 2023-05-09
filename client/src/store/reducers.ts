import userReducer from './user/user.reducer';
import summaryReducer from './summary/summary.reducer';


const reducers = {
  user: userReducer,
  summary: summaryReducer,
};

export default reducers;