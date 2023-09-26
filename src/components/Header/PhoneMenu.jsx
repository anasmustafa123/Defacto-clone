import React from 'react'
import { useState } from 'react';
export default function PhoneMenu({Phoneprops,logintoggle,carttoggle}) {
  
  
  const [loginOpened, setLoginOpened] = useState(false);

  
  return (

    <div className='bg-slate-100 w-full h-screen gap-6 flex flex-col  '>
     <div className="text-lg w-full flex justify-end pr-4 pt-4">
          <button
            onClick={() => {
              Phoneprops(false);
            }}
            className=""
          >
            X
          </button>
        </div>
      

      <div className=" group read-only:" onClick={() => logintoggle(true)}>
                <li className="flex gap-2 items-center text-xl hover:border-b-2 border-black  hover:text-gray-400 hover:border-gray-300">
                  <i class="text-2xl bx bx-user"></i>
                  <span className="text-2xl hover:text-gray-400 inline" >Login</span>
                </li>
              </div>
              <li className="flex gap-2 items-center text-xl hover:border-b-2 border-black hover:text-gray-400 hover:border-gray-300">
                <i class="text-2xl bx bx-heart"></i>
                <a href="#" className=" text-2xl inline  hover:text-gray-400">
                  Favorites
                </a>
              </li>

              <li onClick={() => carttoggle(true)} className=" flex gap-2 items-center text-xl hover:border-b-2 border-black hover:text-gray-400 hover:border-gray-300">
                <i class="text-2xl bx bx-shopping-bag"></i>
                
            <button to={'/cart'} className=" inline text-2xl hover:text-gray-400 " >
                  Shopping Cart <span>(99)</span>
                </button>

              </li>
    </div>
    

  )

}