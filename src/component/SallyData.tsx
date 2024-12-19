import React, { useEffect } from "react";
import Style from "./sallyData.module.scss";
import { fetchSally } from "../redux/Slice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const SallyData = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.detail);
  useEffect(() => {
    dispatch(fetchSally());
  }, [dispatch]);
  return (
    <div className={Style.Mainbox}>
      <div className={Style.wrapper}>
        {data.sallyData &&
          data.sallyData.map((item) => {
            return (
              <div className={Style.content}>
                <h2>{item.title}</h2>
                <h3>{item.slug}</h3>
                <div className={Style.detail}>
                  {item.item &&
                    item.item.map((item) => {
                      return (
                        <a href={item.url}>
                          <span>
                            <img src={item.img} alt="" />
                          </span>
                          <h2>{item.brand}</h2>
                          <h3>{item.title}</h3>
                          <h4>{item.rate}</h4>
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

export default SallyData;
