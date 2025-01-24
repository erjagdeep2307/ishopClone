import Stars from "./Stars";
export default function ProductBox({
  image,
  title,
  price,
  discount,
  rating,
  hot,
}) {
  return (
    <div className="border-2 rounded flex flex-col justify-center items-center p-3 relative">
      {hot && <span className="absolute top-2 left-2 uppercase rounded-md bg-red-600 text-white px-2 text-sm">hot</span>}
      <div className="p-3">
        <img src={image} className="h-full" alt="" />
      </div>
      <div className="border-t-2 p-3 flex flex-col gap-3">
        <span>{title}</span>
        <span><Stars rating={rating}/></span>
        <div className="flex justify-between">
          <span>${discount}</span>
          <span className="line-through text-gray-300">${price}</span>
        </div>
      </div>
    </div>
  );
}
