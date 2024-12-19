import React from "react";
import Style from "./premium.module.scss";

const Premium = () => {
  return (
    <div className={Style.Premium}>
      <span>
        <img
          src="https://simplychocolate.dk/cdn/shop/files/Design_uden_navn_15.png?v=1703276107&width=1400"
          alt=""
        />
      </span>
      <div className={Style.text}>
        <h2>Premium proteinbarer</h2>
        <p>
          Fyldt med naturlige ingredienser, 25% protein og ingen kunstige
          sødemidler
        </p>
        <a href="/collections/proteinbarer-med-chokolade">Shop her</a>
      </div>
    </div>
  );
};

export default Premium;
