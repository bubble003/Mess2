import React, { useEffect, useRef, useState } from "react";
import QRCode from "qrcode";
import useAuth from "../../Auth/useAuth";
import axios from "../../Api/axios";

const ProfileScanner = () => {
  const [imageUrl, setImageUrl] = useState("");
  const { auth } = useAuth();

  useEffect(() => {
    const generateQrCode = async () => {
      const dataObject = JSON.stringify({
        userId: auth.userId,
        name: auth.name,
        email: auth.email,
      });
      //   console.log(auth);
      console.log(dataObject);

      try {
        const response = await QRCode.toDataURL(dataObject);
        setImageUrl(response);
      } catch (error) {
        console.log(error);
      }
    };

    generateQrCode();
  });

  return (
    <div className="profilescanner m-auto flex items-center justify-center  h-[40rem]">
      <div className="scanner flex-[1]  h-[30rem] flex items-center justify-center">
        {imageUrl ? (
          <a href={imageUrl} download>
            <img src={imageUrl} alt="img" className="w-[20rem]" />
          </a>
        ) : (
          <h1 className="text-black text-center text-4xl font-semibold ">
            {" "}
            Please take the Subcription Plan ....{" "}
          </h1>
        )}
      </div>
    </div>
  );
};

export default ProfileScanner;
