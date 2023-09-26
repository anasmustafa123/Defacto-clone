import ProductsView from "../components/ProductsView/ProductsView";
import { useParams } from "react-router-dom";
import { getData, getSearchData } from "../servises/dataCenter";
import SideBar from "../components/sidebar/SideBar";


export default function ProductViewPage({searchField}) {

  let data = [];
  const { query } = useParams();

  if (searchField!="") {
    data = getSearchData(searchField)
  }else{
    console.log(query);
    data = getData(query);
  }
  return (
    <div className="flex justify-center gap-6 ">
      <SideBar className="fixed left-9 top-56" />
      <div className="w-[1300px] relative">
      <ProductsView data={data} gridCol={4} />
      </div>
    </div>
  );
}
