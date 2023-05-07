import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAppDispatch, useAppSelector } from '../../../store';

// Components
import { Input, Button } from '../../../components';

// Actions
import { forgotPassword } from '../../../store/user/user.actions';

// Utils
import { forgotPasswordSchema } from '../../../utils';

// Types
import { IUserForgotPasswordData } from '../../../types';


const ForgotPassword = () => {
  const dispatch = useAppDispatch();

  const { forgotPasswordData, loading: forgotPasswordLoading } = useAppSelector((state) => state.user);

  const { register, handleSubmit } = useForm<IUserForgotPasswordData>({
    resolver: yupResolver(forgotPasswordSchema),
  });

  const handleFormSubmit = (data: IUserForgotPasswordData) => {
    dispatch(forgotPassword(data));
  };


  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-4xl font-semibold mb-4">
        Forgot Password
      </h2>
      <form
        className="flex flex-col items-center justify-center max-w-[320px] w-full"
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        <Input
          className="w-full mb-5"
          placeholder="Email address"
          {...register('email')}
        />
        <Button
          className="w-full mb-4"
          icon={forgotPasswordLoading ? 'loader-spinner' : null}
          disabled={forgotPasswordLoading}
        >
          Continue
        </Button>
        <Link className="text-primary-400 underline text-sm" to="/">
          Sign In
        </Link>
        {forgotPasswordData && (
          <span className="mt-2 text-sm text-center">
            Reset password email has been sent to <span className="text-primary-400">{forgotPasswordData.email}</span>. Please check your email.
          </span>
        )}
      </form>
    </div>
  );
};

export default ForgotPassword;