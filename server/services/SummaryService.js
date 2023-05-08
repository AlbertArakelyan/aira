// Utils
import request from '../utils/request.js';


class SummaryService {
  static summarize(params, headers) {
    return request('GET', 'https://article-extractor-and-summarizer.p.rapidapi.com/summarize', null, params, headers);
  }
}

export default SummaryService;