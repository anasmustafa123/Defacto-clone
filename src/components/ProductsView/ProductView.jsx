import { useState } from "react";
import Stars from "./Stars";
import { UserContext } from "../../context/Context";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import ProductContainer from "../ProductPageComponents/ProductContainer";


function ProductView({ id = 0, singleData }) {
  const [toggleHeart, setToggleHeart] = useState(false);
  const { addToCart, addToFav, checkIfExist, removeFromFav } = useContext(UserContext);
  const [isCartClicked, setIsCartClicked] = useState(false);
  const [isFavClicked, setIsFavClicked] = useState(false);
  const [selectedQuantity, setSelectedQuantity] = useState(0);


  return (
    <div key={id} className="flex flex-col gap-2 cursor-pointer">
      <div className=" relative">
        <Link to={`/${singleData["productId"]}`}>
          <img className="w-full h-full" src={singleData["url"]} alt="" />
        </Link>
        <div
          onClick={() => {
            setToggleHeart(!toggleHeart);
            if(!isFavClicked){
              console.log('here');
              addToFav(singleData);
              setIsFavClicked(true)
            }
            else if(isFavClicked) {
              removeFromFav(singleData)
              setIsFavClicked(false)
            }
          }}
          className="absolute w-8 h-8 inline-flex justify-center items-center top-1 right-1 bg-white rounded-full cursor-pointer"
        >
          <i
            className={
              "text-2xl bx" + " " + (toggleHeart ? "bxs-heart" : "bx-heart")
            }
          ></i>
        </div>
        <div
          className="absolute w-8 h-8 inline-flex justify-center items-center bottom-1  right-1  bg-white rounded-full cursor-pointer"
          onClick={() => {
        
              addToCart({ quantity: 1,v: singleData});
              setIsCartClicked(true);
            
          }}
        >
          <i className="text-2xl bx bx-shopping-bag"></i>
        </div>
      </div>
      <p className="text-gray-700 text-xs p-1">{singleData["productName"]}</p>
      <div className="flex items-center gap-2">
        <Stars starsCount={parseInt(singleData["productRating"])} />
        <span className="text-xs font-light">
          ({singleData["ratingCount"]})
        </span>
      </div>
      <div className="flex items-center gap-1 pl-1">
        <p className="font-bold text-gray-800">{singleData["price"]} </p>
      </div>
    </div>
  );
}
export default ProductView;
