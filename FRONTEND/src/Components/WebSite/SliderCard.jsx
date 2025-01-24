import Stars from "./Stars";
export default function SliderCard({icon,price,title,rating}) {
  return (
    <>
      <div className="flex justify-center items-center p-10">
        <img src={icon} alt="productImage" />
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-semibold">{title}</h1>
          <span><Stars rating={rating}/></span>
          <p>{price}</p>
        </div>
      </div>
    </>
  );
}
