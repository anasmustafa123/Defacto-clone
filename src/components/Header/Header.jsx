import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Login from "../login/Login"; 
import { CartContext } from "../../context/Context";
import ShoppingCart from "../shoppingCart/ShoppingCart";
import PhoneMenu from "./PhoneMenu";
export default function Header({genderChoosed, setGenderChoosed,DarkModeprops, isDarkTheme}) {

  const {cartSize} = useContext (
                                  CartContext
  )
  const [loginOpened, setLoginOpened] = useState(false);
  const [CartMenu, SetCartMenu] = useState(false);
  const [PhoneState, SetPhoneMenu] =useState(false)

  

  const ToggleCartMenu = (y) => {SetCartMenu(y)}

  const logintoggle = (x) => {
    setLoginOpened(x);
  }  
  return (
    <>
      <div className="flex  justify-between w-full  p-4 h-20 items-center border-b-2 dark:border-none dark:bg-stone-900 dark:text-white ">
        
        <div className="flex items-center gap-9 " >
        <div
          onClick={() => {
            setGenderChoosed(0);
          }}
          className="logo flex gap-5"
        >
          <Link to="/">
            <img className=""
              src="https://dfcdn.defacto.com.tr/AssetsV2/dist/img/de-facto-logo-light-v2.svg"
              alt=""
              width="141"
            />
          </Link>
          
          <div>
          <button onClick={() => {
            DarkModeprops(!isDarkTheme)}
            } className="text-4xl">
        <i class='' ></i>
        
          <i  className = {"text-4xl " +
             (isDarkTheme ? 'bx bxs-toggle-right  text-stone-500 ' : "bx bx-toggle-left")
            }
          ></i>

              </button>
                </div>

        </div>
        
        
        
        </div>
       

        <nav className="defacto-nav">
          <ul className="p-0 m-0  hidden sm:flex">
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

        <div className=" border border-black hidden sm:flex items-center gap-2 pl-3 pr-3 pt-1 pb-1 w-1/3 dark:bg-stone-700 dark:text-white">
          <i class="text-2xl bx bx-search"></i>
          <input
            className=" sm:text-xs md:text-sm bg-transparent outline-none w-full"
            type="text"
            placeholder="Search: Jean Pants, Basic Body. Moder Fit Shirt Track Suit"
          />
        </div>
        <div className="">
          <nav className="defacto-nav">
            <ul className="p-0 m-0 gap-6 md:flex hidden">
              <div className="group read-only:" onClick={() => logintoggle(true)}>
                <li className="flex gap-2 items-center text-xl hover:border-b-2 border-black  hover:text-gray-400 hover:border-gray-300">
                  <i class="bx bx-user"></i>
                  <span className="text-sm hover:text-gray-400 hidden sm:inline" >Login</span>
                </li>
              </div>

              <li className="flex gap-2 items-center text-xl hover:border-b-2 border-black hover:text-gray-400 hover:border-gray-300">
                <i class="bx bx-heart"></i>
                <a href="#" className=" hidden sm:inline text-base hover:text-gray-400">
                  Favorites
                </a>
              </li>
              <li onClick={() => ToggleCartMenu(true)} className=" flex gap-2 items-center text-xl hover:border-b-2 border-black hover:text-gray-400 hover:border-gray-300">
                <i class="bx bx-shopping-bag"></i>
                
            <button to={'/cart'} className="hidden sm:inline text-base hover:text-gray-400 " >
                  Shopping Cart <span>({cartSize})</span>
                </button>

              </li>
            </ul>

          <div className="md:hidden text-4xl">
            
            <i onClick={() => SetPhoneMenu(true)} class='bx bx-menu'></i>



          </div>

          </nav>
        </div>
      </div>
      {loginOpened && (
        <div className="absolute z-20 bg-[rgba(0,0,0,0.5)] w-full h-screen top-0 left-0 overflow-y-scroll ">
          <div className="w-full flex justify-end animate-slide">
            <Login loginclose={logintoggle} />
          </div>
        </div>
      )}
      {CartMenu && (
        <div className="absolute z-20 bg-[rgba(0,0,0,0.5)] w-full h-screen top-0 left-0 overflow-y-scroll ">
          <div className="w-full flex justify-end animate-slide">
            <ShoppingCart carttoggle={ToggleCartMenu} />
          </div>
        </div>
      )}

{PhoneState && (
        <div className="absolute z-10 bg-[rgba(0,0,0,0.5)] w-full h-screen top-0 left-0 overflow-y-scroll ">
          <div className="w-full flex justify-end animate-slide">
            <PhoneMenu Phoneprops={SetPhoneMenu} logintoggle={logintoggle} carttoggle={SetCartMenu} />
          </div>
        </div>
      )}
    </>
  );
}
