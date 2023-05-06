export interface IUser {
  email: string;
  fullName: string;
  photoPath: string | null;
}

interface IUserSignInData {
  email: string;
  password: string;
}

interface IUserSignUpData extends IUserSignInData {
  fullName: string;
  confirmPassword: string;
}

interface IUserForgotPasswordData {
  email: string;
}