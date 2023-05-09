import { ISummary, ISummarizerInputData } from '../../types';


interface ISummaryState {
  summaryData: ISummary | null;
  loading: boolean;
  error: string | null;
}


/** summarize action */
// Payload type
interface ISummarizePayloadData extends ISummarizerInputData {
  length?: string;
}

// Return type
interface ISummarizeActionReturnData extends ISummary {

}