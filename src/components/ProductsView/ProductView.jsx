import { useState } from "react";
import Stars  from "./Stars";
import {Context} from "../../context/Context"
import React, { useContext } from 'react';


function ProductView() {
  const [toggleHeart, setToggleHeart] = useState(false);
  const { addToCart } = useContext(Context);
  return (
    <div className="w-full">
      <div className="w-full relative">
        <img
        className="w-full"
          src="https://i.pinimg.com/564x/34/a4/2f/34a42f3955718d3fe4be880d27f41027.jpg"
          alt=""
        />
        <div
          onClick={() => {
            setToggleHeart(!toggleHeart);
          }}
          className="absolute w-8 h-8 inline-flex justify-center items-center top-1 right-1 bg-white rounded-full cursor-pointer"
        >
          <i
            className={
              "text-2xl bx" + " " + (toggleHeart ? "bxs-heart" : "bx-heart")
            }
          ></i>
        </div>
        <div className="absolute w-8 h-8 inline-flex justify-center items-center bottom-1  right-1  bg-white rounded-full cursor-pointer"
          onClick={() => {
            addToCart("item")
          }}
        >
          <i className="text-2xl bx bx-shopping-bag"></i>
        </div>
      </div>
      <p className="text-gray-700 text-xs p-1">Standrad Fit Crew Neck</p>
      <div className="flex items-center gap-2">
        <Stars starsCount={3} />
        <span className="text-xs font-light">(1)</span>
      </div>
      <div className="flex items-center gap-1 pl-1">
        <p className="font-bold text-gray-800">499 </p>
        <span className="font-medium text-gray-800 text-xs">EGP </span>
      </div>
    </div>
  );
}
export default ProductView;
