import { useAppSelector } from '../../store';


const useAuth = (): string | null => {
  const { accessToken } = useAppSelector((state) => state.user);

  return accessToken;
};

export default useAuth;