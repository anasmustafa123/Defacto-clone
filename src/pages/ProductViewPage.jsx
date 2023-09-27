import ProductsView from "../components/ProductsView/ProductsView";
import { useParams } from "react-router-dom";
import { getData } from "../servises/dataCenter";
import SideBar from "../components/sidebar/SideBar";
import { sortData } from "../servises/dataCenter";
import { useState, useEffect } from "react";
export default function ProductViewPage() {
  const { query } = useParams();
  let data = getData(query);

  const [finalData, setFinalData] = useState(data);
  const [selected, setSelecteOption] = useState('price')
  return (
    <>
      <div className="relative flex justify-center gap-6 mt-11">
        <select
        onChange={
          (e)=>{
            setSelecteOption(e.target.value)
            setFinalData(sortData(e.target.value, finalData))
          }
        }
          className="absolute right-64 -top-7 "
          name="sorting"
          id="sorting"
        >
          <label htmlFor="sorting">choose an option</label>
          <option
            value="price"
          >
            Price
          </option>
          <option value="name">Name</option>
          <option value="productId">Id</option>
        </select>
        <SideBar className="fixed left-9 top-56 " />
        <div className="w-[1300px] relative">
          <ProductsView data={finalData} gridCol={4} />
        </div>
      </div>
    </>
  );
}
