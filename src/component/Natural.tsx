import React from "react";
import Style from "./natural.module.scss";

const Natural = () => {
  return (
    <div className={Style.natural}>
      <div className={Style.wrapper}>
        <h2>It's all natural</h2>
        <p>
          Hos Simply® elsker vi naturlige ingredienser, og vi går langt uden om
          kunstige sødemidler, aromaer og farvestoffer. Vi er nok lidt kræsne,
          når det kommer til vores ingredienser. Naturen er vores vigtigste
          allierede – smag og kvalitet betyder alt for os. Altid. Vi bruger
          meget tid på at finde nye og spændende smage, og vi vil gå langt for
          nye innovative muligheder, men vi går aldrig på kompromis med god
          smag. Dette er vores kærlighed til naturlig chokolade.
        </p>
        <a href="/pages/naturlighed">Læs mere her</a>
      </div>
    </div>
  );
};

export default Natural;
