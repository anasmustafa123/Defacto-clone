import ImageSlider from "../components/clothes-page/ImageSlider";
import Trends from "../components/clothes-page/Trends";
export default function Women({ bg, setbg }) {
  function toggle(){
    if(bg == 'white'){
      setbg('black')
    }else{
      setbg('white')
    }
  }
  let s = {
    backgroundColor: bg,
  };
  let trends = {
    headerName: "TRENDS",
    imgs: [
      {
        name: "img1",
        url: "https://dfcdn.defacto.com.tr/Mobile/en_athlete_ba16818c-9e0a-4fcc-ae14-c10c472d96c5_737174f1-83b7-40cd-81f8-96ffbb5b4706_DI_365.jpg",
      },
      {
        name: "img2",
        url: "https://dfcdn.defacto.com.tr/Mobile/en_denim_cd2697d6-53c7-48a5-9417-a456d0d67c7c_36dc3487-26f9-4dfc-b36f-c8b700ec8e7d_DI_365.jpg",
      },
      {
        name: "img3",
        url: "https://dfcdn.defacto.com.tr/Mobile/en_tunic_88f02b61-5691-4cb2-afcb-55554f3775dc_da6ebedf-9b0f-4e1a-a4b0-c3be5cf016e1_DI_365.jpg",
      },
      {
        name: "img4",
        url: "https://dfcdn.defacto.com.tr/Mobile/en_woman_blazer_0a493e95-9dd7-438a-a5fc-d879b2161a74_485f89c9-07e9-4db6-8514-20c45ed2956e_DI_365.jpg",
      },
    ],
  };
  let bestPrices = {
    headerName: "BEST PRICES",
    imgs: [
      {
        name: "img1",
        url: "https://dfcdn.defacto.com.tr/Mobile/misir_en_t-shirt_d81a9426-6977-4d88-98d6-e65827808dcb_f15fb16d-bbeb-4b84-8fac-2e06892f1712_DI_365.jpg",
      },
      {
        name: "img2",
        url: "https://dfcdn.defacto.com.tr/Mobile/misir_en_dress_28afc396-2cb4-4d32-8e1d-34d57101bd55_b488b705-9336-4999-a3e4-a459d5817d17_DI_365.jpg",
      },
      {
        name: "img3",
        url: "https://dfcdn.defacto.com.tr/Mobile/misir_en_trousers_9ccd1da7-99d7-4dbe-b8a9-0c78cb965f4a_425f1f3b-8297-476b-b232-5cd9543c280d_DI_365.jpg",
      },
      {
        name: "img4",
        url: "https://dfcdn.defacto.com.tr/Mobile/misir_en_shirt_6de32493-7a9e-4705-9002-6e3a812c793b_cdcab25e-9eda-4e87-895a-95686797a2a7_DI_365.jpg",
      },
    ],
  };
  let accessories = {
    headerName: "ACCESSORY & FOOTWEAR",
    imgs: [
      {
        name: "img1",
        url: "https://dfcdn.defacto.com.tr/Mobile/en_bag-belt-wallet__fb3ebe5b-12ef-4a86-aa55-ec310a98b3c9_136385f0-cf7a-4628-9dae-558aa47f9173_DI_365.jpg",
      },
      {
        name: "img2",
        url: "https://dfcdn.defacto.com.tr/Mobile/en_hat-shawl_ff9d4e4e-d2fd-40ac-bb41-c5eb8d3f077e_387a3f87-29d3-4222-9444-99efc1f38dba_DI_365.jpg",
      },
      {
        name: "img3",
        url: "https://dfcdn.defacto.com.tr/Mobile/woman_en_footwear_cc2ee3de-edec-4e80-888e-9440b98664fd_9f8430e8-ed5a-4c12-9d83-6cc43855826a_DI_365.jpg",
      },
      {
        name: "img4",
        url: "https://dfcdn.defacto.com.tr/Mobile/en_socks-50-net-off_5904f5bb-07cb-4349-ab4d-2f5326d4b89d_d6411cc1-c9cb-451b-80da-39e797ce5277_DI_365.jpg",
      },
    ],
  };
  return (
    <div style={s} className="flex flex-col gap-12 pt-12">
      <ImageSlider />
      <div className="flex justify-center">
        <img
          className="w-4/5"
          src="https://dfcdn.defacto.com.tr/Mobile/en_woman_imageor_desktop_5fe496f2-5fdf-4cac-8ef3-3da23e4a88cb_850222c2-1b72-48c4-8c96-1c4781a6e95e_DI_429.jpg"
          alt=""
        />
      </div>
      <div className="flex justify-center">
        <img
          className="w-4/5"
          src="https://dfcdn.defacto.com.tr/Mobile/en_1_imageor_desktop_d3b88bb0-0ef1-447e-84c1-7d6d1550be16_3c6764f8-4804-4b02-8705-7aab5351d003_DI_429.jpg"
          alt=""
        />
      </div>
      <Trends data={trends} />
      <div className="flex justify-center">
        <img
          className="w-9/12"
          src="https://dfcdn.defacto.com.tr/Mobile/en_imageor_desktop_3ffcaa19-5746-42b7-bee5-0a4fcb33fbbc_c5b4d921-dbeb-434a-9678-4885ee6e2621_DI_429.jpg"
          alt=""
        />
      </div>
      <Trends data={bestPrices} />
      <div className="flex justify-center">
        <img
          className="w-8/12"
          src="https://dfcdn.defacto.com.tr/Mobile/en_simple-modest-elegance_1320x622-desktop_909b69e7-cb2b-4eb7-bcd6-a2e1d79d5c7c_db861d7d-6442-42ce-a5bd-d049464b98f1_DI_429.jpg"
          alt=""
        />
      </div>
      <Trends data={accessories} />
      <button
        onClick={toggle}
      >
        click me
      </button>
    </div>
  );
}
