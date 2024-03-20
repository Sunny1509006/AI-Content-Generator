import React, { useEffect, useState } from "react";
import { FiRefreshCw } from "react-icons/fi";
import axios from "../Axios";

export const Captcha = (props) => {
  const { onFetchCaptcha } = props;
  const [captchaImage, setCaptchaImage] = useState(null);
  const [captchaHash, setCaptchaHash] = useState(null);

  const fetchCaptcha = async () => {
    try {
      const response = await axios.get("/api/captcha/new", {
        responseType: "arraybuffer",
      });
      const blob = new Blob([response.data], { type: "image/png" });
      const imageUrl = URL.createObjectURL(blob);

      setCaptchaImage(imageUrl);
      setCaptchaHash(response.headers.get("hash"));
    } catch (error) {
      console.error("Error fetching captcha:", error);
    }
  };

  useEffect(() => {
    fetchCaptcha();
  }, []);

  useEffect(() => {
    onFetchCaptcha({ captchaImage, captchaHash });
  }, [captchaImage, captchaHash, onFetchCaptcha]);

  return (
    <div>
      {captchaImage && captchaHash ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "30px",
          }}
        >
          <img src={captchaImage} alt="Captcha" />
          <FiRefreshCw size={30} color="#FF4A17" onClick={fetchCaptcha} />
        </div>
      ) : (
        <p>Loading captcha...</p>
      )}
    </div>
  );
};

Captcha.defaultProps = {
  onFetchCaptcha: () => {},
};
