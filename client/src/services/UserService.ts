// Services
import Service from './Service';

// Utils
import { request } from '../utils';

// Types
import { IResponseData } from './types';


class UserService extends Service {
  static signIn<T, D>(data: D) {
    return request<IResponseData<T>>('POST', 'user/sign-in', data);
  }

  static signUp<T, D>(data: D) {
    return request<IResponseData<T>>('POST', 'user/sign-up', data);
  }

  static verifyEmail<T>(token: string) {
    return request<IResponseData<T>>('GET', `user/verify-email/${token}`);
  }

  static forgotPassword<T, D>(data: D) {
    return request<IResponseData<T>>('POST', 'user/forgot-password', data);
  }

  static resetPassword<T, D>(data: D) {
    return request<IResponseData<T>>('POST', 'user/reset-password', data);
  }

  static getUser<T>() {
    return request<IResponseData<T>>('GET', 'user');
  }
}

export default UserService;