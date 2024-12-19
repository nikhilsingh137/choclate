import React, { useEffect } from "react";
import Style from "./spred.module.scss";
import { fetchSpred } from "../redux/Slice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const Spred = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.detail);
  useEffect(() => {
    dispatch(fetchSpred());
  }, [dispatch]);
  return (
    <div className={Style.Mainbox}>
      <div className={Style.wrapper}>
        {data.spredData &&
          data.spredData.map((item) => {
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
                          <h2>{item.button}</h2>
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

export default Spred;
