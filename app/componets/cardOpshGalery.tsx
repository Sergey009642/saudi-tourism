import CardGalery from "./cardGalery";
import CardGalery1 from "./cardGalery1";

function CardOpshiGalery() {
  return (
    <div
      className="flex justify-center items-center px-4 py-12 
        max-xl:px-6 max-xl:py-10 
        max-lg:px-5 max-lg:py-8 
        max-md:px-4 max-md:py-6 
        max-sm:px-3 max-sm:py-4 
        max-[320px]:px-2 max-[320px]:py-3"
    >
      <div
        className="flex flex-col gap-12 max-w-[1440px] w-full
          max-xl:gap-10
          max-lg:gap-8
          max-md:gap-6
          max-sm:gap-4
          max-[320px]:gap-3"
      >
        <CardGalery />
        <CardGalery1 />
      </div>
    </div>
  );
}

export default CardOpshiGalery;
