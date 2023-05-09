import * as yup from 'yup';

// Constants
import {
  minValidationLength,
  minLengthMessage,
} from '../../constants';


const summarizerSchema = yup.object({
  url: yup
    .string()
    .required()
    .min(minValidationLength.base, minLengthMessage.base),
});

export type SummarizerFormDataType = yup.InferType<typeof summarizerSchema>;

export default summarizerSchema;