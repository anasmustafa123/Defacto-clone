import { useState } from "react";
export default function ImageSlider() {
  let slides = [
    {
      imgUrl:
        "https://dfcdn.defacto.com.tr/df/1920/Mobile/en_woman_eg_upto_30_3960x1440-desktop_8843114d-b6c3-4d58-b744-c11766dc42ce_99aac95e-0cfd-4d3c-a34a-c2062e5a0e82_DI_297.jpg",
      name: "img1",
    },
    {
      imgUrl:
        "https://dfcdn.defacto.com.tr/df/1920/Mobile/en_woman_eg_upto_70_3960x1440-desktop_a8dce5ec-0322-4625-835d-6c504005d85d_d27b0fb7-fd46-4cee-acbc-9b9e67eda93b_DI_297.jpg",
      name: "img1",
    },
  ];
  const [slideIndex, setSlideIndex] = useState(0);
  const nextMove = () => {
    slideIndex < slides.length - 1
      ? setSlideIndex(slideIndex + 1)
      : setSlideIndex(0);
  };
  const previosMove = () => {
    slideIndex > 0
      ? setSlideIndex(slideIndex - 1)
      : setSlideIndex(slides.length - 1);
  };
  const containerStyle = {
    width: "101rem",
    height: "35rem",
    margin: "0 auto",
  };
  const slideStyle = {
    backgroundImage: `url(${slides[slideIndex].imgUrl})`,
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
