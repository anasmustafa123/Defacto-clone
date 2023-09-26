import { Link } from "react-router-dom";
export default function Trends({ data, query }) {
  return (
    <div>
      <h1 className="text-2xl font-semibold pl-3">{data["headerName"]}</h1>
      <div className="flex" style={{ height: "40rem" }}>
        {data["imgs"].map((img, index) => (
          <Link
            to={query + ";category:"+img["category"]}
            key={index}
            className="w-1/4 bg-cover"
            style={{ backgroundImage: `url(${img.url})`, height: "40rem" }}
            alt={img.name}
          ></Link>
        ))}
      </div>
    </div>
  );
}
