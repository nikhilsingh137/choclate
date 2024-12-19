import React, { useEffect } from "react";
import Style from "./leder.module.scss";
import { fetchLeder } from "../redux/Slice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const Leder = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.detail);
  useEffect(() => {
    dispatch(fetchLeder());
  }, [dispatch]);
  return (
    <div className={Style.Mainbox}>
      <div className={Style.wrapper}>
        {data.lederData &&
          data.lederData.map((item) => {
            return (
              <div className={Style.content}>
                <h2>{item.title}</h2>
                <div className={Style.detail}>
                  {item.item &&
                    item.item.map((item) => {
                      return (
                        <a href={item.url}>
                          <span>
                            <img src={item.img} alt="" />
                          </span>
                          <div className={Style.text}>
                            <h2>{item.title}</h2>
                            <h3>{item.slug}</h3>
                          </div>
                        </a>
                      );
                    })}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Leder;
