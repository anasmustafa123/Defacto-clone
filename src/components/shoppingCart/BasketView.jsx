import React from "react";

export default function BasketView() {
  return (
    <>
      <div className="flex gap-[1%]">
        <img
          className=" w-[6%] h-fit"
          src="https://dfcdn.defacto.com.tr/2/Z7679AZ_23SM_BR344_01_02.jpg"
          alt=""
        />

        <div className="mt-[0.1%]">
          <p className="text-xs font-light">Slim Fit Lined Blazer Jacket</p>
          <p className="text-sm font-semibold text-slate-950">1899 EGP</p>

          <div className="flex gap-[4%] mt-[10%]">
            <div className="text-base font-extralight">Size:</div>

            <div className="text-slate-800 items-center flex gap-[35%] text-sm font-semibold">
              <div>48</div>
              <button>Edit</button>
            </div>
          </div>

          <div className="flex gap-[3%] items-center mt-[18%]">
            <i class="bx bx-trash-alt"></i>
            <div className="text-sm font-light">Quantity</div>
            <div className="text-sm font-light">1</div>
            <i class="text-gray-500 font-extralight text-2xl bx bx-plus"></i>
          </div>
        </div>
      </div>
    </>
  );
}
