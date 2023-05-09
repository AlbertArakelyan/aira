// Services
import Service from './Service';

// Utils
import { request } from '../utils';

// Types
import { IResponseData } from './types';


class SummaryService extends Service {
  static summarize<T, D>(data: D) {
    return request<IResponseData<T>>('POST', 'summary', data);
  }
}
export default SummaryService;