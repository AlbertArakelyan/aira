import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../store';

// Actions
import { getUser } from '../../store/user/user.actions';

// Types
import { IUseUserReturnData } from './types';


const useUser = (): IUseUserReturnData => {
  const dispatch = useAppDispatch();

  const { userData, loading, error, accessToken } = useAppSelector((state) => state.user);

  useEffect(() => {
    if (!userData && accessToken) {
      dispatch(getUser());
    }
  }, []);

  return {
    userData,
    loading,
    error
  };
};

export default useUser;