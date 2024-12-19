import React, { useEffect, useState } from "react";
import Style from "./cart.module.scss";

const Cart = () => {
  const [favorate, setFavorate] = useState<any>(null);
  const [counts, setCounts] = useState<{ [key: string]: number }>({});
  useEffect(() => {
    const storeItem = localStorage.getItem("Data");
    const itemData = storeItem ? JSON.parse(storeItem) : [];
    setFavorate(itemData);
    const initialCounts: { [key: string]: number } = {};
    itemData.forEach((item: any) => {
      initialCounts[item.id] = 1;
    });
    setCounts(initialCounts);
  }, []);

  const handleDelete = (id: any) => {
    const updatedData = favorate.filter((item: any) => item.id !== id);
    setFavorate(updatedData);
    localStorage.setItem("Data", JSON.stringify(updatedData));
  };

  const handleDecrease = (id: any) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [id]: Math.max((prevCounts[id] || 1) - 1, 1),
    }));
  };

  const handleIncrease = (id: any) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [id]: (prevCounts[id] || 1) + 1,
    }));
  };

  return (
    <div className={Style.Cart}>
      <div className={Style.header}>
        <h2>Indkøbskurv</h2>
      </div>
      {favorate && favorate.length > 0 ? (
        <>
          <div className={Style.divide}>
            <h2>Produkt</h2>
            <h3>Antal</h3>
            <h4>I alt</h4>
          </div>
          <div className={Style.wrapper}>
            {favorate &&
              favorate.map((item: any) => {
                const price = parseFloat(item.rate);
                const quantity = counts[item.id] || 1;
                const itemTotal = price * quantity;
                return (
                  <div className={Style.content}>
                    <div className={Style.data}>
                      <span>
                        <img src={item.img[0].image} alt="" />
                      </span>
                      <div className={Style.text}>
                        <h2>{item.title}</h2>
                        <h3>{item.rate}</h3>
                      </div>
                    </div>
                    <div className={Style.detail}>
                      <div className={Style.button}>
                        <h2 onClick={() => handleDecrease(item.id)}>-</h2>
                        <h3>{quantity}</h3>
                        <h4 onClick={() => handleIncrease(item.id)}>+</h4>
                      </div>
                      <div
                        className={Style.delete}
                        onClick={() => handleDelete(item.id)}
                      >
                        delete
                      </div>
                    </div>
                    <div className={Style.total}>
                      <h2>${itemTotal.toFixed(2)}</h2>
                    </div>
                  </div>
                );
              })}
          </div>
        </>
      ) : (
        <p>No Item is Selected</p>
      )}
    </div>
  );
};

export default Cart;
