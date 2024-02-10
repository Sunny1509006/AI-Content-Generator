import React, { useState, useEffect } from 'react';
import axios from './Components/Axios';
import { useNavigate } from 'react-router-dom';

export const AuthContext = React.createContext({
  hashValue: null,
  captchaUrl: null,
  setHashValue: () => { },
  fetchCaptcha: () => { },
  setCaptchaUrl: () => { },
});


const AuthProvider = (props) => {
    const [hashValue, setHashValue] = useState('');
    const [captchaUrl, setCaptchaUrl] = useState('');

    const fetchCaptcha = async () => {
      try {
        const response = await axios.get('/api/captcha/new', {
          responseType: 'arraybuffer'
        });
        console.log(response)
        const blob = new Blob([response.data], { type: 'image/png' });
        
        const imageUrl = URL.createObjectURL(blob);
        setCaptchaUrl(imageUrl);
        setHashValue(response.headers.get('hash'))
      //   setHashValue(response.headers.get('hash'))
      } catch (error) {
        console.error('Error fetching captcha:', error);
      }
    };


  return (
    <AuthContext.Provider value={{
        hashValue,captchaUrl, setHashValue, fetchCaptcha, setCaptchaUrl
    }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;