import { useState, useEffect, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import Login from "./login/Login";
import Register from "./login/Register/Register";
import { UserContext } from "../context/Context";
import { HeaderMenu } from "../pages/HeaderMenu";

export default function Header({ genderChoosed, setGenderChoosed }) {
  const [loginOpened, setLoginOpened] = useState(false);
  const [registerBtn, setRegisterBtn] = useState(false);
  const { cartSize } = useContext(UserContext);

  const logintoggle = (x) => {
    console.log(x);
    setLoginOpened(x);
  };

  useEffect(() => {
    if (loginOpened) {
      document.body.classList.add("login-opened");
    } else {
      document.body.classList.remove("login-opened");
    }
  }, [loginOpened]);

  function LoginMenu() {
    return (
      <div className="hidden group-hover:block absolute bg-white z-10 w-64 h-48 ">
        <div className="p-3">
          <div className="mb-3">
            <button
              onClick={() => {
                logintoggle(true);
                setRegisterBtn(false);
              }}
              className="w-full bg-black text-center text-white h-11 hover:bg-white hover:text-black hover:border-neutral-800 hover:border-2"
            >
              sign in
            </button>
          </div>
          <div className="flex mb-3">
            <div className="w-24">
              <p className="text-gray-500  text-sm font-extralight">
                Not a Member?
              </p>
            </div>
            <div className="flex">
              <button
                onClick={() => {
                  logintoggle(true);
                  setRegisterBtn(true);
                }}
                className="font-bold text-sm "
              >
                register
              </button>
            </div>
          </div>
          <hr className="mb-3" />
          <div className="mb-3 text-gray-500  text-sm font-extralight">
            Order Tracking
          </div>
          <div className="mb-3 text-gray-500  text-sm font-extralight">
            Help
          </div>
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="flex justify-between w-full  p-4 h-20 items-center border-b-2">
        <div onClick={()=>{setGenderChoosed('none')}} className="logo">
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
                setGenderChoosed('w');
              }}
              className={
                " mr-5 border-black hover:border-b-2 hover:text-gray-400 hover:border-gray-300" +
                " " +
                (genderChoosed == 'w' && "font-semibold underline")
              }
            >
              <Link to="/women">WOMEN</Link>
            </li>
            <li
              onClick={() => {
                setGenderChoosed('m');
              }}
              className={
                " mr-5 border-black hover:border-b-2 hover:text-gray-400 hover:border-gray-300" +
                " " +
                (genderChoosed == 'm' && "font-semibold underline")
              }
            >
              <Link to="/men">MEN</Link>
            </li>
            <li
              onClick={() => {
                setGenderChoosed('k');
              }}
              className={
                " mr-5 border-black hover:border-b-2 hover:text-gray-400 hover:border-gray-300" +
                " " +
                (genderChoosed == 'k' && "font-semibold underline")
              }
            >
              <Link to="/kids">KIDS</Link>
            </li>
            <li
              onClick={() => {
                setGenderChoosed('s');
              }}
              className={
                " mr-5 border-black hover:border-b-2 hover:text-gray-400 hover:border-gray-300" +
                " " +
                (genderChoosed == 's' && "font-semibold underline")
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
                {LoginMenu()}
              </div>

              <Link to={'/favorites'} className="flex gap-2 items-center text-xl hover:border-b-2 border-black hover:text-gray-400 hover:border-gray-300">
                <i class="bx bx-heart"></i>
                <a href="#" className="text-base hover:text-gray-400">
                  Favorites
                </a>
              </Link>
              <li className="flex gap-2 items-center text-xl hover:border-b-2 border-black hover:text-gray-400 hover:border-gray-300">
                <i class="bx bx-shopping-bag"></i>

                <NavLink to={"/cart"} className="text-base hover:text-gray-400">
                  shopping cart <span>{cartSize}</span>
                </NavLink>
              </li>
            </ul>
          </nav>
          
        </div>
      </div>
      {loginOpened && (
        <div className="absolute z-10 bg-[rgba(0,0,0,0.5)] w-full h-screen top-0 left-0 overflow-y-scroll ">
          <div className="w-full flex justify-end animate-slide">
            <Login
              loginclose={logintoggle}
              registerBtn={registerBtn}
              setRegisterBtn={setRegisterBtn}
            />
          </div>
        </div>
      )}
    </>
  );
}
