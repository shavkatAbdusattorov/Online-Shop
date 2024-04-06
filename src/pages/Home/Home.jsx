import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swiper from "../../Components/Swiper/Swiper";
import "./Home.css";
import Category from "../../Components/Home/Category/categoryProducts";

const Home = () => {
  return <div className="pt-[100px]">
    <Category />
  </div>;
};

export default Home;
