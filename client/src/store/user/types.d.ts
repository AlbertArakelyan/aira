import {
  IUserSignUpData,
  IUserSignInData,
  IUserResetPasswordData,
  IUser,
} from '../../types';

interface IUserData {
  accessToken: string | null;
  userData: IUser | null;
}

interface IVerificationForogotPasswordData {
  email: string;
}

interface IUserState extends IUserData {
  verificationData: IVerificationForogotPasswordData | null;
  isVerificationPassed: boolean | null;
  forgotPasswordData: IVerificationForogotPasswordData | null;
  isPasswordReset: boolean | null;
  error: string | null;
  loading: boolean;
}

/** signIn action */
// PayloadData
interface ISignInPayloadData extends IUserSignInData {

}

interface ISignInActionReturnData extends IUserData {
  
}


/** signUp action */
// Payload type
interface ISignUpPayloadData extends IUserSignUpData {

}

// Return type
interface ISignUpActionReturnData {
  email: string;
}


/** verifyEmail action */
// Payload type
interface IVerifyEmailPayloadData {
  token: string;
}

// Return type
interface IVerifyEmailActionReturnData {
  token: string;
  isEmailVerified: boolean;
}


/** forgotPassword action */
// Payload type
interface IForgotPasswordPayloadData {
  email: string;
}

// Return type
interface IForgotPasswordActionReturnData {
  email: string;
}


/** resetPassword action */
// Payload type
interface IResetPasswordPayloadData extends IUserResetPasswordData {
  resetToken: string;
}

// Return type
interface IResetPasswordActionReturnData {
  isPasswordReset: boolean;
}