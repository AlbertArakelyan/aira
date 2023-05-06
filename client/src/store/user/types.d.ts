import { IUser } from '../../types';
import { IUserSignUpData } from '../../types';

interface IUserData {
  accessToken: string | null;
  userData: IUser | null;
}

interface IVerificationData {
  email: string;
}

interface IUserState extends IUserData {
  verificationData: IVerificationData | null;
  isVerificationPassed: boolean | null;
  forgotPasswordData: any;
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