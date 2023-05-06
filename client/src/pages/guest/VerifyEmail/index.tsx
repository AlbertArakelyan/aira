import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../store';

// Actions
import { verifyEmail } from '../../../store/user/user.actions';


const VerifyEmail = () => {
  const dispatch = useAppDispatch();
  const { token } = useParams();

  const { isVerificationPassed } = useAppSelector((state) => state.user);

  useEffect(() => {
    if (token) {
      dispatch(verifyEmail({ token }));
    } else {
      // TODO make an alert with tosatify
    }
  }, []);
  

  return (
    <div className="w-full h-full mt-4 flex flex-col items-center justify-start">
      <p className={`text-2xl ${isVerificationPassed ? 'text-success-500': 'text-danger-500'}`}>
        {isVerificationPassed ? 'Your email is successfully verified.' : 'Email verification is failed.'}
      </p>
      <Link className="text-secondary-400 underline hover:cursor-pointer text-sm" to="/">
        Sign In
      </Link>
    </div>
  );
};

export default VerifyEmail;