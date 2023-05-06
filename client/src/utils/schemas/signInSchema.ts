import * as yup from 'yup';

// Constants
import {
  requiredMessage,
  emailMessage,
  validationLength,
  minValidationLength,
  minLengthMessage,
  maxLengthMessage,
} from '../../constants';


const signInSchema = yup.object({
  email: yup
    .string()
    .email(emailMessage)
    .max(validationLength.base, maxLengthMessage.base)
    .required(requiredMessage),
  password: yup
    .string()
    .min(minValidationLength.base, minLengthMessage.base)
    .max(validationLength.base, maxLengthMessage.base)
    .required(requiredMessage),
});

export type SignInFormDataType = yup.InferType<typeof signInSchema>;

export default signInSchema;