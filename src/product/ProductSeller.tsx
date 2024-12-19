import React, { useEffect } from "react";
import Style from "./productseller.module.scss";
import { fetchProductSeller } from "../redux/Slice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const ProductSeller = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.detail);
  useEffect(() => {
    dispatch(fetchProductSeller());
  }, [dispatch]);
  return (
    <div className={Style.mainbox}>
      <div className={Style.wrapper}>
        {data.productsellerData &&
          data.productsellerData.map((item) => {
            return (
              <a href={item.url}>
                <span>
                  <img src={item.img} alt="" />
                </span>
                <div className={Style.text}>
                  <h2>{item.slug}</h2>
                  <h3>{item.title}</h3>
                  <h4>{item.rate}</h4>
                </div>
              </a>
            );
          })}
      </div>
    </div>
  );
};

export default ProductSeller;
