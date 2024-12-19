import React from "react";
import Style from "./imagebox.module.scss";

const Imagebox = () => {
  return (
    <div className={Style.Imagebox}>
      <span>
        <img
          src="https://simplychocolate.dk/cdn/shop/files/Hero_Web_desk_2024_57.png?v=1733127641&width=1400"
          alt=""
        />
      </span>
      <div className={Style.text}>
        <h2>Ny julekollektion</h2>
        <p>Årets magiske chokoladenyheder er landet</p>
        <a href="/collections/julechokolade">Udforsk udvalget</a>
      </div>
    </div>
  );
};

export default Imagebox;
