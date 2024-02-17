import { useContext } from 'react';
import { AuthContext } from '../AuthProvider';

const useAuth = () => {
  const { hashValue, captchaUrl, loginData, setCaptchaUrl, fetchCaptcha, setHashValue, setLoginData } = useContext(AuthContext);

  return {
    hashValue,
    captchaUrl,
    loginData,
    setCaptchaUrl,
    setHashValue,
    fetchCaptcha, 
    setLoginData,
  };
};

export default useAuth;