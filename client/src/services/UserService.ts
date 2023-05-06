// Utils
import { request } from '../utils';

// Services
import Service from './Service';

// Types
import { IResponseData } from './types';


class UserService extends Service {
  static signUp<T, D>(data: D) {
    return request<IResponseData<T>>('POST', 'user/sign-up', data);
  }
}

export default UserService;