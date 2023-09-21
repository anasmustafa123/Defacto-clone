import RightSideBar from "./RightSideBar";
export default function ProductContainer({itemId}) {
  let imgUrls = [
    "https://dfcdn.defacto.com.tr/7/Z9072AZ_23SP_WT34_02_01.jpg",
    "https://dfcdn.defacto.com.tr/7/Z9072AZ_23SP_WT34_01_01.jpg",
    "https://dfcdn.defacto.com.tr/7/Z9072AZ_23SP_WT34_03_01.jpg",
    "https://dfcdn.defacto.com.tr/7/Z9072AZ_23SP_WT34_04_01.jpg",
    "https://dfcdn.defacto.com.tr/7/Z9072AZ_23SP_WT34_05_01.jpg",
    "https://dfcdn.defacto.com.tr/7/Z9072AZ_23SP_WT34_06_01.jpg",
    "https://dfcdn.defacto.com.tr/7/Z9072AZ_23SP_WT34_07_01.jpg",
    "https://dfcdn.defacto.com.tr/7/Z9072AZ_23SP_WT34_08_01.jpg"
  ];
  return (
    <div className="flex gap-5">
      <div className="grid grid-cols-2 gap-1">
        {imgUrls.map((url, index)=>(
            <img key={index} src={url} alt="" />
        ))}
      </div>
      <RightSideBar />
    </div>
  );
}
