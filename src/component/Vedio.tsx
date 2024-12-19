import React from "react";
import Style from "./video.module.scss";

const Vedio = () => {
  return (
    <div className={Style.Vedio}>
      <video autoPlay muted loop>
        <source src="https://simplychocolate.dk/cdn/shop/videos/c/vp/6d04833919ff4ba18c67c3735f855489/6d04833919ff4ba18c67c3735f855489.HD-1080p-7.2Mbps-36142691.mp4?v=0" />
      </video>
    </div>
  );
};

export default Vedio;
