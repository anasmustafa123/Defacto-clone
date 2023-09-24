import { womenFullData } from "./womenData";
import { man } from "./man";
import { kids } from "./kids";

let data = []

const fillItems = (items) => {
  items.forEach(sindleItem => {
    data.push(sindleItem)
    sindleItem['productId'] = data.length
  });
}
fillItems(womenFullData)
fillItems(man)
fillItems(kids)
console.log(data)

data.sort((a, b) => {
  return a["key"] > b["key"] ? 1 : -1;
});

function ifExist(data, key, valueArray){
  return valueArray.reduce((a, b)=>{
    console.log({a, b})
    return a || data[key] === b;
  }, false)
}

function toObj(inputQuery) {
  return inputQuery
    .split(";")
    .map((x) => {
      return x.split(":");
    })
    .map((v2) => {
      return [v2[0], v2[1].split(",")];
    });
}
function getData(query) {
  let objQuery = toObj(query);
  let x =  data.filter((d)=>{
    return objQuery.reduce((a, b)=>{
      return a && ifExist(d, b[0], b[1])
    },true)
  })
  console.log(x)
  return x;
}
const searchById = (id) => {
  return data.find((e)=>{
    return e.productId == id;
  })
}

export { getData, searchById };
