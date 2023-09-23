import RightSideBar from "./RightSideBar";
import { useParams } from "react-router-dom";
import { searchById } from "../../servises/dataCenter";
export default function ProductContainer({}) {
  const { itemId } = useParams();
  console.log(itemId)
  let currentProduct = searchById(itemId);
  let imgUrls = [currentProduct.url]
  /* let imgUrls = [
    "https://dfcdn.defacto.com.tr/7/Z9072AZ_23SP_WT34_02_01.jpg",
    "https://dfcdn.defacto.com.tr/7/Z9072AZ_23SP_WT34_01_01.jpg",
    "https://dfcdn.defacto.com.tr/7/Z9072AZ_23SP_WT34_03_01.jpg",
    "https://dfcdn.defacto.com.tr/7/Z9072AZ_23SP_WT34_04_01.jpg",
    "https://dfcdn.defacto.com.tr/7/Z9072AZ_23SP_WT34_05_01.jpg",
    "https://dfcdn.defacto.com.tr/7/Z9072AZ_23SP_WT34_06_01.jpg",
    "https://dfcdn.defacto.com.tr/7/Z9072AZ_23SP_WT34_07_01.jpg",
    "https://dfcdn.defacto.com.tr/7/Z9072AZ_23SP_WT34_08_01.jpg"
  ]; */
  return (
    <div className="flex gap-5">
      <div className="grid grid-cols-2 gap-1">
        {imgUrls.map((url, index)=>(
            <img key={index} src={url} alt="" />
        ))}
      </div>
      <RightSideBar productData = {currentProduct} />
    </div>
  );
}
