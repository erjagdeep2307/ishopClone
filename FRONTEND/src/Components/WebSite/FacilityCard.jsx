import Stars from "./Stars";

export default function FacilityCard({icon,title,content}) {
  // const rating=4;
  return (
    <>
        <div className="rounded p-4 flex flex-col gap-2 justify-center items-center text-center">
            <img src={icon} alt="Shipping Image" />
            <h1 className="font-semibold text-xl uppercase">{title}</h1>
            <p>{content}</p>
        </div>
    </>
  )
}
