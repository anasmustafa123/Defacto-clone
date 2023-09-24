import React, { useState } from "react";
import {  addUser } from "../../../servises/backend";

export default function Register({ registerclose }) {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [mobile, setMobile] = useState("");
  const [mobileError, setMobileError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [userData, setUserData] = useState({
    name: "",
    lName: "",
    email: "",
    password: "",
    date: "",
    gender: "",
    phoneType: "",
    pNum: "",
  });
  const changeValue = (e) => {
    let { name, value } = e.target;
    let cloneUserData = { ...userData };
    cloneUserData[name] = value;
    setUserData(cloneUserData);
  };

  function validateName() {
    if (name === "") {
      setNameError("Please enter your last name");
    } else if (name.length < 2) {
      setNameError("your last name must be at least 2 characters");
    } else setNameError("");
  }
  function validateLastName() {
    if (lastName === "") {
      setLastNameError("Please enter your last name");
    } else if (lastName.length < 2) {
      setLastNameError("your name must be at least 2 characters");
    } else setLastNameError("");
  }

  function validateEmail() {
    if (email === "") {
      setEmailError("this field is required");
    } else if (!email.includes("@") || !email.includes(".com")) {
      setEmailError("wrong format");
    } else setEmailError("");
  }

  function validateMobile() {
    if (mobile === "") {
      setMobileError("this field is required");
    } else if (mobile.length < 10) {
      setMobileError("This field is required");
    } else setMobileError("");
  }

  function validatePassword() {
    if (password === "") {
      setPasswordError("Please enter your password");
    } else if (
      password.length < 8 ||
      password.length < 15 
    ) {
      setPasswordError(
        "Your password must be in the range of 8-15 characters "
      );
    } else setPasswordError("");
  }

  const days = [];
  for (let i = 1; i < 32; i++) {
    days.push(i);
  }

  const months = [];
  for (let m = 1; m < 13; m++) {
    months.push(m);
  }

  const years = [];
  for (let y = 1927; y < 2007; y++) {
    years.push(y);
  }

  return (
    //header
    <>
      {/* // social row */}
      <form className=" w-96 relative z-10 p-5 "
        onSubmit={(e) => {
          e.preventDefault();
          let result = addUser(userData)

            alert(result.message)
        
        }}
      >
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
        <div className="mb-3 text-xs ">SUBSCRIBE WITH YOUR EMAIL ADDRESS</div>
        {/* //name &last name */}
        <div className="relative flex w-full justify-stretch ">
          {/* name */}
          <div className="flex ">
            <div className="mb-10 w-1/2 flex relative">
              <div>
                <input
                  type="text"
                  placeholder=" "
                  className={`relative
                  border-0
                  border-b-2 ${
                    nameError ? "border-red-600" : "border-gray-500 "
                  } 
                  w-full
                  bg-transparent 
                  outline-none
                  h-8
                  pt-2 peer`}
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value)
                    changeValue(e);
                  }}
                  onBlur={() => validateName()}
                />
                <label
                  for="name"
                  className="peer-focus:font-medium
                absolute text-sm duration-500
                transform -translate-y-4 scale-75
                top-0 left-0 -z-10 origin-[0]
                peer-focus:left-0
                peer-focus:text-slate-500 text-slate-500
                peer-placeholder-shown:scale-100
                peer-placeholder-shown:-translate-y-0
                peer-placeholder-shown:text-slate-950
                peer-focus:scale-75
                peer-focus:-translate-y-4
                  "
                >
                  Name
                </label>
                {nameError && (
                  <label className="text-red-700 text-xs">{nameError}</label>
                )}
              </div>
            </div>
            {/* last name */}
            <div className="mb-10 pl-3 w-1/2 flex relative">
              <div>
                <input
                  type="text"
                  placeholder=" "
                  className={`relative
                    border-0
                    border-b-2 ${
                      lastNameError ? "border-red-600" : "border-gray-500 "
                    } 
                    w-full
                    bg-transparent 
                    outline-none
                    h-8
                    pt-2 peer`}
                  value={lastName}
                  onChange={(e) => {
                    setLastName(e.target.value)
                    changeValue(e);
                  }}
                  onBlur={() => validateLastName()}
                />
                <label
                  className="peer-focus:font-medium
                absolute text-sm duration-500
                transform -translate-y-4 scale-75
                top-0 left-0 -z-10 origin-[0]
                peer-focus:left-0
                peer-focus:text-slate-500 text-slate-500
                peer-placeholder-shown:scale-100
                peer-placeholder-shown:-translate-y-0
                peer-placeholder-shown:text-slate-950
                peer-focus:scale-75
                peer-focus:-translate-y-4
                ml-3
                "
                >
                  Last name
                </label>
                {lastNameError && (
                  <span className=" text-red-700 text-xs">{lastNameError}</span>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="mb-10 ">
          {/* email */}
          <div className="relative flex-col">
            <input
              type="email"
              placeholder=" "
              className={`relative
            border-0
            border-b-2 ${emailError ? "border-red-600" : "border-gray-500 "}
            w-full
            bg-transparent 
            outline-none
            h-8
            pt-2 peer`}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                changeValue(e);
              }
              }
              onBlur={() => validateEmail()}
            />
            <label
              className="peer-focus:font-medium
                absolute text-sm duration-500
                transform -translate-y-4 scale-75
                top-0 left-0 -z-10 origin-[0]
                peer-focus:left-0
                peer-focus:text-slate-500 text-slate-500
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
        <div className="flex">
          <div className="mb-10 pr-2 w-1/4">
            <div>
              <select disabled className="border-b-2 border-gray-500 h-8 w-20">
                <option
                  value="20"
                  selected="selected"
                  className="border-b-black"
                >
                  +20
                </option>
              </select>
            </div>
          </div>
          <div className="mb-8 pl-2 pr-2 w-1/4">
            <div>
              <select className="border-b-2 border-gray-500 h-8 w-20">
                <option value="select">select</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="15">15</option>
              </select>
            </div>
          </div>
          {/* mobile */}
          <div className="mb-4 pl-2 w-1/2">
            <div className="relative flex-col">
              <input
                type="text"
                placeholder=" "
                className={`
            relative
            border-0
            border-b-2 ${mobileError ? "border-red-600" : "border-gray-500 "}
            w-full
            bg-transparent 
            outline-none
            h-8
            peer
              `}
                value={mobile}
                onChange={(e) => {
                  setMobile(e.target.value)
                  changeValue(e);
                }}
                onBlur={() => validateMobile()}
              />
              <label
                className="peer-focus:font-medium
                absolute text-sm duration-500
                transform -translate-y-4 scale-75
                top-0 left-0 -z-10 origin-[0]
                peer-focus:left-0
                peer-focus:text-slate-500 text-slate-500
                peer-placeholder-shown:scale-100
                peer-placeholder-shown:-translate-y-0
                peer-placeholder-shown:text-slate-950
                peer-focus:scale-75
                peer-focus:-translate-y-4
            "
              >
                Mobile phone
              </label>
              {mobileError && (
                <label className="text-red-700 text-xs">{mobileError}</label>
              )}
            </div>
          </div>
        </div>
        {/* passwors */}
        <div className="mb-10  ">
          {/* password */}
          <div className="relative flex-col">
            <input
              type="password"
              required
              placeholder=""
              className={`
                    relative
                    border-0
                    border-b-2 ${
                      passwordError ? "border-red-600" : "border-gray-500 "
                    }
                    w-full
                    bg-transparent 
                    outline-none
                    h-8
                    px-2 peer
                    
                    `}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                changeValue(e);
              }}
              onBlur={() => validatePassword()}
            />
            <label
              className="peer-focus:font-medium
                absolute text-sm duration-500
                transform -translate-y-4 scale-75
                top-0 left-0 -z-10 origin-[0]
                peer-focus:left-0
                peer-focus:text-slate-500 text-slate-500
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
              <span className=" text-red-700 text-xs">{passwordError}</span>
            )}
          </div>
        </div>

        <div className="mb-8">Date of Birth</div>

        <div className="flex mb-8">
          {/* day & month & year */}
          <div className="">
            {/* day */}
            <div className="text-xs text-gray-300 mr-2 pl-1">Day</div>
            <select className="border-b-2 border-gray-500 h-8 pr-6 w-24">
              <option value>Day</option>
              {days.map((d) => (
                <option>{d}</option>
              ))}
            </select>
          </div>
          <div className="mr-2 ml-2">
            {/* month */}
            <div className="text-xs text-gray-300 mr-2 pl-1">Month</div>
            <select className="border-b-2 border-gray-500 h-8 pr-6 w-28">
              <option value>Month</option>
              {months.map((m) => (
                <option>{m}</option>
              ))}
            </select>
          </div>
          <div className="mr-2 ml-2">
            {/* year */}
            <div className="text-xs text-gray-300 mr-2 pl-1">Year</div>
            <select className="border-b-2 border-gray-500 h-8 pr-6 w-28">
              <option value>Year</option>
              {years.map((y) => (
                <option>{y}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="mb-8 ">Gender</div>
        <div className="flex mb-8">
          {/* select gender */}
          <div className="ml-2 mr-2 ">
            <input type="radio" />
            <label className="pl-1">Female</label>
          </div>
          <div className="mr-3">
            <input type="radio" />
            <label className="pl-1">Male</label>
          </div>
          <div>
            <input type="radio" />
            <label className="pl-1">I do not want to specify</label>
          </div>
        </div>
        <div className="flex-row">
          {/* checkbox */}
          <div className="mb-8">
            <input
              type="checkbox"
              className="pl-4 checked:bg-black-500 relative top-5"
            />
            <label>
              <p className="pl-4 text-xs">
                I would like to sign up for the Defacto newsletter, receive
                Defacto survey inquiries and accept to receive E-Mails /SMS
                /calls for marketing purposes. I can unsubscribe from the
                newsletter and survey inquiries at any time for the future, e.g.
                by clicking on the unsubscribe link or sending an e-mail to
                dataprotection@defacto.com.
              </p>
            </label>
          </div>
          <div className="mb-8">
            <input
              type="checkbox"
              className="pl-4 checked:bg-black-500 relative top-5"
            />
            <label>
              <p className="pl-4 text-xs">
                <span>I have read and understand the </span>
                <span className=" text-black underline cursor-pointer">
                  website terms use
                </span>
                <span> and the</span>
                <span className=" text-black underline cursor-pointer">
                  Privacy Policy
                </span>
                <span> by clicking of the "Register" button.</span>
              </p>
            </label>
          </div>
        </div>
        {/* button register */}
        <div div className="mb-8 pr-3 pl-3">
          <button
            type="submit"
            className="w-full bg-neutral-800 text-white px-8 h-8 hover:bg-white hover:text-black hover:border-neutral-800 hover:border-2"
          >
            <span className="text-xs content-center">Register</span>
          </button>
        </div>
        <div className="mb-8">
          <button type="submit" className="w-full underline text-zinc-950">
            <span className=" text-xs content-center  cursor-pointer">
              Continue as a guest
            </span>
          </button>
        </div>
      </form>
    </>
  );
}
