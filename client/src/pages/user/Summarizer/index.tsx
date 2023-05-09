import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAppDispatch, useAppSelector } from '../../../store';

// Components
import { Input, Summary, Loader } from '../../../components';

// Actions
import { summarize } from '../../../store/summary/summary.actions';

// Utils
import { summarizerSchema } from '../../../utils';

// Types
import { ISummarizerInputData } from '../../../types';


const Summarizer = () => {
  const dispatch = useAppDispatch();

  const {
    summaryData,
    loading: summarizerLoading,
  } = useAppSelector((state) => state.summary);

  const { register, handleSubmit } = useForm<ISummarizerInputData>({
    defaultValues: {
      url: summaryData?.url,
    },
    resolver: yupResolver(summarizerSchema),
  });

  const handleFormSubmit = (data: ISummarizerInputData) => {
    dispatch(summarize(data));
  };

  return (
    <div>
      <div className="flex flex-col items-center jsutify-start max-w-[768px] mx-auto">
        <div className="flex flex-col items-center justify-start text-center mb-4">
          <h2 className="font-bold text-8xl mb-3">
            Summarize Articles with
          </h2>
          <h3 className="font-semibold text-6xl bg-gradient-to-r from-secondary-300 to-secondary-800 bg-clip-text text-fill-color-transparent">
            OpenAI GPT-4
          </h3>
        </div>
        <form className="w-full mb-4" onSubmit={handleSubmit(handleFormSubmit)}>
          <Input
            className="w-full"
            {...register('url')}
          />
        </form>
        {summarizerLoading ? (
          <Loader />
        ) : (
          summaryData && (
            <Summary summary={summaryData.summary} />
          )
        )}
      </div>
    </div>
  );
};

export default Summarizer;