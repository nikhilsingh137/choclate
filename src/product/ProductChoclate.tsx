import React, { useEffect } from "react";
import Style from "./productchoclate.module.scss";
import { fetchChoclate } from "../redux/Slice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const ProductChoclate = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.detail);
  useEffect(() => {
    dispatch(fetchChoclate());
  }, [dispatch]);
  return (
    <div className={Style.mainbox}>
      <div className={Style.wrapper}>
        {data.choclateData &&
          data.choclateData.map((item) => {
            return (
              <div className={Style.content}>
                <div className={Style.Image}>
                  <img src={item.img} alt="" />
                </div>
                <div className={Style.detail}>
                  <h2>{item.title}</h2>
                  <p>{item.text}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ProductChoclate;
