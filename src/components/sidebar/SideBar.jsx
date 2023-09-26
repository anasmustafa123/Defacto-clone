import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export default function SideBar({ className }) {
  let arr4 = [
    { key: "men", value: "men" },
    { key: "women", value: "women" },
    { key: "kids", value: "kids" },
  ];
  let arr1 = [
    { key: "newSeason", value: "newSeason" },
    { key: "pants", value: "pants" },
    { key: "blazer", value: "blazer Jacket" },
    { key: "t-shirt", value: "t-shirt" },
    { key: "shirt", value: "shirt" },
    { key: "jacket", value: "jacket" },
    { key: "pullover", value: "pullover" },
    { key: "skirts", value: "skirts" },
    { key: "shirtsAndTops", value: "shirtsAndTops" },
    { key: "coat", value: "Coat" },
  ];
  const arrToStr = (arr) => {
    let output = arr.reduce((a, b) => {
      return a + b.replaceAll(" ", "") + ",";
    }, "");
    return output.substr(0, output.length - 1);
  };
  const strToQuery = (selectedGender, selectedCategory) => {
    let query = selectedGender.length
      ? `gender:${arrToStr(selectedGender)}`
      : "";
    query += selectedGender.length && selectedCategory.length ? ";" : "";
    query += selectedCategory.length
      ? `category:${arrToStr(selectedCategory)}`
      : "";
    return query;
  };

  const [selectedGender, setSelectedGender] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  return (
    <form
      action="#"
      className={className + " " + "bg-gray-200 p-3 rounded-pants2xl"}
    >
      <div className="ml-5 ">
        {arr4.map((v, index) => (
          <>
            <div className="flex ml-5">
              <input
                value={v['key']}
                onChange={(e) => {
                  if (!e.target.checked) {
                    let copy = selectedGender.filter((oneGender) => {
                      return oneGender !== e.target.value;
                    });
                    setSelectedGender(copy);
                  } else {
                    setSelectedGender([...selectedGender, e.target.value]);
                  }
                }}
                type="checkbox"
              />
              <p className="ml-2" key={index}>
                {v['value']}
              </p>
            </div>
          </>
        ))}
      </div>
      <br />
      <div className="ml-5 ">
        {arr1.map((v, index) => (
          <>
            <div className="flex ml-5">
              <input
                type="checkbox"
                value={v['key']}
                onChange={(e) => {
                  if (!e.target.checked) {
                    let copy = selectedCategory.filter((oneCategory) => {
                      return oneCategory !== e.target.value;
                    });
                    setSelectedCategory(copy);
                  } else {
                    setSelectedCategory([...selectedCategory, e.target.value]);
                  }
                }}
              />
              <p className="ml-2" key={index}>
                {v['value']}
              </p>
            </div>
          </>
        ))}
      </div>

      <div className="flex ml-3">
        <div className="w-20">
          <p>from</p>
          <input className="w-20 border border-black rounded" type="number" />
        </div>
        <div className=" w-20 ml-3">
          <p>to</p>
          <input className="w-20 border border-black rounded" type="number" />
        </div>
      </div>
      <div className="flex justify-center">
        <Link
          to={`/products/${strToQuery(selectedGender, selectedCategory)}`}
          type="submit"
          className="pl-10 pr-10 pt-1 pb-1 bg-gray-500 mt-3 rounded-2xl text-white"
        >
          Search
        </Link>
      </div>
    </form>
  );
}
