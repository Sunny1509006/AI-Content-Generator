import React, { useState, useEffect } from 'react';
import axios from '../Axios';


export const Captcha = () => {
    const [captchaUrl, setCaptchaUrl] = useState('');

    useEffect(() => {
        
        if (!captchaUrl) {
          const fetchCaptcha = async () => {
            try {
              const response = await axios.get('/api/captcha/new', {
                responseType: 'arraybuffer'
              });
              console.log(response)
              const blob = new Blob([response.data], { type: 'image/png' });
              
              const imageUrl = URL.createObjectURL(blob);
              setCaptchaUrl(imageUrl);
              console.log(imageUrl)
              console.log(response.headers.get('hash'))
            } catch (error) {
              console.error('Error fetching captcha:', error);
            }
          };
          fetchCaptcha();
        }
      }, [captchaUrl]); 


    

  return (
    <div>
      {captchaUrl ? (
         <img src={captchaUrl} alt="Captcha" />
        // <div>{captchaUrl}</div>
      ) : (
        <p>Loading captcha...</p>
      )}
    </div>
  )
}
