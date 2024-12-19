import React, { useEffect, useState } from "react";
import Style from "./navbar.module.scss";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchHeader } from "../redux/Slice";
import StickyBox from "react-sticky-box";

const Navbar = ({ handleCross }: any) => {
  const [rotate, setRotate] = useState<number | null>(null);
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.detail);
  useEffect(() => {
    dispatch(fetchHeader());
  }, [dispatch]);

  const handleClick = (id: number) => {
    setRotate((prev) => (prev === id ? null : id));
  };
  return (
    <>
      <StickyBox style={{ zIndex: "9" }}>
        <div className={Style.cross} onClick={handleCross}>
          X
        </div>
      </StickyBox>
      <div className={Style.navbar}>
        <ul>
          {data.headerData &&
            data.headerData.map((item) => {
              return (
                <li key={item.id} onClick={() => handleClick(Number(item.id))}>
                  <a
                    href="/#"
                    className={rotate === Number(item.id) ? Style.active : ""}
                  >
                    {item.title}
                    {[1, 2, 3].includes(Number(item.id)) && (
                      <i className="fa-solid fa-angle-down"></i>
                    )}
                  </a>
                  {rotate === 1 && (
                    <div
                      className={`${Style.drop} ${
                        rotate === Number(item.id) ? Style.open : ""
                      }`}
                    >
                      <h2>Se hele udvalget</h2>
                      <div className={Style.frame}>
                        {item.subMenu &&
                          item.subMenu.map((item) => {
                            return (
                              <a href={item.url}>
                                <span>
                                  <img src={item.img} alt="" />
                                </span>
                                <strong>{item.title}</strong>
                              </a>
                            );
                          })}
                      </div>
                    </div>
                  )}
                  {rotate === 2 && (
                    <div
                      className={`${Style.drop} ${
                        rotate === Number(item.id) ? Style.open : ""
                      }`}
                    >
                      <h2>Se hele udvalget</h2>
                      <div className={Style.frame}>
                        {item.subMenu &&
                          item.subMenu.map((item) => {
                            return (
                              <a href={item.url}>
                                <span>
                                  <img src={item.img} alt="" />
                                </span>
                                <strong>{item.title}</strong>
                              </a>
                            );
                          })}
                      </div>
                    </div>
                  )}
                  {rotate === 3 && (
                    <div
                      className={`${Style.drop} ${
                        rotate === Number(item.id) ? Style.open : ""
                      }`}
                    >
                      <h2>Se hele udvalget</h2>
                      <div className={Style.frame}>
                        {item.subMenu &&
                          item.subMenu.map((item) => {
                            return (
                              <a href={item.url}>
                                <span>
                                  <img src={item.img} alt="" />
                                </span>
                                <strong>{item.title}</strong>
                              </a>
                            );
                          })}
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
