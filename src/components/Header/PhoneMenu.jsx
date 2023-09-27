import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function PhoneMenu({
  Phoneprops,
  logintoggle,
  carttoggle,
  genderChoosed,
  setGenderChoosed,
}) {
  const [loginOpened, setLoginOpened] = useState(false);

  return (
    <div className="bg-slate-100 w-full h-screen gap-6 flex flex-col  dark:bg-stone-900 dark:text-white ">
      <div className="text-lg w-full flex justify-end pr-4 pt-4">
        {/* X button */}
        <button
          onClick={() => {
            Phoneprops(false);
          }}
          className=""
        >
          X
        </button>
      </div>

      <nav className="defacto-nav items-center justify-center flex">
        <ul className="p-0 m-0 flex">
          <li
            onClick={() => {
              setGenderChoosed("women");
              Phoneprops(false);
            }}
            className={
              " mr-5 border-black hover:border-b-2 hover:text-gray-400 hover:border-gray-300  dark:border-white border" +
              " " +
              (genderChoosed == "women" && "font-semibold underline")
            }
          >
            <Link className="p-3" to="/women">
              WOMEN
            </Link>
          </li>
          <li
            onClick={() => {
              setGenderChoosed("men");
              Phoneprops(false);
            }}
            className={
              " mr-5 border-black hover:border-b-2 hover:text-gray-400 hover:border-gray-300 border dark:border-white" +
              " " +
              (genderChoosed == "men" && "font-semibold underline")
            }
          >
            <Link className="p-3" to="/men">
              MEN
            </Link>
          </li>
          <li
            onClick={() => {
              setGenderChoosed("kids");
              Phoneprops(false);
            }}
            className={
              " mr-5 border-black hover:border-b-2 hover:text-gray-400 hover:border-gray-300 border dark:border-white" +
              " " +
              (genderChoosed == "kids" && "font-semibold underline")
            }
          >
            <Link className="p-3" to="/kids">
              KIDS
            </Link>
          </li>
          <li
            onClick={() => {
              setGenderChoosed("s");
              Phoneprops(false);
            }}
            className={
              " mr-5 border-black hover:border-b-2 hover:text-gray-400 hover:border-gray-300 border dark:border-white" +
              " " +
              (genderChoosed == "s" && "font-semibold underline")
            }
          >
            <Link
              to="/stores"
              className=" p-3 no-underline hover:text-gray-400 hover:border-gray-300"
            >
              STORES
            </Link>
          </li>
        </ul>
      </nav>

      <div className="justify-center">
        <Link to="/">
          <img
            className="dark:invert items-center w-3/4   justify-center ml-14 mt-10"
            src="https://dfcdn.defacto.com.tr/AssetsV2/dist/img/de-facto-logo-light-v2.svg"
            alt=""
          />
        </Link>
      </div>

      {/* Loggin button */}

      <div className="flex gap-10 items-center justify-center mt-24">
        <div className=" group read-only:" onClick={() => logintoggle(true)}>
          <li className="flex gap-2 items-center text-xl hover:border-b-2 border-black  hover:text-gray-400 hover:border-gray-300">
            <i class="text-2xl bx bx-user"></i>
            <span className="text-2xl hover:text-gray-400 inline">Login</span>
          </li>
        </div>

        {/* Cart button */}
        <li
          onClick={() => carttoggle(true)}
          className=" flex gap-2 items-center text-xl hover:border-b-2 border-black hover:text-gray-400 hover:border-gray-300"
        >
          <i class="text-2xl bx bx-shopping-bag"></i>

          <button
            to={"/cart"}
            className=" inline text-2xl hover:text-gray-400 "
          >
            Shopping Cart <span>(99)</span>
          </button>
        </li>
      </div>
    </div>
  );
}
