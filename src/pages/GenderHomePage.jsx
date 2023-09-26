import ImageSlider from "../components/clothes-page/ImageSlider";
import Trends from "../components/clothes-page/Trends";
import { getData } from "../servises/dataCenter";
import { Link } from "react-router-dom";
export default function GenderHomePage({gender, genderData}) {
  let query = `/products/gender:${gender}`;
  return (
    <div className="flex flex-col gap-12 pt-12 dark:bg-stone-900">
      <ImageSlider data = {genderData["slideShow"]} />
      <div className="flex justify-center">
        <img
          className="w-4/5"
          src={genderData['newSeason']['url']}
          alt=""
        />
      </div>
      <div className="flex justify-center  dark:bg-stone-900">
        <img
          className="w-4/5"
          src={ genderData['backToCity']['url']}
          alt=""
        />
      </div>
      <Trends query = {query} data={genderData['trends']} />
      <div className="flex justify-center">
        <img
          className="w-9/12"
          src={genderData['backToCollege'].url}
          alt=""
        />
      </div>
      <Trends query = {query}  data={genderData['bestPrices']} />
      <div className="flex justify-center">
        <img
          className="w-8/12"
          src={genderData['fasion'].url}
          alt=""
        />
      </div>
      <Trends query = {query} data={genderData['accessories']} />
    </div>
  );
}
