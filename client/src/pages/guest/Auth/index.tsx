import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAppDispatch, useAppSelector } from '../../../store';

// Components
import { Input, Button } from '../../../components';

// Actions
import { signUp } from '../../../store/user/user.actions';

// Utils
import { signUpSchema, signInSchema } from '../../../utils';

// Types
import { IUserSignInData, IUserSignUpData } from '../../../types';


const Auth = () => {
  const dispatch = useAppDispatch();

  const {
    verificationData,
  } = useAppSelector((state) => state.user);

  const [isSignUp, setIsSugnUp] = useState(false);

  const { register, handleSubmit, watch, unregister } = useForm<IUserSignInData | IUserSignUpData>({
    resolver: yupResolver(isSignUp ? signUpSchema : signInSchema),
  });

  const handleToggleIsSignUp = () => {
    setIsSugnUp((prevIsSignUp) => !prevIsSignUp);
  };

  const handleFornSubmit = (data: IUserSignInData | IUserSignUpData) => {
    if (isSignUp) {
      const sendData = data as IUserSignUpData;
      dispatch(signUp(sendData));
    }
  };

  useEffect(() => {
    if (!isSignUp) {
      unregister('confirmPassword');
      unregister('fullName');
    }
  }, [isSignUp]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-4xl font-semibold mb-4">
        Welcome Back
      </h2>
      <form
        className="flex flex-col items-center justify-center max-w-[320px] w-full"
        onSubmit={handleSubmit(handleFornSubmit)}
      >
        {isSignUp && (
          <Input
            className="w-full mb-3"
            placeholder="Full name"
            type="text"
            {...register('fullName')}
          />
        )}
        <Input
          className="w-full mb-3"
          placeholder="Email address"
          type="email"
          {...register('email')}
        />
        <Input
          className={`w-full ${isSignUp ? 'mb-3' : 'mb-5'}`}
          placeholder="Password"
          type="password"
          {...register('password')}
        />
        {isSignUp && (<Input
          className="w-full mb-5"
          placeholder="Confirm password"
          type="password"
          {...register('confirmPassword')}
        />)}
        <Button className="w-full mb-4">
          Sign {isSignUp ? 'Up' : 'In'}
        </Button>
        <div className="text-sm flex flex-col items-center justify-start">
          {isSignUp ? (
            <p>
              Already have an account? <span className="text-primary-400 cursor-pointer underline" onClick={handleToggleIsSignUp}>Sign In</span>
            </p>
          ) : (
            <p>
              Don't have an account? <span className="text-primary-400 cursor-pointer underline" onClick={handleToggleIsSignUp}>Sign Up</span>
            </p>
          )}
          <Link className="text-primary-400 underline" to="/forgot-password">
            Forgot password?
          </Link>
        </div>
        {verificationData && (
          <span className="text-xs mt-4 text-center">
            Verifcation email has been sent to <span className="text-primary-400">{verificationData.email}</span>. Please check your email.
          </span>
        )}
      </form>
    </div>
  );
};

export default Auth;