import { data } from "./fullData";

function ifExist(data, key, valueArray) {
  return valueArray.reduce((a, b) => {
    console.log({ a, b });
    return a || data[key] === b;
  }, false);
}
function toArray(inputQuery) {
  return inputQuery
    .split(";")
    .map((x) => {
      return x.split(":");
    })
    .map((v2) => {
      if (v2.length != 2) return v2;
      return [v2[0], v2[1].split(",")];
    });
}
function getData(query) {
  let objQuery = toArray(query);
  let requesteData = data.filter((d) => {
    return objQuery.reduce((a, b) => {
      return a && ifExist(d, b[0], b[1]);
    }, true);
  });
  console.log(requesteData);
  return requesteData;
}
function sortData(sortKey, data) {
  let newArr = [...data];
  newArr =
    sortKey === "price"
      ? newArr.sort((a, b) => {
          console.log(
            a[sortKey].replace("$", "") - b[sortKey].replace("$", "")
          );
          return parseInt(
            a[sortKey].replace("$", "") - b[sortKey].replace("$", "")
          );
        })
      : sortKey == "name"
      ? newArr.sort((a, b) => {
          return a["productName"].toLowerCase() - b["productName"].toLowerCase();
        })
      : sortKey == "productId"
      ? newArr.sort((a, b) => {
          return a["productId"] - b["productId"];
        })
      : newArr;
  return newArr;
}
const searchById = (id) => {
  return data.find((e) => {
    return e.productId == id;
  });
};

export { getData, searchById, sortData };
