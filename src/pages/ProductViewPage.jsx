import ProductsView from "../components/ProductsView/ProductsView";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { getData } from "../servises/dataCenter";
export default function ProductViewPage() {
  const { query } = useParams();
  console.log(query);
  let data = getData(query);

  return (
    <div className="flex items-center flex-col">
      <div className="w-[1300px]">
      <ProductsView data={data} gridCol={4} />
      </div>
    </div>
  );
}
