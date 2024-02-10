import React, { useEffect } from 'react';
import useAuth from '../../hooks/authHooks';
import { FiRefreshCw } from "react-icons/fi";


export const Captcha = () => {
    
    const {captchaUrl, fetchCaptcha} = useAuth()


    useEffect(() => {   
          fetchCaptcha();
      }, []); 
    

  return (
    <div>
      {captchaUrl ? (
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '30px',
        }}>
         <img src={captchaUrl} alt="Captcha" />
         <FiRefreshCw size={30} color='#FF4A17' onClick={fetchCaptcha}/>
         </div>
      ) : (
        <p>Loading captcha...</p>
      )}
    </div>
  )
}
