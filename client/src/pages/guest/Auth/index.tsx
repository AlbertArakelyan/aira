import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAppDispatch } from '../../../store';

// Components
import { Input, Button } from '../../../components';

// Utils
import { signUpSchema, signInSchema } from '../../../utils';

// Types
import { IUserSignInData, IUserSignUpData } from '../../../types';


const Auth = () => {
  const dispatch = useAppDispatch();

  const [isSignUp, setIsSugnUp] = useState(false);

  const { register, handleSubmit, watch, unregister } = useForm<IUserSignInData | IUserSignUpData>({
    resolver: yupResolver(isSignUp ? signUpSchema : signInSchema),
  });

  const handleToggleIsSignUp = () => {
    setIsSugnUp((prevIsSignUp) => !prevIsSignUp);
  };

  const handleFornSubmit = (data: IUserSignInData | IUserSignUpData) => {
        
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
        <Button className="w-full mb-4" type="submit">
          Sign {isSignUp ? 'Up' : 'In'}
        </Button>
        <div className="text-sm">
          {isSignUp ? (
            <p>
              Already have an account? <span className="text-primary-400 cursor-pointer" onClick={handleToggleIsSignUp}>Sign In</span>
            </p>
          ) : (
            <p>
              Don't have an account? <span className="text-primary-400 cursor-pointer" onClick={handleToggleIsSignUp}>Sign Up</span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Auth;