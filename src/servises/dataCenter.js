import {womenData} from "./womenData";

function getData(objQuery) {
  if (objQuery == "women") {
    return womenData['hoodiesAndSweatshirts'];
  }
  else return objQuery
}

export { getData };
