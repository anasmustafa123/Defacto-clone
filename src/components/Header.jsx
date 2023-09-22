import { useState } from "react";
import { Link } from "react-router-dom";
import Login from "./login/Login";
export default function Header({genderChoosed, setGenderChoosed}) {
  return (
    <>
      <div className="flex justify-between w-full  p-4 h-20 items-center border-b-2">
        <div
          onClick={() => {
            setGenderChoosed(0);
          }}
          className="logo"
        >
          <Link to="/">
            <img
              src="https://dfcdn.defacto.com.tr/AssetsV2/dist/img/de-facto-logo-light-v2.svg"
              alt=""
              width="141"
            />
          </Link>
        </div>

        <nav className="defacto-nav">
          <ul className="p-0 m-0 flex ">
            <li
              onClick={() => {
                setGenderChoosed(1);
              }}
              className={
                " mr-5 border-black hover:border-b-2 hover:text-gray-400 hover:border-gray-300" +
                " " +
                (genderChoosed == 1 && "font-semibold underline")
              }
            >
              <Link to="/women">WOMEN</Link>
            </li>
            <li
              onClick={() => {
                setGenderChoosed(2);
              }}
              className={
                " mr-5 border-black hover:border-b-2 hover:text-gray-400 hover:border-gray-300" +
                " " +
                (genderChoosed == 2 && "font-semibold underline")
              }
            >
              <Link to="/men">MEN</Link>
            </li>
            <li
              onClick={() => {
                setGenderChoosed(3);
              }}
              className={
                " mr-5 border-black hover:border-b-2 hover:text-gray-400 hover:border-gray-300" +
                " " +
                (genderChoosed == 3 && "font-semibold underline")
              }
            >
              <Link to="/kids">KIDS</Link>
            </li>
            <li
              onClick={() => {
                setGenderChoosed(4);
              }}
              className={
                " mr-5 border-black hover:border-b-2 hover:text-gray-400 hover:border-gray-300" +
                " " +
                (genderChoosed == 4 && "font-semibold underline")
              }
            >
              <Link
                to="/stores"
                className=" no-underline hover:text-gray-400 hover:border-gray-300"
              >
                STORES
              </Link>
            </li>
          </ul>
        </nav>

        <div className=" border border-black flex items-center gap-2 pl-3 pr-3 pt-1 pb-1">
          <i class="text-2xl bx bx-search"></i>
          <input
            className="w-96"
            type="text"
            placeholder="Search: Jean Pants, Basic Body. Moder Fit Shirt Track Suit"
          />
        </div>
        <div className="">
          <nav className="defacto-nav">
            <ul className="p-0 m-0 flex gap-6">
              <div className="group read-only:">
                <li className="flex gap-2 items-center text-xl hover:border-b-2 border-black  hover:text-gray-400 hover:border-gray-300">
                  <i class="bx bx-user"></i>
                  <div className="text-base hover:text-gray-400">Login</div>
                </li>
              </div>

              <li className="flex gap-2 items-center text-xl hover:border-b-2 border-black hover:text-gray-400 hover:border-gray-300">
                <i class="bx bx-heart"></i>
                <a href="#" className="text-base hover:text-gray-400">
                  Favorites
                </a>
              </li>
              <li className="flex gap-2 items-center text-xl hover:border-b-2 border-black hover:text-gray-400 hover:border-gray-300">
                <i class="bx bx-shopping-bag"></i>
                
            <button to={'/cart'} className="text-base hover:text-gray-400" onClick={() => ToggleCartMenu(true)}>
                  shopping cart <span>{cartSize}</span>
                </button>

              </li>
            </ul>
          </nav>
        </div>
      </div>
<<<<<<< HEAD
=======
      {loginOpened && (
        <div className="absolute z-10 bg-[rgba(0,0,0,0.5)] w-full h-screen top-0 left-0 overflow-y-scroll ">
          <div className="w-full flex justify-end animate-slide">
            <Login loginclose={logintoggle} />
          </div>
        </div>
      )}
>>>>>>> ded8ed0fbd359852b1adddba82ba4e45c2a2216b
    </>
  );
}
