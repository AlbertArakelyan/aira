import { useState } from 'react';

// UI
import { Input, Button } from '../../../components';


const Auth = () => {
  const [isSignUp, setIsSugnUp] = useState(false);


  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-4xl font-semibold mb-4">
        Welcome Back
      </h2>
      <form className="flex flex-col items-center justify-center max-w-[320px] w-full">
        <Input
          className="w-full mb-3"
          placeholder="Email address"
        />
        <Input
          className="w-full mb-5"
          placeholder="Password"
        />
        <Button className="w-full mb-4">
          Sign In
        </Button>
        <div className="text-sm">
          {isSignUp ? (
            <p>
              Already have an account? <span className="text-primary-400 cursor-pointer">Sign In</span>
            </p>
          ) : (
            <p>
              Don't have an account? <span className="text-primary-400 cursor-pointer">Sign Up</span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Auth;