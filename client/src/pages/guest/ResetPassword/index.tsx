import { Link, useParams, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAppDispatch, useAppSelector } from '../../../store';

// Components
import { Input, Button } from '../../../components';

// Actions
import { resetPassword } from '../../../store/user/user.actions';

// Utils
import { resetPasswordSchema } from '../../../utils';

// Types
import { IUserResetPasswordData } from '../../../types';


const ResetPassword = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { resetToken } = useParams();

  const { loading: resetPasswordLoading } = useAppSelector((state) => state.user);

  const { register, handleSubmit } = useForm<IUserResetPasswordData>({
    resolver: yupResolver(resetPasswordSchema),
  });

  const handleFormSubmit = (data: IUserResetPasswordData) => {
    if (!resetToken) {
      return;
    }

    dispatch(resetPassword({
      ...data,
      resetToken
    })).then((res: any) => {
      if (!res.error) {
        navigate('/');
      }
      console.log(res);
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-4xl font-semibold mb-4">
        Reset Password
      </h2>
      <form
        className="flex flex-col items-center justify-center max-w-[320px] w-full"
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        <Input
          className="w-full mb-3"
          placeholder="New password"
          type="password"
          {...register('password')}
        />
        <Input
          className="w-full mb-5"
          placeholder="Confirm password"
          type="password"
          {...register('confirmPassword')}
        />
        <Button
          className="w-full mb-4"
          icon={resetPasswordLoading ? 'loader-spinner' : null}
          disabled={resetPasswordLoading}
        >
          Reset
        </Button>
        <Link className="text-primary-400 underline text-sm" to="/">
          Sign In
        </Link>
      </form>
    </div>
  );
};

export default ResetPassword;