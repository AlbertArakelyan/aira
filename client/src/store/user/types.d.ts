import { IUser } from '../../types';
import { IUserSignUpData } from '../../types';

interface IUserData {
  accessToken: string | null;
  userData: IUser | null;
}

interface IUserState extends IUserData {
  error: string | null;
  loading: boolean;
}

// Payload type
interface IGetUserPayloadData extends IUserSignUpData {

}

// Return type
interface IGetUserActionReturnData extends IUserData {

}