import { useState } from "react";
function FooterPart2() {
  let [isClicked, setIsClicked] = useState(null);
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="mb-2 font-medium text-lg">JOIN THE FUN!</h1>
      <p className="mb-9 font-normal ">
        Subscribe to our newsletter and get 10% off your first purchase!
      </p>
      <p className="mb-3">Who are you shopping for?</p>
      <div className="mb-7">
        <div className="flex justify-center gap-3 mb-7">
          <button
            onClick={() => {
              setIsClicked("f");
            }}
            className={
              " p-2 font-normal border-2" +
              " " +
              (isClicked == "f" && "bg-black text-white")
            }
          >
            Female
          </button>
          <button
            onClick={() => {
              setIsClicked("m");
            }}
            className={
              "p-2 font-normal border-2" +
              " " +
              (isClicked == "m" && "bg-black text-white")
            }
          >
            Male
          </button>
          <button
            onClick={() => {
              setIsClicked("k");
            }}
            className={
              "p-2 font-normal border-2" +
              " " +
              (isClicked == "k" && "bg-black text-white")
            }
          >
            Kids
          </button>
        </div>
        <div className="flex gap-3">
          <input id="email" name="email" placeholder="E-mail adress" />
          <button className="p-2 font-normal border-2 flex-row bg-black text-white hover:bg-white hover:text-black">
            Subscribe Now!
          </button>
        </div>
      </div>
      <div className="flex mr-1 gap-4">
        <input type="checkbox" />
        <p>I accept the confidenciality policy</p>
      </div>
    </div>
  );
}
export default FooterPart2;
