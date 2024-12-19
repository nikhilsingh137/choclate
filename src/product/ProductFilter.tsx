import React, { useEffect, useState } from "react";
import Style from "./productfilter.module.scss";
import { fetchProduct } from "../redux/Slice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import ProductNatural from "./ProductNatural";
import ProductChoclate from "./ProductChoclate";
import ProductCare from "./ProductCare";
import ProductSeller from "./ProductSeller";

const ProductFilter = () => {
  const pathName = window.location.pathname;
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.detail);
  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  const [activeTab, setActiveTab] = useState(null);

  const toggleTab = (id: any) => {
    setActiveTab((activeTab) => (activeTab === id ? null : id));
  };

  const filterData =
    data.productData &&
    data.productData.filter((item) => item.url === pathName);

  const handleItem = (item: any) => {
    const storeItem = localStorage.getItem("Data");
    const itemData = storeItem ? JSON.parse(storeItem) : [];
    if (!itemData.some((list: any) => list.id === item.id)) {
      itemData.push(item);
      console.log(itemData);
      localStorage.setItem("Data", JSON.stringify(itemData));
    }
  };
  return (
    <div className={Style.Header}>
      <div className={Style.Mainbox}>
        <div className={Style.wrapper}>
          {filterData &&
            filterData.map((item) => {
              return (
                <div className={Style.divide}>
                  <div className={Style.Image}>
                    <Carousel
                      showThumbs={true}
                      showStatus={false}
                      infiniteLoop={true}
                      showIndicators={false}
                    >
                      {item.img &&
                        item.img.map((item) => (
                          <span>
                            <img src={item.image} alt="" />
                          </span>
                        ))}
                    </Carousel>
                  </div>

                  <div className={Style.content}>
                    <div className={Style.header} key={item.id}>
                      <h2>{item.title}</h2>
                      <h3>{item.slug}</h3>
                      <h4>{item.rate}</h4>
                      <button onClick={() => handleItem(item)}>
                        {item.button}
                      </button>
                    </div>
                    <div className={Style.text}>
                      <h2>{item.header}</h2>
                      <p>{item.text}</p>
                    </div>
                    <div className={Style.list}>
                      <ul>
                        {item.item &&
                          item.item.map((item) => {
                            return <li>{item.title}</li>;
                          })}
                      </ul>
                    </div>
                    <div className={Style.weight}>
                      <h2>{item.weight}</h2>
                    </div>
                    <div className={Style.tab}>
                      <div
                        className={`${Style.tabItem} ${
                          activeTab === item.id ? Style.active : ""
                        }`}
                      >
                        <h2 onClick={() => toggleTab(item.id)}>
                          {item.tab}
                          <i
                            className={`fa-solid ${
                              activeTab === item.id ? "fa-minus" : "fa-plus"
                            }`}
                          ></i>
                        </h2>
                        <div
                          className={Style.tabContent}
                          style={{
                            maxHeight: activeTab === item.id ? "500px" : "0",
                            overflow: "hidden",
                            transition: "max-height 0.3s ease",
                          }}
                        >
                          <p>{item.tabItem}</p>
                          <h3>{item.dk}</h3>
                          <h4>{item.dkItem}</h4>
                          <h5>{item.dkTager}</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <ProductNatural />
      <ProductChoclate />
      <ProductCare />
      <ProductSeller />
    </div>
  );
};

export default ProductFilter;
