function SmiFinalFooter() {
  let arr1 = [
    "Stores",
    "Brand Ambassador",
    "Man Polo T-shirt",
    "Man Jeans",
    "Woman Perfume",
  ];
  let arr2 = [
    "Man T-shirts",
    "Woman Tunics",
    "Woman Trousers",
    "Woman Shirt",
    "Woman Dress",
  ];
  let arr3 = [
    "Woman Skirt",
    "Man Shirt",
    "Man Trousers",
    "Man Jeans",
    "Man Blazer Jacket",
  ];
  let arr4 = [
    "Eid Al Adha Offers",
    "Girl Trousers",
    "Girl Blouse",
    "Back To School",
    "Boy Shirt",
  ];
  let arr5 = [
    "Baby Girl Newborn",
    "Baby Boy Newborn",
    "Boy T-shirt",
    "Woman Blazer Jacket",
    "Woman Accessories",
  ];
  let arr6 = [
    "Modest Dress",
    "Man Perfume",
    "Girl T-shirt",
    "Big Size Collection",
    "Big Size Collection",
  ];
  return (
    <div>
      <div className="max-w-5xl m-auto">
        <h2 className="mb-8 ml-3">TOP CATEGORIES</h2>
        <div className="flex justify-around font-light mb-10">
          <div className="flex flex-col gap-2">
            {arr1.map((v, index) => (
              <p key={index}>{v}</p>
            ))}
          </div >
          <div className="flex flex-col gap-2">
            {arr2.map((v, index) => (
              <p key={index}>{v}</p>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            {arr3.map((v, index) => (
              <p key={index}>{v}</p>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            {arr4.map((v, index) => (
              <p key={index}>{v}</p>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            {arr5.map((v, index) => (
              <p key={index}>{v}</p>
            ))}
          </div >
          <div className="flex flex-col gap-2">
            {arr6.map((v, index) => (
              <p key={index}>{v}</p>
            ))}
          </div>
        </div>
        <div className="flex gap-3 ml-4 ">
          <img
            className="w-30 h-30"
            src="https://dfcdn.defacto.com.tr/Assets/dist/images/secure-logo.png"
            alt=""
          />
          <img
            className="w-11 h-11"
            src="https://dfcdn.defacto.com.tr/Assets/dist/images/Mastercard%20ID%20Check.png"
            alt=""
          />
          <img
            className=" w-10 h-10"
            src="https://dfcdn.defacto.com.tr/Assets/dist/images/Mastercard.png"
            alt=""
          />
          <img
            className="w-9 h-9"
            src="https://dfcdn.defacto.com.tr/Assets/dist/images/Visa%20Secure.png"
            alt=""
          />
          <img
            className="w-10 h10"
            src="https://dfcdn.defacto.com.tr/Assets/dist/images/Visa_Logo_600x290.png"
            alt=""
          />
          <img
            className="w-10 h-10"
            src="https://dfcdn.defacto.com.tr/Assets/dist/images/paytabs-new-en.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
export default SmiFinalFooter;
