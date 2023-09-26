import ProductsView from "../components/ProductsView/ProductsView";
import { useParams } from "react-router-dom";
import { getData } from "../servises/dataCenter";
import SideBar from "../components/sidebar/SideBar";
export default function ProductViewPage() {
  const { query } = useParams();
  console.log(query);
  let data = getData(query);
  return (
    <div className="flex justify-center gap-6 ">
      <SideBar className="" />
      <div className="relative w-full h-screen overflow-scroll">
        <ProductsView data={data} gridCol={4} />
      </div>
    </div>
  );
}
