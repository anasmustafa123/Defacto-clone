import React from "react";

export const Sto = () => {
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
      <div class="flex m-1 group">
        <div class="bg-slate-100 w-28 py-3 text-center border group-hover:border-black dark:text-white">
          <p>{city_name}</p>
        </div>
        <div class="bg-slate-300 text-black w-8 py-3 text-center group-hover:bg-black group-hover:text-white dark:text-white">
          <p>1</p>
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col md:flex-row dark:text-white md:items-start items-center">
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
            <p className="text-xl text-zinc-400 ml-6 -mb-3 relative z-10 dark:text-white">
              City
            </p>
            <select className=" border-b-2 !active:border-none w-full p-3 m-3 dark:bg-stone-600">
              {play.map((play) => (
                <option>{play}</option>
              ))}
            </select>
          </div>
          <div className="w-1/4">
            <p className="text-xl text-zinc-400 ml-6 -mb-3 relative z-10 dark:text-white">
              District
            </p>
            <select className="border-b-2 active:border-none w-full p-3 m-3 dark:bg-stone-600 ">
              <option>Select All</option>
            </select>
          </div>

          <div className="w-1/4">
            <p className="text-xl text-zinc-400 ml-6 -mb-3 relative z-10 dark:text-white">
              Store
            </p>
            <select className="border-b-2 ! active:border-none w-full p-3 m-3 dark:bg-stone-600 ">
              {stores.map((store) => (
                <option>{store}</option>
              ))}
            </select>
          </div>
        </div>
        <div className=" md:w-full w-3/4">
          <h3 className=" font-semibold">جمهوريه مصر العربيه/ALL STORES </h3>
          <p>We have 26 stores at جمهوريه مصر العربيه</p>
          <iframe
            className="w-60  md:w-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d874323.6119730456!2d31.465105616895407!3d31.128443102191298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145875f6592ee989%3A0xa0f7a3872335c0ce!2z2KjZhtmH2KfYjCDZgtiz2YUg2KjZhtmH2KfYjCDYqNmG2YfYp9iMINin2YTZgtmE2YrZiNio2YrYqQ!5e0!3m2!1sar!2seg!4v1694990736984!5m2!1sar!2seg"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="dark:text-black">
          <div className="flex m-2 flex-wrap dark:text-black ">
            
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
