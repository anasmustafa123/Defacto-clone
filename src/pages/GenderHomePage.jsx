import ImageSlider from "../components/clothes-page/ImageSlider";
import Trends from "../components/clothes-page/Trends";
export default function GenderHomePage({genderData}) {
  console.log(genderData)
  return (
    <div className="flex flex-col gap-12 pt-12">
      <ImageSlider data = {genderData["slideShow"]} />
      <div className="flex justify-center">
        <img
          className="w-4/5"
          src={genderData['newSeason']['url']}
          alt=""
        />
      </div>
      <div className="flex justify-center">
        <img
          className="w-4/5"
          src={genderData['backToCity']['url']}
          alt=""
        />
      </div>
      <Trends data={genderData['trends']} />
      <div className="flex justify-center">
        <img
          className="w-9/12"
          src={genderData['backToCollege'].url}
          alt=""
        />
      </div>
      <Trends data={genderData['bestPrices']} />
      <div className="flex justify-center">
        <img
          className="w-8/12"
          src={genderData['fasion'].url}
          alt=""
        />
      </div>
      <Trends data={genderData['accessories']} />
    </div>
  );
}
