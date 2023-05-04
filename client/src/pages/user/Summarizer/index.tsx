// Components
import { Input } from '../../../components';


const Summarizer = () => {
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
        <Input
          className="w-full"
        />
      </div>
    </div>
  );
};

export default Summarizer;