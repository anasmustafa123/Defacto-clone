import React from "react";
import { UserContext } from "../context/Context";
import { useContext } from "react";
import ProductView from "../components/ProductsView/ProductView";
export const Fav = () => {
  const { fav, favSize } = useContext(UserContext);

  return (
    <div className="flex dark:bg-stone-950 dark:text-white">
      <div className=" pl-4 m-8 hidden md:block">
        <h1 className="font-semibold h-11">Account information</h1>
        <p className="h-11">Order Traking</p>
        <hr />
        <p>HELP</p>
      </div>
      <div className="border p-5  w-full m-8 j md:w-full">
        <h3 className="font-semibold">MY FAVORITE</h3>
        {favSize === 0 && (
          <div className=" flex flex-col items-center justify-center h-80 ">
            <img className="dark:invert"
              src="https://dfcdn.defacto.com.tr/AssetsV2/dist/img/icon-heart.svg"
              alt=""
            />
            <p className="font-semibold dark:text-white">
              There is no product in your favorites
            </p>
            <div className="bg-black text-white w-[min(75%,18rem)] text-center py-3 hover:bg-white hover:text-black m-16 dark:bg-stone-700 dark:hover:text-white  ">
              Start Shoping
            </div>
          </div>
        )}
        {favSize !== 0 && fav.map((valu, index) => <ProductView singleData={valu} />)}
      </div>
    </div>
  );
};
