
import {UserContext} from "../../context/Context"
import { useContext } from 'react';

export default function ShoppingCart() {
  const { cart, cartSize } = useContext(UserContext);

  return (
    <div className="p-3 max-w-md bg-white min-h-screen">
      <div className="flex justify-between mb-5">
        <h1 className="text-xl font-semibold">Basket ({cartSize})</h1>
        <i class="text-4xl bx bx-x"></i>
      </div>
      {cartSize===0 && <><div className="text-center">
        <i class="text-9xl bx bx-shopping-bag"></i>
      </div>
      <p className="text-center font-semibold mb-4">
        No products in your basket.
      </p>
      <p className="mb-5">
        You can start shopping right away by checking the suggestions below, or
        you can discover DeFacto with the category links.
      </p></>}
      {/* items */}
      {cartSize!=0 && <>{cart.map(i=><div className="w-32 h-32 bg-zinc-300 rounded-md shadow-md hover:scale-105 m-6 hover:duration-75 duration-75 hover:ease-out ease-in-out">{i}</div>)}</>}


      <div className="flex flex-col gap-4">
        <button className=" border-2 border-gray-600 pt-3 pb-3 rounded-lg">OUR SELECTION FOR YOU</button>
        <button className=" border-2 border-gray-600 pt-3 pb-3 rounded-lg">SEASON SALE</button>
        <button className=" border-2 border-gray-600 pt-3 pb-3 rounded-lg">START SHOPPING</button>
      </div>
    </div>
  );
}
