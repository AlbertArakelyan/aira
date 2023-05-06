import { IUser } from '../../types';

interface IUserState {
  accessToken: string | null;
  userData: IUser | null;
}