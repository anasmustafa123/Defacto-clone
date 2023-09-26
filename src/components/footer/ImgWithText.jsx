export default function ImgWithText({singleData, id}) {
  return (
    <div key={id}>
      <div className="inline-flex">
        <img src={singleData.imgUrl} alt="" />
        <div className="ml-3">
          <h1 className="font-semibold">{singleData.header}</h1>
          <p className="font-light">{singleData.smallHeader}</p>
        </div>
      </div>
    </div>
  );
}
