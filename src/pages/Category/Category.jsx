import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import styles from "./Category.module.css";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { AddProduct } from "../../reducer/Cart";
import { Checkbox } from "@mui/material";
import { setMaxPrice, setMinPrice } from "../../reducer/Home";

const Category = () => {
  const { id } = useParams();
  const location = useLocation();
  const data = location.state.data;

  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);

  const [filterBook, setFilterBook] = useState([]);

  const filterBooks = (elem) => {
    const filteredBooks = data.filter((e) => e.brand.includes(elem));
    setFilterBook(filteredBooks);
  };
  console.log(filterBook, "hello shavkat how are you bro");

  const filterProducts = data.filter((e) => {
    if (minPrice && maxPrice) {
      return e.price >= minPrice && e.price <= maxPrice;
    }
    if (minPrice) {
      return e.price >= minPrice;
    }
    return data;
  });
  const dispatch = useDispatch();

  return (
    <>
      <h1 className={styles.name}>
        {id == 203040 ? (
          <h2>
            Умные часы и Наушники{" "}
            <span className={styles.quantities}>24 товаров</span>
          </h2>
        ) : id == 3 ? (
          <h2>
            Бытовая техника{" "}
            <span className={styles.quantities}>24 товаров</span>
          </h2>
        ) : id == 5 ? (
          <h2>
            Телевизоры <span className={styles.quantities}>24 товаров</span>
          </h2>
        ) : id == 6 ? (
          <h1>
            Ноутбуки <span className={styles.quantities}>24 товаров</span>
          </h1>
        ) : id == 7 ? (
          <h1>
            Книги <span className={styles.quantities}>16 товаров</span>
          </h1>
        ) : id == 8 ? (
          <h1>
            Смартфоны <span className={styles.quantities}>31 товаров</span>
          </h1>
        ) : id == 9 ? (
          <h1>Спортивное питание</h1>
        ) : id == 10 ? (
          <h1>
            Камера <span className={styles.quantities}>10 товаров</span>
          </h1>
        ) : id == 11 ? (
          <h1>
            Смартфоны <span className={styles.quantities}>31 товаров</span>
          </h1>
        ) : id == 12 ? (
          <h1>Мелкая бытовая техника</h1>
        ) : (
          <h1>Not found</h1>
        )}
      </h1>
      <div className={styles.mainBlock}>
        <div className={styles.block}>
          <div className={styles.filterProduct}>
            <h1 className={styles.byPrice}>Цена</h1>
            <div className={styles.inp}>
              <input
                className={styles.filterByPrice}
                type="text"
                placeholder="от 67"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                // onChange={(e) => dispatch(setMinPrice(e.target.value))}
              />
              <input
                className={styles.filterByPrice}
                type="text"
                placeholder="до 29995"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                // onChange={(e) => dispatch(setMaxPrice(e.target.value))}
              />
            </div>
          </div>
          <div className={styles.filterProduct}>
            <h1 className={styles.byPrice}>Модель</h1>
            <div className="">
              <div className={styles.Model}>
                <Checkbox onClick={() => filterBooks("Samsung")} />
                <h1>Sumsung</h1>
              </div>
              <div className={styles.Model}>
                <Checkbox onClick={() => filterBooks("Xiaomi")} />
                <h1>Xiaomi </h1>
              </div>
              <div className={styles.Model}>
                <Checkbox onClick={() => filterBooks("iPhone")} />
                <h1>iPhone </h1>
              </div>
            </div>
          </div>
          <div className={styles.filterProduct}>
            <h1 className={styles.Genre}>Жанр/Направление</h1>
            <div className="">
              <div className={styles.business}>
                <Checkbox onClick={() => filterBooks("бизнес")} />
                <h1>бизнес</h1>
              </div>
              <div className={styles.business}>
                <Checkbox onClick={() => filterBooks("биография")} />
                <h1>биография </h1>
              </div>
              <div className={styles.business}>
                <Checkbox onClick={() => filterBooks("Правила Брэнсона")} />
                <h1>Правила Брэнсона </h1>
              </div>
            </div>
          </div>
          <div className={styles.filterProduct}>
            <h1 className={styles.Brand}>Бренд</h1>
            <div className="">
              <div className={styles.Acer}>
                <Checkbox onClick={() => filterBooks("Acer")} />
                <h1> Acer </h1>
              </div>
              <div className={styles.Acer}>
                <Checkbox onClick={() => filterBooks("Apple")} />
                <h1> Apple </h1>
              </div>
              <div className={styles.Acer}>
                <Checkbox onClick={() => filterBooks("Lenovo")} />
                <h1> Lenovo </h1>
              </div>
              <div className={styles.Acer}>
                <Checkbox onClick={() => filterBooks("Victus")} />
                <h1> Victus </h1>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.blockProduct} style={{ overflow: "auto" }}>
          {minPrice === null && maxPrice === null
            ? data.map((e) => {
                return (
                  <div className={styles.element} key={e.id}>
                    <img className={styles.img} src={e.image} alt="" />
                    <h1 className={styles.price}>{`${e.price} c`}</h1>
                    <h1 className={styles.title}>{e.title}</h1>
                    <button
                      className={styles.addToCart}
                      onClick={() => dispatch(AddProduct(e))}
                    >
                      <ShoppingCartOutlined style={{ fontSize: "20px" }} />В
                      корзину
                    </button>
                  </div>
                );
              })
            : filterProducts.map((e) => {
                return (
                  <div className={styles.element} key={e.id}>
                    <img className={styles.img} src={e.image} alt="" />
                    <h1 className={styles.price}>{`${e.price} c`}</h1>
                    <h1 className={styles.title}>{e.title}</h1>
                    <button
                      className={styles.addToCart}
                      onClick={() => dispatch(AddProduct(e))}
                    >
                      <ShoppingCartOutlined style={{ fontSize: "20px" }} />В
                      корзину
                    </button>
                  </div>
                );
              })}
          {filterBook.map((elem) => {
            return (
              <div className="" key={elem.id}>
                <h1>{elem.title}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Category;
