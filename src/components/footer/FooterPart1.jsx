import ImgWithText from "./ImgWithText";
import Info from "./Info";
let imgWithText = [
  {
    imgUrl:
      "https://dfcdn.defacto.com.tr/AssetsV2/dist/img/footer/magazadanteslimal.svg",
    header: "Click&Collect From Store ",
    smallHeader: "Free Cargo",
  },
  {
    imgUrl:
      "https://dfcdn.defacto.com.tr/AssetsV2/dist/img/footer/kapidaodeme.svg",
    header: "cash on delivery",
    smallHeader: "Cash on delivery fee is 15 EGP",
  },
  {
    imgUrl:
      "https://dfcdn.defacto.com.tr/AssetsV2/dist/img/footer/magazadandegisim.svg",
    header: " Product Replacement at Store",
    smallHeader: "buy online, change in store",
  },
  {
    imgUrl: "https://dfcdn.defacto.com.tr/AssetsV2/dist/img/footer/iade.svg",
    header: "Easy & Free Return via Aramex ",
    smallHeader: "Return Within 30 Days",
  },
];
let info = [
  {
    arrayHeader: "Corporate Information",
    arrayData: ["DeFacto", "About Us", "Human Resources"],
  },
  {
    arrayHeader: "Help",
    arrayData: [
      "Frequently Asked Questions",
      "Return And Changes",
      "iconOrder Tracking",
      " iconHow to shop on DeFacto?",
      " How to pay on DeFacto?",
      "Conditions of competition",
    ],
  },
  {
      arrayHeader: "Contact Us",
      arrayData: [
        "Contact Form",
        "Customer Services",
        "WhatsApp +2010 334 558 58",
      ],
    },
  {
      arrayHeader: "Social Media",
      arrayData: [],
    },
];

function FooterPart1() {
  return (
    <div className="flex gap-14 justify-between p-3 max-w-7xl m-auto flex-col">
      <div className="flex flex-col items-start justify-center m-auto gap-4 md:flex-row md:items-center">
        {[...Array(4)].map((v, i) => (
          <ImgWithText singleData={imgWithText[i]} id={i} />
        ))}
      </div>
      <div className="flex flex-col items-start justify-center m-auto gap-4 lg:gap-12 lg:flex-row  md:items-start">
        {[...Array(4)].map((v, i) => (
          <Info singleData={info[i]} id={i} />
        ))}
      </div>
      
      

      {/* <div className="flex flex-col items-start justify-center m-auto gap-4 md:items-start">
        {[...Array(4)].map((v, i) => (
          <Info singleData={info[i]} id={i} />
        ))}
      </div> */}
      

    

    </div>
  );
}

export default FooterPart1;
