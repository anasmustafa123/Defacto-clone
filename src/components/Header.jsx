export default function Header() {
  return (
    <>
      <div className="flex justify-between w-full  p-4 h-20 items-center">
        <div className="logo">
          <a href="#j">
            <img
              src="https://dfcdn.defacto.com.tr/AssetsV2/dist/img/de-facto-logo-light-v2.svg"
              alt=""
              width="141"
            />
          </a>
        </div>

        <nav className="defacto-nav">
          <ul className="p-0 m-0 flex ">
            <li className=" mr-5 border-black hover:border-b-2 hover:text-gray-400 hover:border-gray-300">
              <a href="#" className=" no-underline font-bold ">
                WOMEN
              </a>
            </li>
            <li className=" mr-5  hover:border-b-2 hover:text-gray-400 hover:border-gray-300">
              <a href="#" className=" no-underline font-bold  ">
                MEN
              </a>
            </li>
            <li className=" mr-5  hover:border-b-2 hover:text-gray-400 hover:border-gray-300">
              <a href="#" className=" no-underline font-bold  ">
                KIDS
              </a>
            </li>
            <li className=" mr-5  hover:border-b-2 hover:text-gray-400 hover:border-gray-300">
              <a href="#" className=" no-underline font-bold  ">
                BABY
              </a>
            </li>
          </ul>
        </nav>

        <div className=" border border-black flex items-center gap-2 pl-3 pr-3 pt-1 pb-1">
          <i class="text-2xl bx bx-search"></i>
          <input
            className="w-96"
            type="text"
            placeholder="Search: Jean Pants, Basic Body. Moder Fit Shirt Track Suit"
          />
        </div>
        <div className="">
          <nav className="defacto-nav">
            <ul className="p-0 m-0 flex gap-6">
              <li className="flex gap-2 items-center text-xl hover:border-b-2 border-black  hover:text-gray-400 hover:border-gray-300">
                <i class="bx bx-user"></i>
                <a href="#" className=" text-base hover:text-gray-400">
                  Login
                </a>
              </li>

              <li className="flex gap-2 items-center text-xl hover:border-b-2 border-black hover:text-gray-400 hover:border-gray-300">
                <i class="bx bx-heart"></i>
                <a href="#" className="text-base hover:text-gray-400">
                  Favorites
                </a>
              </li>
              <li className="flex gap-2 items-center text-xl hover:border-b-2 border-black hover:text-gray-400 hover:border-gray-300">
                <i class="bx bx-shopping-bag"></i>
                <a href="#" className="text-base hover:text-gray-400">
                  shopping cart
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
