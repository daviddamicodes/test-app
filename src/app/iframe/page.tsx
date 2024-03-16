"use client";

import React from "react";
import { IoLogoAndroid } from "react-icons/io";

const IframeTest = () => {
  // const [url, setUrl] = useState<string>(

  // );
  const url =
    "https://staging-virtual-card-app-wlagd.ondigitalocean.app/?app_hash=6377a1fe7572d9cda203ff46b2c5e98380858dc7b0358e79992df812ca6a6026&email=Clay82@hotmail.com&business=84b538d50828";

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     setUrl(
  //       `${window.location.origin}/?app_hash=edf84e0ca02c428399644f95ba367708394c0ab336111d2237f2e6e0b6e7c8e2&email=Kurtis_Homenick@hotmail.com&business=84b538d50828`
  //     );
  //   }
  // }, []);

  return (
    <div className="text-white">
      <div className="py-10 flex items-center bg-gray-600 justify-center space-x-16">
        {[...Array(4)].map((_, idx) => (
          <div key={idx}>
            <IoLogoAndroid size={30} />
          </div>
        ))}
      </div>
      <div className="px-20">
        <h1 className="text-xl font-medium mt-4">Home</h1>
        <h1 className="text-3xl font-normal mt-8">Virtual Card</h1>
      </div>
      <div className="w-full">
        {url && <iframe style={{ width: "100%", height: "100vh" }} src={url} />}
      </div>
    </div>
  );
};

export default IframeTest;
