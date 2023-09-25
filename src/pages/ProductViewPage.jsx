import ProductsView from "../components/ProductsView/ProductsView";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getData } from "../servises/dataCenter";
import SideBar from "../components/sidebar/SideBar";
export default function ProductViewPage() {
  const { query } = useParams();
  console.log(query);
  let data = getData(query);
  const navigate = useNavigate();
  return (
    <div className="flex justify-center gap-6 ">
      <SideBar className="fixed left-9 top-56" />
      <div className="w-[1300px] relative">
        <ProductsView data={data} gridCol={4} />
      </div>
    </div>
  );
}
