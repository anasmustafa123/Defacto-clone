import ImageSlider from "../components/clothes-page/ImageSlider";
import Trends from "../components/clothes-page/Trends";
import { Link } from "react-router-dom";
export default function GenderHomePage({ gender, genderData }) {
  let query = `/products/gender:${gender}`;
  return (
    <div className="flex flex-col gap-12 pt-12">
      <ImageSlider data={genderData["slideShow"]} />
      <div className="flex justify-center">
        <Link className="w-4/5" to={query + ";category:newSeason"}>
          <img className="w-full" src={genderData["newSeason"]["url"]} alt="" />
        </Link>
      </div>
      <Link
        to={query + ";category:" + genderData["backToCity"]["category"]}
        className="w-full flex justify-center"
      >
        <img className="w-4/5" src={genderData["backToCity"]["url"]} alt="" />
      </Link>
      <Trends query={query} data={genderData["bestPrices"]} />
      <Link
        to={query + ";category:" + genderData["backToCollege"]["category"]}
        className="flex justify-center"
      >
        <img className="w-9/12" src={genderData["backToCollege"].url} alt="" />
      </Link>
      <Trends query={query} data={genderData["trends"]} />
      <Link
        to={query + ";category:" + genderData["fasion"]["category"]}
        className="flex justify-center"
      >
        <img className="w-8/12" src={genderData["fasion"].url} alt="" />
      </Link>
      <Trends query={query} data={genderData["accessories"]} />
    </div>
  );
}
