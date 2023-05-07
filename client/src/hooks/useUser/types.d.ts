import { IUser } from '../../types';


interface IUseUserReturnData {
  userData: IUser | null;
  loading: boolean;
  error: string | null;
}