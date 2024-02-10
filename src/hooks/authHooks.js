import { useContext } from 'react';
import { AuthContext } from '../AuthProvider';

const useAuth = () => {
  const { hashValue, captchaUrl, setCaptchaUrl, fetchCaptcha, setHashValue } = useContext(AuthContext);

  return {
    hashValue,
    captchaUrl,
    setCaptchaUrl,
    setHashValue,
    fetchCaptcha, 
  };
};

export default useAuth;