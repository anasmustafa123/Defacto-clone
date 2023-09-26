import React, { useState } from "react";
import { signIn, getUserItems } from "../../../servises/backend";
import { UserContext } from "../../../context/Context";
import { useContext } from "react";
export default function Signin() {
  const { setIsUserGuest, setCart, setFav  } = useContext(UserContext);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const changeValue = (e) => {
    let { name, value } = e.target;
    let cloneUserData = { ...userData };
    cloneUserData[name] = value;
    setUserData(cloneUserData);
  };

  function validateEmail() {
    if (userData["email"] === "") {
      setEmailError("this field is required");
      return false;
      /*??  || !userData['email'].includes(".com") */
    } else if (!userData["email"].includes("@")) {
      setEmailError("wrong format");
      return false;
    } else {
      setEmailError("");
      return true;
    }
  }

  function validatePassword() {
    if (userData["password"] === "") {
      setPasswordError("this field is required");
      return false;
    } else if (
      userData["password"].length < 8 &&
      userData["password"].length > 20
    ) {
      setPasswordError("wrong format");
      return false;
    } else {
      setPasswordError("");
      return true;
    }
  }

  return (
    <form
      className=" w-96 relative z-10 p-5"
      onSubmit={(e) => {
        e.preventDefault();
        let res1 = validatePassword();
        let res2 = validateEmail();
        if (res1 && res2) {
          let result = signIn(userData);
          if (result.success) setIsUserGuest(false);
          alert(result.message);
          setCart(getUserItems('cart'))
          setFav(getUserItems('favorites'))
        }
      }}
    >
      <div className="mb-8 text-xs ">LOG IN WITH E-MAIL ADDRESS</div>
      <div className="mb-8 ">
        {/* email */}
        <div className="relative">
          <input
            onChange={(e) => {
              changeValue(e);
            }}
            name="email"
            type="email"
            placeholder=" "
            className={`
            relative
            border-0
            border-b-2 ${emailError ? "border-red-600" : "border-gray-500 "} 
            w-full
            bg-transparent 
            outline-none
            h-10
            pt-2 peer `}
            name="email"
            value={userData["email"]}
            onChange={(e) => {
              changeValue(e);
            }}
            onBlur={() => validateEmail()}
          />
          <label
            className="peer-focus:font-medium
                absolute text-sm duration-500
                transform -translate-y-8 scale-75
                top-0 left-0 -z-10 origin-[0]
                peer-focus:left-0
                peer-focus:text-slate-700 text-slate-500
                peer-placeholder-shown:scale-100
                peer-placeholder-shown:-translate-y-0
                peer-placeholder-shown:text-slate-950
                peer-focus:scale-75
                peer-focus:-translate-y-4
            "
          >
            E-mail Address
          </label>
          {emailError && (
            <label className="text-red-700 text-xs">{emailError}</label>
          )}
        </div>
      </div>
      {/* password */}
      <div className="mb-8">
        <div className="relative ">
          <input
            onChange={(e) => {
              changeValue(e);
            }}
            name="password"
            type="password"
            placeholder=" "
            className={`
            relative
            bg-transparent 
            border-0
            border-b-2 ${passwordError ? "border-red-600" : "border-gray-500 "} 
            w-full 
            outline-none
            h-10
            pt-2 peer
              `}
            name="password"
            value={userData["password"]}
            onChange={(e) => {
              changeValue(e);
            }}
            onBlur={() => validatePassword()}
          />

          <label
            className="peer-focus:font-medium
                absolute text-sm duration-500
                transform -translate-y-8 scale-75
                top-0 left-0 -z-10 origin-[0]
                peer-focus:left-0
                peer-focus:text-slate-700 text-slate-500
                peer-placeholder-shown:scale-100
                peer-placeholder-shown:-translate-y-0
                peer-placeholder-shown:text-slate-950
                peer-focus:scale-75
                peer-focus:-translate-y-4
            "
          >
            Password
          </label>
          {passwordError && (
            <label className="text-red-700 text-xs">{passwordError}</label>
          )}
        </div>
      </div>
      {/* checkbox and forgot password */}
      <div className="flex mb-8">
        <div className="pl-2 pr-2 h-14 w-2/4">
          <div className="mb-5">
            <input type="checkbox" />
            <label className="pl-2">Remember me</label>
          </div>
        </div>
        <div className="pl-2 pr-2 h-14 w-2/4  text-right text-slate-400 cursor-pointer ">
          Forget Password
        </div>
      </div>
      <div div className="mb-8">
        <button
          type="submit"
          className="w-full bg-neutral-800 text-white px-8 h-10 hover:bg-white hover:text-black hover:border-neutral-800 hover:border-2"
        >
          <span className="text-sm content-center">Sign in</span>
        </button>
      </div>
      <div className="mb-8">
        <button type="submit" className="w-full underline text-zinc-950">
          <span className=" text-xs content-center  cursor-pointer">
            Continue as a guest
          </span>
        </button>
      </div>
      <div className="flex-col h-28  grid">
        <div className="text-center">
          <span className="text-xs">LOG IN WITH SOCIAL ACCOUNT</span>
        </div>
        {/* button facebook login */}
        <div className="grid justify-items-center ">
          <button>
            <a href="https://www.facebook.com/">
              <div className=" border-2 p-2 z-20 ">
                <img src="facebook-icon.png" alt="" width="15px" />
              </div>
            </a>
          </button>
        </div>
      </div>
    </form>
  );
}
