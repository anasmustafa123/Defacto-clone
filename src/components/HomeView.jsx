import { Link } from "react-router-dom";
function HomeView({ setGenderChoosed }) {
  return (
    <div className="flex flex-col sm:flex-row overflow-hidden mt-6">
      <Link
        onClick={() => {
          setGenderChoosed(1);
        }}
        to="/women"
        className="relative group  cursor-pointer w-full overflow-hidden"
      >
        <img
          src="https://dfcdn.defacto.com.tr/Mobile/woman_desktop_240e37ff-b1c6-4e53-aef7-9e64ec86b93c_e94d07a3-862e-4895-b03f-00e26e33ec69_DI_316.jpg"
          alt=""
          className="group-hover:scale-125 transition duration-500 "
        />
        <div
          style={{
            transform: "translate(-50%, -50%)",
            left: "50%",
            top: "50%",
          }}
          className="absolute border-2 border-white bg-black bg-opacity-50
                        pl-9 pr-9 pt-1 pb-1
                        text-2xl  text-white
                        "
        >
          WOMAN
        </div>
      </Link>

      <Link
        onClick={() => {
          setGenderChoosed(2);
        }}
        to="/men"
        className="relative group cursor-pointer w-full overflow-hidden"
      >
        <img
          src="https://dfcdn.defacto.com.tr/Mobile/man_desktop_2dee15c5-4e62-43dd-81e5-98e79e154320_23382aef-776e-48c4-9467-9204747f81d6_DI_316.jpg"
          alt=""
          className="group-hover:scale-125 transition duration-500"
        />

        <div
          style={{
            transform: "translate(-50%, -50%)",
            left: "50%",
            top: "50%",
          }}
          className="absolute border-2 border-white bg-black bg-opacity-50
                        pl-9 pr-9 pt-1 pb-1
                        text-2xl  text-white
                        "
        >
          MAN
        </div>
      </Link>

      <Link
        onClick={() => {
          setGenderChoosed(3);
        }}
        to="/kids"
        className="relative group cursor-pointer w-full overflow-hidden"
      >
        <img
          src="https://dfcdn.defacto.com.tr/Mobile/kids_desktop_121105e5-62e0-4a9a-8425-61c858b2e86f_2b34bdd6-b080-41bb-82fa-a9b6eb1a7ebb_DI_316.jpg"
          alt=""
          className="group-hover:scale-125 transition duration-500"
        />

        <div
        
        style={{
          transform: "translate(-50%, -50%)",
          left: "50%",
          top: "50%",
        }}
          className="absolute border-2 border-white bg-black bg-opacity-50
                        pl-9 pr-9 pt-1 pb-1
                        text-2xl  text-white
                        top-1/2 left-1/2">
          KIDS&BABY
        </div>
      </Link>
    </div>
  );
}
export default HomeView;
