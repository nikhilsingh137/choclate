import React, { useEffect } from "react";
import Style from "./footer.module.scss";
import { fetchFooter } from "../redux/Slice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const Footer = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.detail);
  useEffect(() => {
    dispatch(fetchFooter());
  }, [dispatch]);
  return (
    <div className={Style.footer}>
      <div className={Style.wrapper}>
        {data.footerData &&
          data.footerData.map((item) => {
            return (
              <div className={Style.content}>
                <div className={Style.Heading}>
                  <h2>{item.title}</h2>
                </div>
                <div className={Style.foot}>
                  {item.id === "1" && (
                    <>
                      {item.item &&
                        item.item.map((item) => {
                          return <h2>{item.title}</h2>;
                        })}
                    </>
                  )}
                </div>
                <div className={Style.mainbox}>
                  {["2", "3", "4", "5"].includes(item.id) && (
                    <>
                      {item.item &&
                        item.item.map((item) => {
                          return <a href={item.url}>{item.title}</a>;
                        })}
                    </>
                  )}
                </div>
                <div className={Style.image}>
                  <img src={item.img} alt="" />
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Footer;
