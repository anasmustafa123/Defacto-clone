export default function ShoppingCart() {
  return (
    <div className="p-3 max-w-md bg-white min-h-screen">
      <div className="flex justify-between mb-5">
        <h1 className="text-xl font-semibold">Basket (0)</h1>
        <i class="text-4xl bx bx-x"></i>
      </div>
      <div className="text-center">
        <i class="text-9xl bx bx-shopping-bag"></i>
      </div>
      <p className="text-center font-semibold mb-4">
        No products in your basket.
      </p>
      <p className="mb-5">
        You can start shopping right away by checking the suggestions below, or
        you can discover DeFacto with the category links.
      </p>
      <div className="flex flex-col gap-4">
        <button className=" border-2 border-gray-600 pt-3 pb-3 rounded-lg">OUR SELECTION FOR YOU</button>
        <button className=" border-2 border-gray-600 pt-3 pb-3 rounded-lg">SEASON SALE</button>
        <button className=" border-2 border-gray-600 pt-3 pb-3 rounded-lg">START SHOPPING</button>
      </div>
    </div>
  );
}
