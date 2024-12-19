import React, { useEffect } from "react";
import Style from "./productcare.module.scss";
import { fetchCare } from "../redux/Slice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const ProductCare = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.detail);
  useEffect(() => {
    dispatch(fetchCare());
  }, [dispatch]);
  return (
    <div className={Style.mainbox}>
      <div className={Style.wrapper}>
        {data.careData &&
          data.careData.map((item) => {
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

export default ProductCare;
