import ProductView from "./ProductView";
export default function ProductsView({ gridCol, id = 0, data }) {
  let gridColsNum = `grid-cols-${gridCol}`;
  return (
    <div
      key={id}
      className={
        "grid justify-items-center justify-center  gap-1 grid-cols-4" + " " + gridColsNum
      }
    >
      {data.map((singleData, index) => (
        <>
          <ProductView singleData={singleData} id={index} />
        </>
      ))}
    </div>
  );
}
