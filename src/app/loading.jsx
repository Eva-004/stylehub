import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
        <DotLottieReact
      src="https://lottie.host/e3f53f84-a456-4b2f-9f18-2130a17a2f03/tyC74ZgQa0.lottie"
      loop
      autoplay
       className="w-32 h-32 text-center"
    />
    </div>
  );
};
export default Loading;
