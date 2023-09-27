import React, { useState } from "react";

export const Sto = () => {
  const [City, setCity] = useState("Al Menofiah");

  const stores = [
    "Select All",
    "ALEXANDRIA AGAMY MALL",
    "ALEXANDRIA CITY CENTER MALL",
    "ALEXANDRIA GREEN PLAZA MALL",
    "ALEXANDRIA SAN STEFANO MALL",
    "CAIRO ABBAS EL AKKAD STR",
    "CAIRO ALMAZA CITY CENTER MALL",
    "CAIRO CITYSTARS MALL",
    "CAIRO DANDY MEGA MALL",
    "CAIRO FESTIVAL CITY MALL",
    "CAIRO LEBANON STR",
    "CAIRO MALL OF EGYPT MALL",
    "CAIRO MAXIM MALL",
    "CAIRO MOKATTAM STR",
    "CAIRO ROXY STR",
    "CAIRO SKY MALL",
    "CAIRO TOWN CENTER MALL",
    "GIZA DOQI MELOUK STR",
    "GIZA HARAM STR OUTLET",
    "GIZA MALL OF ARAPIA MALL",
    "GIZA MALL OF ARAPIA MALL NEW",
  ];

  const play = [
    "Select All",
    "Dakahlia",
    "Al Menofiah",
    "Alexandria",
    "Cairo",
    "Giza",
    "Qaliubia",
    "Tanta",
  ];

  function cityCard(city_name) {
    return (
      <div class="flex m-1 group" onClick={() => setCity(city_name)}>
        <div class="bg-slate-100 w-28 py-3 text-center border group-hover:border-black">
          <p>{city_name}</p>
        </div>
        <div class="bg-slate-300 text-black w-8 py-3 text-center group-hover:bg-black group-hover:text-white">
          <p>1</p>
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col md:flex-row ">
      <div className="m-8">
        <h1 className=" font-semibold">CUSTOMER SERVICES</h1>
        <p>New Membership</p>
        <p>How to shop on DeFacto? </p>
        <p>How to pay on DeFacto? </p>
        <p>Returns & Changes </p>
        <p>Payment Options </p>
        <p>Shipment and Delivery </p>
        <p>Click & Collect From Store </p>
        <p>Cash On Delivery </p>
        <p>Order Tracking </p>
        <p>Privacy Policy </p>
        <p>Conditions of competition </p>
      </div>
      <div className=" border p-5 m-8  w-full ">
        <h3 className=" font-semibold mb-4">OUR STORES</h3>
        <div className=" flex justify-start gap-5 flex-wrap ">
          <div className="w-1/4">
            <p className="text-[11px] text-zinc-400 ml-6 -mb-6 relative z-10">
              City
            </p>
            <select className=" border-b-2 !active:border-none w-full p-3 m-3 ">
              {play.map((play) => (
                <option>{play}</option>
              ))}
            </select>
          </div>
          <div className="w-1/4">
            <p className=" text-[11px] text-zinc-400 ml-6 -mb-6 relative z-10 ">
              District
            </p>
            <select className="border-b-2 active:border-none w-full p-3 m-3">
              <option>Select All</option>
            </select>
          </div>

          <div className="w-1/4">
            <p className="text-[11px] text-zinc-400 ml-6 -mb-6 relative z-10">
              Store
            </p>
            <select className="border-b-2 ! active:border-none w-full p-3 m-3  ">
              {stores.map((store) => (
                <option>{store}</option>
              ))}
            </select>
          </div>
        </div>
        <div className=" md:w-full w-60">
          <h3 className=" font-semibold">جمهوريه مصر العربيه/ALL STORES </h3>
          <p>We have 26 stores at جمهوريه مصر العربيه</p>

          {/* alex */}
          {City === "Alexandria" && (
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41119.37455674495!2d29.917571526242185!3d31.245421226337815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c57367e76367%3A0x178318efd40da410!2sDefacto%20store!5e0!3m2!1sen!2seg!4v1695763274783!5m2!1sen!2seg"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="w-full"
            ></iframe>
          )}

          {/* Al Menofiah */}
          {City === "Al Menofiah" && (
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3435.3117650101785!2d31.004719375664894!3d30.568743274663635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7d74bd66cb87d%3A0xb5140f609dad0d3b!2zRGVmYWN0byBTaG9wINmB2LHYuSDYr9mK2YHYp9mD2KrZiCDYtNio2YrZhg!5e0!3m2!1sen!2seg!4v1695763615191!5m2!1sen!2seg"
              className="w-full"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          )}

          {/* cairo */}
          {City === "Cairo" && (
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d440458.11280685436!2d30.988238734514585!3d30.405500237123313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583e6f259cf819%3A0x2f8f99416c8df5a5!2sDeFacto!5e0!3m2!1sen!2seg!4v1695763713993!5m2!1sen!2seg"
              className="w-full"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          )}

          {/* Dakahlia */}
          {City === "Dakahlia" && (
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d219022.27843015885!2d31.040744760408277!3d30.93633297845519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f79dd2c91a7c37%3A0x3e4ee0c8da2ebd17!2sDeFacto%20Mansoura%20Downtown%20Mall!5e0!3m2!1sen!2seg!4v1695763784923!5m2!1sen!2seg"
              className="w-full"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          )}

          {/* giza */}
          {City === "Giza" && (
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110553.52820247269!2d31.005678591419375!3d30.013963085187072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145846cc14e07c3b%3A0x273d4a882e038952!2sDe%20Facto!5e0!3m2!1sen!2seg!4v1695763826706!5m2!1sen!2seg"
              className="w-full"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          )}

          {/* Qaliubia */}
          {City === "Qaliubia" && (
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110373.56998525244!2d31.323665597265624!3d30.175021400000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14581a58e247aab3%3A0xb21f75f66b53ef3d!2sDeFacto!5e0!3m2!1sen!2seg!4v1695763889642!5m2!1sen!2seg"
              className="w-full"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          )}

          {/* tanta */}
          {City === "Tanta" && (
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27410.20041528338!2d30.9997812497336!3d30.82295822058321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7b77f6fbf3983%3A0x925d797738e922c8!2sDefacto!5e0!3m2!1sen!2seg!4v1695763944446!5m2!1sen!2seg"
              className="w-full"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          )}
        </div>
        <div>
          <div className="flex m-2 flex-wrap ho">
            {cityCard("Al Menofiah")}
            {cityCard("Alexandria")}
            {cityCard("Cairo")}
            {cityCard("Dakahlia")}
            {cityCard("Giza")}
            {cityCard("Qaliubia")}
            {cityCard("Tanta")}
          </div>
        </div>
      </div>
    </div>
  );
};
