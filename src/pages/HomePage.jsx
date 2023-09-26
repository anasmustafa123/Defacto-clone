import React from "react";
import HomeView from "../components/HomeView";
export default function HomePage({setGenderChoosed}) {
  return (
    <div className="flex flex-col justify-center items-center  dark:bg-stone-900 dark:text-white -z-10 ">
      <HomeView setGenderChoosed ={setGenderChoosed}/>
      <div className="bg-slate-200 w-11/12 mt-12">
        <div className="p-6  dark:bg-stone-500 dark:text-white">DeFacto Online Clothing Store</div>
      </div>
    </div>
  );
}
