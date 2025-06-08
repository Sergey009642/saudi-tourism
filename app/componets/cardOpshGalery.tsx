import CardGalery from "./cardGalery";
import CardGalery1 from "./cardGalery1";

function CardOpshiGalery() {
  return (
    <div className="flex justify-center items-center px-4 py-12">
      <div className="flex flex-col gap-12 max-w-[1440px] w-full">
        <CardGalery />
        <CardGalery1 />
      </div>
    </div>
  );
}

export default CardOpshiGalery;
