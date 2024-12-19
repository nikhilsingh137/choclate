import React, { useEffect } from "react";
import Style from "./image.module.scss";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchImage } from "../redux/Slice";

const Image = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.detail);
  useEffect(() => {
    dispatch(fetchImage());
  }, [dispatch]);
  return (
    <div className={Style.Mainbox}>
      {data.imageData &&
        data.imageData.map((item) => {
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
  );
};

export default Image;
