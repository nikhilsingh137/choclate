import React, { useEffect, useState } from "react";
import Style from "./searchbox.module.scss";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchShop } from "../redux/Slice";

const SearchBox = ({ handleSearch }: any) => {
  const [value, setValue] = useState("");
  const [show, setShow] = useState(false);
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.detail);
  useEffect(() => {
    dispatch(fetchShop());
  }, [dispatch]);

  const handleChange = (e: any) => {
    const data = e.target.value;
    if (data) {
      setValue(data);
      setShow(true);
    } else {
      setValue("");
      setShow(false);
    }
  };

  const filterData =
    data.shopData &&
    data.shopData.flatMap(
      (item) =>
        item.item && item.item.filter((item) => item.title.includes(value))
    );

  return (
    <div className={Style.SearchBox}>
      <div className={Style.overlay}></div>
      <div className={Style.mainbox}>
        <div className={Style.box}>
          <form>
            <div className={Style.formBox}>
              <label>
                <i className="fa-solid fa-magnifying-glass"></i>
              </label>
              <input
                type="text"
                placeholder="Sag efter"
                value={value}
                onChange={handleChange}
              />
              <h2 onClick={handleSearch}>X</h2>
            </div>
          </form>
        </div>
        {show && (
          <div className={Style.drop}>
            <div className={Style.wrapper}>
              {filterData &&
                filterData.map((item) => {
                  return (
                    <a href={item.url}>
                      <span>
                        <img src={item.img} alt="" />
                      </span>
                      <h2>{item.slug}</h2>
                      <h3>{item.title}</h3>
                      <h4>{item.rate}</h4>
                    </a>
                  );
                })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBox;
