import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Login from "../login/Login";
import { UserContext } from "../../context/Context";
import { HeaderMenu } from "../../pages/HeaderMenu";
import ShoppingCart from "../shoppingCart/ShoppingCart";
import PhoneMenu from "./PhoneMenu";


export default function Header({genderChoosed, setGenderChoosed,DarkModeprops, isDarkTheme}) {

  const [loginOpened, setLoginOpened] = useState(false);
  const [registerBtn, setRegisterBtn] = useState(false);
  const { cartSize } = useContext(UserContext);
  const [CartMenu, SetCartMenu] = useState(false);
  const [PhoneState, SetPhoneMenu] =useState(false)

  

  const logintoggle = (x) => {
    console.log(x);
    setLoginOpened(x);
  };

  const ToggleCartMenu = (y) => {SetCartMenu(y)}


  useEffect(() => {
    if (loginOpened||CartMenu || PhoneState) {
      document.body.classList.add("login-opened");
    } else {
      document.body.classList.remove("login-opened");
    }
  }, [loginOpened, CartMenu, PhoneState]);

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
              className="w-full bg-black text-center text-white h-11 hover:bg-white hover:text-black hover:border-neutral-800 hover:border-2 group"
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
      
       <div className="flex justify-between w-full  p-4 h-20 items-center dark:border-none dark:bg-stone-900 dark:text-white">
        <div onClick={()=>{setGenderChoosed('none')}} className="logo flex gap-4">
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
                  <i  className = {"text-4xl " +
                    (isDarkTheme ? 'bx bxs-toggle-right  text-stone-500 ' : "bx bx-toggle-left")
                    }></i>
              </button>
          </div>
        </div>
        
        
        
       

        <nav className="defacto-nav">
          <ul className="p-0 m-0  hidden sm:flex">
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
                {LoginMenu()}
              </div>

              <li>
                <i class="bx bx-heart"></i>
                <Link to={'/favorites'} className=" hidden sm:inline text-base hover:text-gray-400">
                  Favorites
                </Link>
              </li>
              
              <li onClick={() => ToggleCartMenu(true)} className=" flex gap-2 items-center text-xl hover:border-b-2 border-black hover:text-gray-400 hover:border-gray-300">
                <i class="bx bx-shopping-bag"></i>

                <button className="text-base hover:text-gray-400" onClick={() => ToggleCartMenu(true)
      
                }>
                  shopping cart <span>{cartSize}</span>
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
            <Login
              loginclose={logintoggle}
              registerBtn={registerBtn}
              setRegisterBtn={setRegisterBtn}
            />
          </div>
        </div>
      )}
      {CartMenu && (
        <div className="absolute z-20 bg-[rgba(0,0,0,0.5)] w-full h-screen top-0 left-0 overflow-y-scroll ">
          <div className="w-full flex justify-end animate-slide">
            <ShoppingCart carttoggle={ToggleCartMenu}/>
          </div>
        </div>
      )}

      <div className="border-b-2 realtive w-full dark:bg-zinc-900 dark:text-white">
        <div className="group w-44">
          <span className="ml-3">
            Accesorise & shoes
          </span>
          <div className="absolute z-10 "><HeaderMenu/></div>
        </div>
      </div>
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
