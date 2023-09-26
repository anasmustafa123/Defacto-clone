import { useState } from "react";
import Stars from "./Stars";
import { UserContext } from "../../context/Context";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { isGuest, isUser } from "../../servises/backend";
function ProductView({ id = 0, singleData }) {
  const [toggleHeart, setToggleHeart] = useState(false);
  const { addToCart, addToFav, checkIfExist, removeFromFav, isUserGuest, isHearted } =
    useContext(UserContext);
  const [isCartClicked, setIsCartClicked] = useState(false);
  const [isFavClicked, setIsFavClicked] = useState(false);
  return (
    <div key={id} className="flex flex-col gap-2 cursor-pointer">
      <div className=" relative">
        <Link to={`/${singleData["productId"]}`}>
          <img className="min-h-[470px] max-h-[470px]" src={singleData["url"]} alt="" />
        </Link>
        <div
          onClick={() => {
            if (isGuest()) {
              alert('log in first')
            }else{
              setToggleHeart(!toggleHeart);
              if (!isHearted(singleData)) {
                console.log("here");
                addToFav(singleData);
                setIsFavClicked(true);
              } else {
                removeFromFav(singleData);
                setIsFavClicked(false);
              }
            }
          }}
          className={
            (isUserGuest
              ? "bg-gray-400 text-gray-300 cursor-not-allowed"
              : "bg-gray-200 text-red-600 ") +
            " absolute w-8 h-8 inline-flex justify-center items-center top-1 right-1 rounded-full"
          }
        >
          <i
            className={
              "text-2xl bx" + " " + (isHearted(singleData) ? "bxs-heart" : "bx-heart")
            }
          ></i>
        </div>
        <div
          className={
            (isUserGuest
              ? "bg-gray-400 text-gray-300 cursor-not-allowed"
              : "bg-gray-200  ") +
            "  absolute w-8 h-8 inline-flex justify-center items-center bottom-1  right-1   rounded-full cursor-pointer"
          }
          onClick={() => {
            if (isGuest()) {
              alert("log in first");
            } else {
              alert("add to cart");
              addToCart({ quantity: 1, v: singleData });
              setIsCartClicked(true);
            }
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
