import React, { useEffect } from "react";
import Swiper from "../../Swiper/Swiper";
import "./categoryProducts.css";
import Products from "../product/Products";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCategory } from "../../../reducer/Category";

const categoryProducts = () => {
  const dispatch = useDispatch();
  const product = useSelector((store) => store.productCategory.product);

  useEffect(() => {
    dispatch(getCategory());
  }, []);
  return (
    <div>
      <div className="Content ">
        <div className="Content1 xs:hidden xl:block">
          <h1 className="category">Телефоны</h1>
          <h1 className="category">Компьютеры</h1>
          <h1 className="category">Умные часы</h1>
          <h1 className="category">Камера</h1>
          <h1 className="category">Наушники</h1>
          <h1 className="category">Игры</h1>
        </div>
        <div className="Content2">
          <Swiper />
        </div>
      </div>
      <h1 className="textCategory">Популярные категории</h1>

      <div className="products ">
        {product.map((e) => {
          return (
            <div className="product hover:text-[orange]" key={e.id}>
              <Link to={`category/${e.id}`} state={{ data: e.data }}>
                <img className="imgCategory" src={e.images} alt="" />
              </Link>
              <h1 className="title">{e.title}</h1>
            </div>
          );
        })}
      </div>
      <Products />
    </div>
  );
};

export default categoryProducts;
