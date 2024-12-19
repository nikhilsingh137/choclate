import React, { useEffect } from "react";
import Style from "./filtershop.module.scss";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchShop } from "../redux/Slice";

const FilterShop = () => {
  const location = window.location.pathname;
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.detail);
  useEffect(() => {
    dispatch(fetchShop());
  }, [dispatch]);

  const filterItem =
    data.shopData && data.shopData.filter((item) => item.url === location);

  return (
    <div className={Style.Mainbox}>
      {filterItem &&
        filterItem.map((item) => {
          return (
            <div className={Style.content}>
              {item.item &&
                item.item.map((item) => {
                  return (
                    <>
                      {item.id === "1" && (
                        <div className={Style.back}>
                          <h2>{item.slug}</h2>
                        </div>
                      )}
                      <div className={Style.detail}>
                        {item.id === "1" && <h2>produkter</h2>}
                      </div>
                    </>
                  );
                })}
            </div>
          );
        })}
      {filterItem &&
        filterItem.map((item) => {
          return (
            <div className={Style.product}>
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
                        <h4>{item.rate}</h4>
                      </div>
                    </a>
                  );
                })}
            </div>
          );
        })}
    </div>
  );
};

export default FilterShop;
