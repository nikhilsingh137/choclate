import React, { useEffect } from "react";
import Style from "./seller.module.scss";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchSeller } from "../redux/Slice";

const Seller = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.detail);
  useEffect(() => {
    dispatch(fetchSeller());
  }, [dispatch]);
  return (
    <div className={Style.mainbox}>
      <h2>Udforsk sæsonens bestsellers</h2>
      <div className={Style.content}>
        {data.sellerData &&
          data.sellerData.map((item) => {
            return (
              <a href={item.url}>
                <span>
                  <img src={item.img} alt="" />
                </span>
                <h2>{item.title}</h2>
              </a>
            );
          })}
      </div>
    </div>
  );
};

export default Seller;
