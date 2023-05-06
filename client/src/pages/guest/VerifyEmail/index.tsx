import { useEffect } from 'react';
import { useParams } from 'react-router-dom';


const VerifyEmail = () => {
  const { token } = useParams();

  useEffect(() => {
    // Make verify request
  }, []);

  return (
    <div>Verify email here: {token}</div>
  );
};

export default VerifyEmail;