
import { useState } from "react";
import Stars  from "./Stars";
import {CartContext} from "../../context/Context"
import React, { useContext } from 'react';
import {Link, useNavigate } from "react-router-dom";
import ProductContainer from "../ProductPageComponents/ProductContainer"
function ProductView({id = 0, singleData}) {
  const [toggleHeart, setToggleHeart] = useState(false);
  const { addToCart } = useContext(CartContext);

  console.log(singleData)
  
  return (
    <Link to= {`/${singleData['productId']}`} key={id}  className="flex flex-col gap-2 cursor-pointer">
      <div className=" relative">
        <img
        className="w-60 h-60"
          src={singleData['url']}
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
      <p className="text-gray-700 text-xs p-1">{singleData['productName']}</p>
      <div className="flex items-center gap-2">
        <Stars starsCount={parseInt(singleData['productRating'])} />
        <span className="text-xs font-light">({singleData['ratingCount']})</span>
      </div>
      <div className="flex items-center gap-1 pl-1">
        <p className="font-bold text-gray-800">{singleData['price']} </p>
      </div>
    </Link>
  );
}
export default ProductView;
