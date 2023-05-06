import { IUser } from '../../types';
import { IUserSignUpData } from '../../types';

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
  error: string | null;
  loading: boolean;
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