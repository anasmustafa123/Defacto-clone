import React from "react";

export default function Register({registerclose}) {
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
      <form className=" w-96 relative z-10 p-5">
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
        <div className="relative flex mt-4 w-full justify-stretch ">
          {/* name */}
          <div className="flex ">
            <div>
              <input
                type="text"
                required
                placeholder=" "
                className="
            relative
            border-0
            border-b-2 border-gray-500 
            w-full
            bg-transparent 
            outline-none
            h-10
            pt-2 peer"
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
                Name
              </label>
            </div>
            {/* last name */}
            <div className="mb-8 pl-3 flex relative">
              <div>
                <input
                  type="text"
                  required
                  placeholder=" "
                  className="
              relative
              border-0
              border-b-2 border-gray-500 
              w-full
              bg-transparent 
              outline-none
              h-10
              pt-2 peer
                
                "
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
                ml-3
                "
                >
                  Last name
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-8 ">
          {/* email */}
          <div className="relative flex-col">
            <input
              type="email"
              required
              placeholder=" "
              className="
            relative
            border-0
            border-b-2 border-gray-500 
            w-full
            bg-transparent 
            outline-none
            h-10
            pt-2 peer
              "
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
          </div>
        </div>
        <div className="flex">
          <div className="mb-8 pr-2 w-1/4">
            <div>
              <select disabled className="border-b-2 border-gray-500 h-10 w-20">
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
              <select className="border-b-2 border-gray-500 h-10 w-20">
                <option value="select">select</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="15">15</option>
              </select>
            </div>
          </div>
          <div className="mb-4 pl-2 w-3/4">
            <div className="relative flex-col">
              <input
                type="text"
                required
                placeholder=" "
                className="
            relative
            border-0
            border-b-2 border-gray-500 
            w-full
            bg-transparent 
            outline-none
            h-10
            peer
              "
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
                Mobile phone
              </label>
            </div>
          </div>
        </div>
        <div className="mb-8  ">
          {/* password */}
          <div className="relative flex-col">
            <input
              type="password"
              required
              placeholder=" "
              className="
            relative
            border-0
            border-b-2 border-gray-500 
            w-full
            bg-transparent 
            outline-none
            h-10
            px-2 peer
              "
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
