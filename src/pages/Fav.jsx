import React from 'react'
import { UserContext } from '../context/Context'
import { useContext } from 'react';
export  default function ShoppingFav() {
  const { Fav, favSize } = useContext(UserContext);

  return(
   <div> <h1 className="text-xl font-semibold">Basket ({favSize})</h1> </div>
  )
}

export const Fav = () => {
  
  return (
    <div className="flex ">
        <div className=' pl-4 m-8'>
            <h1 className="font-semibold h-11">Account information</h1>
            <p className='h-11'>Order Traking</p>
            <hr/>
            <p>HELP</p>
        </div>
        <div className='border p-5  w-screen m-8 j '>
            <h3 className="font-semibold">MY FAVORITE</h3>
            <div className=" flex flex-col items-center justify-center h-80 ">
                <img src="assets/icon-heart.svg" alt="" />
                <p className="font-semibold">There is no product in your favorites</p>
                <div className="bg-black text-white w-72 text-center py-3 hover:bg-white hover:text-black m-16  ">Start Shoping</div>
            
            </div>
        </div>
    </div>
    
  )
}
