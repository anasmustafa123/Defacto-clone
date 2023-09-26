import { data } from "./fullData";

/* data.sort((a, b) => {
  return a["key"] > b["key"] ? 1 : -1;
}); */
  localStorage.setItem('dataloaded', 'true')
function ifExist(data, key, valueArray) {
  return valueArray.reduce((a, b) => {
    console.log({ a, b });
    return a || data[key] === b;
  }, false);
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
  let requesteData = data.filter((d) => {
    return objQuery.reduce((a, b) => {
      return a && ifExist(d, b[0], b[1]);
    }, true);
  });
  console.log(requesteData);
  return requesteData;
}

const searchById = (id) => {
  return data.find((e) => {
    return e.productId == id;
  });
};

export { getData, searchById };
