import { useState } from 'react';

// UI
import { Input, Button } from '../../../components';


const Auth = () => {
  const [isSignUp, setIsSugnUp] = useState(false);

  const handleToggleIsSignUp = () => {
    setIsSugnUp((prevIsSignUp) => !prevIsSignUp);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-4xl font-semibold mb-4">
        Welcome Back
      </h2>
      <form className="flex flex-col items-center justify-center max-w-[320px] w-full">
        <Input
          className="w-full mb-3"
          placeholder="Email address"
          type="email"
        />
        <Input
          className={`w-full ${isSignUp ? 'mb-3' : 'mb-5'}`}
          placeholder="Password"
          type="password"
        />
        {isSignUp && (<Input
          className="w-full mb-5"
          placeholder="Confirm password"
          type="password"
        />)}
        <Button className="w-full mb-4">
          Sign {isSignUp ? 'Up' : 'In'}
        </Button>
        <div className="text-sm">
          {isSignUp ? (
            <p>
              Already have an account? <span className="text-primary-400 cursor-pointer" onClick={handleToggleIsSignUp}>Sign In</span>
            </p>
          ) : (
            <p>
              Don't have an account? <span className="text-primary-400 cursor-pointer" onClick={handleToggleIsSignUp}>Sign Up</span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Auth;