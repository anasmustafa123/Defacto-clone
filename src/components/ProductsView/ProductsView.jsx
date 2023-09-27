import ProductView from "./ProductView";
import { useState, useEffect } from "react";
export default function ProductsView({ gridCol, id = 0, data }) {
  const [viewIndex, setViewIndex] = useState(0);
  const viewNum = 16;
  const viewSize = Math.floor(data.length / viewNum);
  let gridColsNum = `grid-cols-${gridCol}`;
  //reset the number with any any change in data by filtering
  useEffect(() => {
    setViewIndex(0);
  }, [data]);
  return (
    <div>
      <div
        key={id}
        className={
          "grid justify-items-center justify-center  gap-1 grid-cols-4" +
          " " +
          gridColsNum
        }
      >
        {[...Array(16)].map(
          (singleData, index) =>
            data[index + viewIndex * viewNum] && (
              <ProductView
                singleData={data[index + viewIndex * viewNum]}
                id={index}
              />
            )
        )}
      </div>
      <div className="flex justify-around text-xl mt-16 mb-5 items-center gap-32">
        {viewIndex > 0 ? (
          <div
            onClick={() => {
              setViewIndex(viewIndex - 1);
            }}
            className="border-2 p-3 text-3xl"
          >
            <i class="bx bx-left-arrow"></i>
          </div>
        ) : (
          <div></div>
        )}
        <div className="flex gap-3 items-center cursor-pointer">
          {[...Array(viewSize < 15 ? viewSize : 15)].map((value, index) =>
            index === viewIndex ? (
              <i className="text-gray-500 bx bxs-circle"></i>
            ) : (
              <i className="text-gray-500 bx bx-circle"></i>
            )
          )}
        </div>
        {viewIndex < viewSize - 1 ? (
          <div
            onClick={() => {
              setViewIndex(viewIndex + 1);
            }}
            className="border-2 p-3 text-3xl cursor-pointer"
          >
            <i class="bx bx-right-arrow"></i>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
