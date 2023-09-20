export default function Info({singleData, id}) {
  return (
    <div key={id}>
      <h1 className="font-semibold">{singleData.arrayHeader}</h1>
      <div className="flex flex-col gap-2 font-light mt-2 ">
        {singleData.arrayData.map((value, index) => (
          <p
            className="cursor-pointer hover:underline hover:text-gray-500"
            key={index}
          >
            {value}
          </p>
        ))}
      </div>
    </div>
  );
}
