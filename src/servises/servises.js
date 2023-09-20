let men = {
  "1694966402-54": {
    url: "https://www.defacto.com/en-eg/man-polo-t-shirts",
    title: "Regular Fit Polo T-Shirt",
    image: "https://www.defacto.com/en-eg/regular-fit-polo-tisort-2719421",
    placeholderImage: "",
    productCode: "T7999AZNM7",
  },
  "1694966402-55": {
    url: "https://www.defacto.com/en-eg/man-polo-t-shirts",
    title: "Regular Fit Polo T-Shirt",
    image: "https://www.defacto.com/en-eg/regular-fit-polo-tisort-2719421",
    placeholderImage: "",
    productCode: "T7999AZNM7",
  },
  "1694966402-56": {
    url: "https://www.defacto.com/en-eg/man-polo-t-shirts",
    title: "Regular Fit Polo T-Shirt",
    image: "https://www.defacto.com/en-eg/regular-fit-polo-tisort-2719421",
    placeholderImage:
      "//dfcdn.defacto.com.tr/AssetsV2/dist/img/placeholders/placeholder.svg",
    productCode: "T7999AZNM7",
  },
  "1694966402-57": {
    url: "https://www.defacto.com/en-eg/man-polo-t-shirts",
    title: "Regular Fit Polo T-Shirt",
    image: "https://www.defacto.com/en-eg/regular-fit-polo-tisort-2719421",
    placeholderImage:
      "//dfcdn.defacto.com.tr/AssetsV2/dist/img/placeholders/placeholder.svg",
    productCode: "T7999AZNM7",
  },
  "1694966402-58": {
    url: "https://www.defacto.com/en-eg/man-polo-t-shirts",
    title: "Regular Fit Polo T-Shirt",
    image: "https://www.defacto.com/en-eg/regular-fit-polo-tisort-2719421",
    placeholderImage:
      "//dfcdn.defacto.com.tr/AssetsV2/dist/img/placeholders/placeholder.svg",
    productCode: "T7999AZNM7",
  },
  "1694966379-1": {
    url: "https://www.defacto.com/en-eg/man-polo-t-shirts",
    title: "Regular Fit Polo Neck Stripe Detailed Short Sleeve T-Shirt",
    image: "https://www.defacto.com/en-eg/regular-fit-polo-tisort-2719422",
    productCode: "T7999AZBG280",
  },
  "1694966379-2": {
    url: "https://www.defacto.com/en-eg/man-polo-t-shirts",
    title: "Regular Fit Polo Neck Stripe Detailed Short Sleeve T-Shirt",
    image: "https://dfcdn.defacto.com.tr/7/T7999AZ_23SP_BG280_01_02.jpg",
    productCode: "T7999AZBG280",
  },
  "1694966379-3": {
    url: "https://www.defacto.com/en-eg/man-polo-t-shirts",
    title: "Regular Fit Polo Neck Stripe Detailed Short Sleeve T-Shirt",
    image: "https://dfcdn.defacto.com.tr/7/T7999AZ_23SP_BG280_02_02.jpg",
    productCode: "T7999AZBG280",
  },
  "1694966379-4": {
    url: "https://www.defacto.com/en-eg/man-polo-t-shirts",
    title: "Regular Fit Polo Neck Stripe Detailed Short Sleeve T-Shirt",
    image: "https://dfcdn.defacto.com.tr/7/T7999AZ_23SP_BG280_03_02.jpg",
    productCode: "T7999AZBG280",
  },
  "1694966379-5": {
    url: "https://www.defacto.com/en-eg/man-polo-t-shirts",
    title: "Regular Fit Polo Neck Stripe Detailed Short Sleeve T-Shirt",
    image: "https://dfcdn.defacto.com.tr/7/T7999AZ_23SP_BG280_04_02.jpg",
    productCode: "T7999AZBG280",
  },

};
const randomPrice = () => {
    return 500 + parseInt(Math.random()*5000);
}

const randomRating = () => {
    return parseInt(Math.random()*5)
}

for (let key in men) {
    men[key]['price'] = randomPrice();
    men[key]['rating'] = randomRating();
}

/* console.log(men)
 */

export {men}
