import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import "./Layout.css";
import { IconButton } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct, setInpSearch } from "../reducer/Home";
import ModalWishList from "../Components/Home/ModalWishList";

const Layout = () => {
  const dispatch = useDispatch();
  const counter = useSelector((store) => store.productCart.counter);
  let inpSearch = useSelector((store) => store.Product.inpSearch);

  useEffect(() => {
    AOS.init();
    dispatch(getAllProduct());
  }, []);

  const { pathname } = useLocation();

  return (
    <>
      <div class="head">
        <div className="">
          <Link to="/">
            <h1 className="Exclusive font-bold">Exclusive</h1>
          </Link>
        </div>
        <div className="text-focus-in">
          <Link to="/">
            <h2
              style={{
                color: pathname == "/" ? "green" : "",
                textDecoration: pathname == "/" ? "underline" : "",
                fontWeight: pathname == "/" ? "bold" : "",
              }}
              className="xs:hidden md:block text-[18px] cursor-pointer hover:text-[20px] hover:text-[green] hover:font-medium"
            >
              Home
            </h2>
          </Link>
          <Link to="/about">
            <h2
              style={{
                color: pathname == "/about" ? "green" : "",
                textDecoration: pathname == "/about" ? "underline" : "",
                fontWeight: pathname == "/about" ? "bold" : "",
              }}
              className="xs:hidden md:block text-[18px] cursor-pointer hover:text-[20px] hover:text-[green] hover:font-medium"
            >
              About
            </h2>
          </Link>
          <Link to="/contact">
            <h2
              style={{
                color: pathname == "/contact" ? "green" : "",
                textDecoration: pathname == "/contact" ? "underline" : "",
                fontWeight: pathname == "/contact" ? "bold" : "",
              }}
              className="xs:hidden xl:block text-[18px] cursor-pointer hover:text-[20px] hover:text-[green] hover:font-medium"
            >
              Contact
            </h2>
          </Link>
          <Link to="/cart">
            <h2
              style={{
                color: pathname == "/cart" ? "green" : "",
                textDecoration: pathname == "/cart" ? "underline" : "",
                fontWeight: pathname == "/cart" ? "bold" : "",
              }}
              className="xs:hidden lg:block text-[18px]  cursor-pointer hover:text-[20px] hover:text-[green] hover:font-medium"
            >
              Cart
            </h2>
          </Link>
        </div>
        <div className="card">
          <input
            className="input1"
            type="search"
            value={inpSearch}
            onChange={(e) => dispatch(setInpSearch(e.target.value))}
            placeholder="What are you looking for?"
          />
          <IconButton>
            <ModalWishList />
          </IconButton>
          <div className="flex">
            <IconButton>
              <Link to="/cart">
                <img src="src/assets/Carzina.svg" alt="" />
              </Link>
            </IconButton>
            <h1
              style={{
                color: "#fff",
                background: "#DB4444",
                height: "20px",
                padding: "0px 6px",
                paddingBottom: "22px",
                borderRadius: "50%",
                fontSize: "16px",
                position: "fixed",
                right: "74px",
                fontFamily: "monospace",
              }}
              className="hidden xl:block"
            >
              {counter}
            </h1>
          </div>
        </div>
      </div>
      <Outlet />
      <div className="footer">
        <div className="content">
          <div className="blockLayout">
            <h1 className="footer_h1">Exclusive</h1>
            <h2 className="footer_props">Subscribe </h2>
            <h2 className="footer_props">Get 10% off your first order</h2>
            <input
              className="footer_input"
              type="search"
              placeholder="Enter your email"
            />
          </div>
          <div className="blockLayout">
            <h1 className="footer_h1">Support </h1>
            <h2 className="footer_props">
              111 Bijoy sarani, Dhaka, <br /> DH 1515, Bangladesh.
            </h2>
            <h2 className="footer_props">Shuhratzoda_06@gmail.com</h2>
            <h2 className="footer_props"> +992 907 73 70 51</h2>
          </div>
          <div className="blockLayout">
            <h1 className="footer_h1">Account</h1>
            <h2 className="footer_props">My Account</h2>
            <h2 className="footer_props">Cart</h2>
            <h2 className="footer_props">Wishlist</h2>
            <h2 className="footer_props">Shop</h2>
          </div>
          <div className="blockLayout">
            <h1 className="footer_h1">Quick Link</h1>
            <h2 className="footer_props">Privacy Policy</h2>
            <h2 className="footer_props">Terms Of Use</h2>
            <h2 className="footer_props">FAQ</h2>
            <h2 className="footer_props">Contact</h2>
          </div>
          <div className="div5">
            <h1 className="footer_h1">Social</h1>
            <div className="footer_div1">
              <IconButton>
                <img src="src/assets/Icon-Facebook.svg" alt="" />
              </IconButton>
              <IconButton>
                <img src="src/assets/Icon-Twitter.svg" alt="" />
              </IconButton>
              <IconButton>
                <img src="src/assets/icon-instagram.svg" alt="" />
              </IconButton>
              <IconButton>
                <img src="src/assets/Icon-Linkedin.svg" alt="" />
              </IconButton>
            </div>
          </div>
        </div>
        <div className="footer_div6">
          <h1 className="tracking-in-expand">
            Copyright Rimel 2022. All right reserved
          </h1>
        </div>
      </div>
    </>
  );
};

export default Layout;
