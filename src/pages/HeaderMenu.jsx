import React from "react";

export const HeaderMenu = () => {
  return (
    <div className="hidden bg-white group-hover:flex w-screen items-center justify-center">
      <div className=" w-52 ml-60 mt-14 p-6">
        <div className=" w-5 font-semibold ">TRENDS</div>
        <div className=" flex py-3">
          <div className="menu__main--item-link-img relative">
            <img src="https://dfcdn.defacto.com.tr/ResponsiveFashion/menuler/yenidesktop/woman_46x46/5.Hat_woman_46x46.png" />
          </div>
          <div className=" py-3 ml-3">Hat</div>
        </div>

        <div className="flex py-3">
          <div className="menu__main--item-link-img relative">
            <img src="https://dfcdn.defacto.com.tr/ResponsiveFashion/menuler/yenidesktop/trends/woman/perfume.png" />
          </div>
          <div className=" py-3 ml-3">Perfume 30%</div>
        </div>

        <div className="flex py-3">
          <div className="menu__main--item-link-img relative">
            <img src="https://dfcdn.defacto.com.tr/ResponsiveFashion/menuler/yenidesktop/trends/woman/bag.png" />
          </div>
          <div className=" py-3 ml-3">Bag</div>
        </div>

        <div className=" flex py-3">
          <div class="menu__main--item-link-img relative">
            <img src="https://dfcdn.defacto.com.tr/ResponsiveFashion/menuler/yenidesktop/woman_46x46/7.Shoes_woman_46x46.png" />
          </div>
          <div className=" py-3 ml-3">Shoes</div>
        </div>

        <div className="flex py-3">
          <div class="menu__main--item-link-img relative">
            <img src="https://dfcdn.defacto.com.tr/ResponsiveFashion/menuler/yenidesktop/woman_46x46/6.Belt_woman_46x46.png" />
          </div>
          <div className=" py-3 ml-3">Belt</div>
        </div>
      </div>

      <div className="border-l ml-4 w-48 mt-14 p-6">
        <div className=" font-semibold">Accessories</div>
        <div className=" py-3 flex flex-col gap-3">
          <p>Show ALL</p>
          <p>New Arrivals</p>
          <p>Perfume 30%</p>
          <p>Socks Net 50%</p>
          <p>Shawl</p>
          <p>Bag</p>
          <p>Belt</p>
          <p>Hat</p>
          <p>Shoes</p>
          <p>Show All</p>
          <p>New</p>
          <p>Shoes</p>
          <p>Slippers</p>
          <p>Home Slippers</p>
        </div>
      </div>

      <div className=" border-l ml-4 w-60 mt-14 p-6">
        <div className=" font-semibold">SPECIAL COLLECTIONS</div>
        <div className="flex gap-4">
          <div className=" py-4">
            <div class="menu__main--item-link-img">
              <img src="https://dfcdn.defacto.com.tr/ResponsiveFashion/menuler/yenidesktop/3.Backpack_woman_o%E2%95%A0%C3%AAzel_koleksiyon_87x94.jpg" />
            </div>
            <div>Backpacks/...</div>
          </div>

          <div className=" py-4">
            <div class="menu__main--item-link-img">
              <img src="https://dfcdn.defacto.com.tr/ResponsiveFashion/menuler/yenidesktop/Special%20collection/woman/socks_87x94.jpg" />
            </div>
            <div>Socks Net 50%</div>
          </div>
        </div>

        <div className=" flex ">
          <div>
            <div class="menu__main--item-link-img">
              <img src="https://dfcdn.defacto.com.tr/ResponsiveFashion/menuler/yenidesktop/Special%20collection/woman/bag_87x94.jpg" />
            </div>
            <div>Strow Collection</div>
          </div>

          <div>
            <div class="menu__main--item-link-img">
              <img src="https://dfcdn.defacto.com.tr/ResponsiveFashion/menuler/yenidesktop/Special%20collection/woman/modest_87x94.jpg" />
            </div>
            <div>Shawl</div>
          </div>
        </div>
      </div>
    </div>
  );
};
