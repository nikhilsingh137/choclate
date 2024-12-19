import React, { useEffect, useState } from "react";
import Style from "./project.module.scss";
import { fetchProject } from "../redux/Slice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const Project = () => {
  const [active, setActive] = useState("1");
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.detail);
  useEffect(() => {
    dispatch(fetchProject());
  }, [dispatch]);

  const handleActive = (id: any) => {
    setActive((prev) => (prev === id ? null : id));
  };
  return (
    <div className={Style.Mainbox}>
      <div className={Style.wrapper}>
        {data.projectData &&
          data.projectData.map((item) => {
            return (
              <div
                className={`${Style.content} ${
                  active === item.id ? Style.active : ""
                }`}
              >
                <div className={Style.detail}>
                  <span>
                    <img src={item.img} alt="" />
                  </span>
                  <div className={Style.text}>
                    <h2>{item.slug}</h2>
                    <h3>{item.header}</h3>
                    <p>{item.text}</p>
                  </div>
                </div>
              </div>
            );
          })}
        <div className={Style.header}>
          {data.projectData &&
            data.projectData.map((item) => {
              return (
                <h2
                  className={`${active === item.id ? Style.active : ""}`}
                  onClick={() => handleActive(item.id)}
                >
                  {item.title}
                </h2>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Project;
