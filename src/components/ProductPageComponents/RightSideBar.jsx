import Stars from "../ProductsView/Stars";
import { useState, useContext } from "react";
    import { isGuest, isUser } from "../../servises/backend";
    import { UserContext } from "../../context/Context";

export default function RightSideBar({ productData }) {
  const { isHearted, addToFav, removeFromFav, addToCart } =
    useContext(UserContext);
  let sizes = ["XS", "S", "M", "L", "XL", "XXL"];
  
  return (
    <div className="flex flex-col gap-2  max-w-[400px]">
      <div
        onClick={() => {
          if (isHearted) {
            addToFav(productData);
          } else {
            removeFromFav(productData);
          }
        }}
        className="flex justify-between items-center"
      >
        <p className="text-base">{productData.productName}</p>
        <i
          class={
            (isGuest()
              ? "text-gray-300 cursor-not-allowed"
              : "text-red-600 ") +
            "text-2xl bx bx-heart cursor-pointer rounded-full" +
            " " +
            (isHearted(productData) ? "bxs-heart" : "bx-heart")
          }
        ></i>
      </div>
      <div>
        <p className="text-base font-semibold"> {productData.price} </p>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-xs font-medium text-gray-400">
          Product Code: {productData.productId}
        </p>
        <a href="#">
          <i class="text-2xl bx bx-share-alt"></i>
        </a>
      </div>
      <div>
        <p>Rate</p>
        <Stars starsCount={productData.productRating} />
      </div>
      <div className="flex justify-between items-center">
        <p>Size Options</p>
        <div className="flex items-center">
          <a href="#" className="hover:underline">
            Find My Size
          </a>
          <i class="bx bx-right-arrow-alt"></i>
        </div>
      </div>
      <div className="flex justify-between">
        {sizes.map((value, index) => (
          <p key={index}>{value}</p>
        ))}
      </div>
      <button
        className="bg-gray-500 text-white pt-2 pb-2 rounded"
        type="button"
        onClick={() => {
          if (isGuest()) {
            alert("log in first");
          } else {
            alert("add to cart");
            addToCart({ quantity: 1, v: productData });
          }
        }}
      >
        ADD TO CART
      </button>
      <div className="text-center flex flex-col gap-4 pt-2 pb-2 border rounded-2xl border-dashed border-black mt-3 mb-3">
        <p className="leading-none">Discover Payment Options</p>
        <div className="flex justify-center gap-12">
          <img
            src="https://dfcdn.defacto.com.tr/AssetsV2/dist/img/paytabs/NBE.png"
            alt="alahly bank"
          />
          <img
            src="https://dfcdn.defacto.com.tr/AssetsV2/dist/img/paytabs/valu.png"
            alt="valu"
          />
          <img
            src="https://dfcdn.defacto.com.tr/AssetsV2/eg/img/paytabs/fawry.png"
            alt="fawry"
          />
        </div>
      </div>
      <div className="flex gap-4 border rounded-lg border-black border-dashed  pt-1 pb-1 items-center justify-center">
        <p className="text-sm">Pay With Credit Card Save %5</p>
        <i class="bx bx-credit-card-front text-xl"></i>
      </div>
      <div>
        <h1 className="font-semibold leading-none pt-6 pb-3">
          Product Information
        </h1>
        <ul className="list-disc pl-10">
          <li>Model Measurements: Height: 1.75 Bust: 81 Waist: 60 Hips: 88</li>
          <li>Sample size: S</li>
          <li>Main Fabric Content : Viscose 33%,Polyester 67%</li>
        </ul>
      </div>
      <div className="flex items-center justify-end">
        <a className="hover:underline" href="#">
          Products Details
        </a>
        <i class="bx bx-chevron-right"></i>
      </div>
    </div>
  );
}
