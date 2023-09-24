import RightSideBar from "./RightSideBar";
import { useParams } from "react-router-dom";
import { searchById } from "../../servises/dataCenter";
export default function ProductContainer({}) {
  const { itemId } = useParams();
  console.log(itemId)
  let currentProduct = searchById(itemId);
  let imgUrls = [currentProduct.url]
  return (
    <div className="flex justify-center gap-5">
      <div className="grid grid-cols-1 gap-1">
        {imgUrls.map((url, index)=>(
            <img className="max-w-[500px]" key={index} src={url} alt="" />
        ))}
      </div>
      <RightSideBar productData = {currentProduct} />
    </div>
  );
}
