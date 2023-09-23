import React from "react";
import { UserContext } from "../../context/Context";
import { useContext } from "react";
export default function BasketView({ item }) {
  const { incrementCart, decrementCart, removeOneItem } =
    useContext(UserContext);
  return (
    <>
      <div className="flex gap-[5%]">
        <img className=" w-[23%] h-fit" src={item["v"]["url"]} alt="" />
        <div className="mt-[0.1%]">
          <p className="text-base font-light">{item["v"].productName}</p>
          <p className="text-sm font-semibold text-slate-950">
            {item["v"].price}
          </p>

          <div className="flex gap-[4%] mt-[10%]">
            <div className="text-base font-extralight">Size:</div>

            <div className="text-slate-800 items-center flex gap-[35%] text-sm font-semibold">
              <div>48</div>
              <button>Edit</button>
            </div>
          </div>
          <div className="flex gap-[3%] items-center mt-[18%]">
            <i
              onClick={() => {
                removeOneItem(item);
              }}
              class="cursor-default bx bx-trash-alt"
            ></i>
            {item["quantity"] > 1 && (
              <i
                onClick={() => {
                  decrementCart(item);
                }}
                class="text-gray-500 font-extralight text-2xl bx bx-minus cursor-default"
              ></i>
            )}

            <div className="text-sm font-light">Quantity</div>
            <div className="text-sm font-light">{item["quantity"]}</div>
            <i
              className="cursor-pointer"
              onClick={() => {
                incrementCart(item);
              }}
              class="text-gray-500 font-extralight text-2xl bx bx-plus"
            ></i>
          </div>
        </div>
      </div>
    </>
  );
}
