import React from "react";
import Style from "./overlay.module.scss";

const Overlay = ({ handleCross }: any) => {
  return (
    <div className={Style.Overlay}>
      <div className={Style.content}>
        <div className={Style.data}>
          <h2>EN TIDLIG JULEGAVE</h2>
          <p>
            Køb for 399 kr. og få en Cube med 9 stk. Pink Polly chokoladebites
            gratis!
          </p>
          <span>
            <img
              src="https://d3k81ch9hvuctc.cloudfront.net/company/Vf3KXJ/images/b9b64106-565e-4479-9c29-e89e4b38c368.png"
              alt=""
            />
          </span>
          <button>Shop julechokolade</button>
          <h3>
            *Gaven tilføjes automatisk til din kurv, når du køber for 399 kr.
          </h3>
          <h4 onClick={handleCross}>X</h4>
        </div>
      </div>
    </div>
  );
};

export default Overlay;
