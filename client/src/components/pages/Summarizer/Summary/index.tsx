import { FC } from 'react';

// Types
import { ISummaryProps } from './types';


const Summary: FC<ISummaryProps> = ({ summary }) => {
  return (
    <div className="flex flex-col w-full">
      <h4 className="text-2xl font-sem mb-2">
        Article <span className="bg-gradient-to-r from-success-300 to-success-700 bg-clip-text text-fill-color-transparent">Summary</span>
      </h4>
      <p className="w-full p-3 border-gray-200 shadow-gray-300 shadow-lg rounded border-[1px]">
        {summary}
      </p>
    </div>
  );
};

export default Summary;