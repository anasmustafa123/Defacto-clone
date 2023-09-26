import { useState } from "react";
export default function ImageSlider({data}) {
  const [slideIndex, setSlideIndex] = useState(0);
  const nextMove = () => {
    slideIndex < data['imgs'].length - 1
      ? setSlideIndex(slideIndex + 1)
      : setSlideIndex(0);
  };
    const previosMove = () => {
      slideIndex > 0
        ? setSlideIndex(slideIndex - 1)
        : setSlideIndex(data['imgs'].length - 1);
    };
  const containerStyle = {
    width: "101rem",
    height: "35rem",
    margin: "0 auto",
  };
  const slideStyle = {
    backgroundImage: `url(${data['imgs'][slideIndex].url})`,
  };

  return (
    <div className="relative" style={containerStyle}>
      <div className="w-full h-full rounded-xl bg-cover bg-center" style={slideStyle}></div>
      <div
        onClick={()=>{
            nextMove()
        }}
        className="absolute bottom-10 right-24  bg-slate-900 text-white p-2 rounded-lg cursor-pointer hover:bg-white hover:text-black"
      >
        <i class="bx bx-right-arrow-alt text-3xl"></i>
      </div>
      <div
        onClick={previosMove}
        className="absolute bottom-10 left-24  bg-slate-900 text-white p-2 rounded-lg cursor-pointer hover:bg-white hover:text-black"
      >
        <i class="bx bx-left-arrow-alt text-3xl"></i>
      </div>
    </div>
  );
}
