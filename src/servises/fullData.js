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

export {data}