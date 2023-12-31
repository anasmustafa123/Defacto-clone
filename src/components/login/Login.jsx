import React, { useState } from "react";
import Register from "./Register/Register";
import Signin from "./Sign in/Signin";

export default function Login({ loginclose, registerBtn, setRegisterBtn }) {
  function NavLogin() {
    if (registerBtn) return <Register />;
    else return <Signin />;
  }

  return (
    <>
      <div className=" flex flex-col  items-center justify-center w-96 p-5 bg-white h-full dark:bg-stone-800 dark:text-white"> 
        <div className="w-full flex justify-end">
          <button
            onClick={() => {
              loginclose(false);
            }}
            className="w-10"
          >
            <span className="w-24 pr-2 pl-2">
            <i class="text-4xl bx bx-x"></i></span>
          </button>
        </div>
        <div className="w-full">
          <div className="mb-8 flex items-center justify-around">
            <div
              className={
                !registerBtn
                  ? "w-1/2  text-center  border-b-2  border-gray-500  "
                  : "w-1/2  text-center "
              }
            >
              <button
                className="font-medium"
                type="submit"
                onClick={() => {
                  setRegisterBtn(false);
                }}
              >
                SIGN IN
              </button>
            </div>
            <div
              className={
                registerBtn
                  ? "w-1/2  text-center  border-b-2  border-gray-500  "
                  : "w-1/2  text-center "
              }
            >
              <button
                className="justify-items-center text-center font-medium"
                onClick={() => {
                  setRegisterBtn(true);
                }}
              >
                Register
              </button>
            </div>
          </div>
        </div>
        <div>
          <NavLogin />
        </div>
        <div className="flex text-xs h-20 bg-neutral-800 w-full">
          <span className="relative top-8 content-center text-white">
            {registerBtn && "ARE YOU ALREADY A MEMBER? LOG IN"}
            {!registerBtn && "NOT A MEMBER? JOIN"}
          </span>
          <button className="ml-2 text-white"> NOW </button>
        </div>
      </div>
    </>
  );
}
