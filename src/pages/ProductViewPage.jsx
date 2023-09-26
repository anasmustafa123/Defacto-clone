import ProductsView from "../components/ProductsView/ProductsView";
import { useParams } from "react-router-dom";
import { getData, getSearchData } from "../servises/dataCenter";
import SideBar from "../components/sidebar/SideBar";


export default function ProductViewPage({searchField}) {
  const { query } = useParams();
  let data = [];

  if (searchField!="") {
    data = getSearchData(searchField)
  }else{
    console.log(query);
    data = getData(query);
  }
  
  return (
    <div className="flex justify-center gap-6 ">
      <SideBar className="" />
      <div className="relative w-full h-screen overflow-scroll">
        <ProductsView data={data} gridCol={4} />
      </div>
    </div>
  );
}
