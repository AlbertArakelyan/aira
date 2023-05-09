// Utils
import request from '../utils/request.js';


class SummaryService {
  static summarize(params) {
    const rapidApiHeaders = {
      'X-RapidAPI-Host': 'article-extractor-and-summarizer.p.rapidapi.com',
    };
    
    return request('GET', 'https://article-extractor-and-summarizer.p.rapidapi.com/summarize', null, params, rapidApiHeaders);
  }
}

export default SummaryService;