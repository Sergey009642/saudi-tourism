import CardSms from "./cardSms";
import CardSms1 from "./cardSms1";

function CardSmsOpshi() {
  return (
    <div
      className="flex justify-center items-center px-4 py-20 bg-transparent 
        max-xl:px-6 max-xl:py-16 
        max-lg:px-5 max-lg:py-14 
        max-md:px-4 max-md:py-10 
        max-sm:px-3 max-sm:py-8 
        max-[320px]:px-2 max-[320px]:py-6"
    >
      <div
        className="w-full max-w-[1440px] flex flex-col gap-12 
          max-xl:gap-10 
          max-lg:gap-8 
          max-md:gap-6 
          max-sm:gap-5 
          max-[320px]:gap-4"
      >
        {/* Վերնագիր */}
        <div
          className="flex flex-col xl:flex-row justify-between items-center gap-4 px-4 
            max-xl:px-3 
            max-lg:px-2 
            max-sm:px-1"
        >
          <h1
            className="text-[32px] md:text-[40px] lg:text-[45px] text-white font-semibold 
              text-center xl:text-left 
              max-xl:text-[30px] 
              max-lg:text-[28px] 
              max-md:text-[26px] 
              max-sm:text-[24px] 
              max-[320px]:text-[22px]"
          >
            Currency & Payments
          </h1>
          <p className="text-white hidden xl:block">.</p>
        </div>

        {/* Քարտերը */}
        <div
          className="flex flex-col lg:flex-row gap-8 items-center justify-center 
            max-lg:gap-6 
            max-md:gap-5 
            max-sm:gap-4 
            max-[320px]:gap-3"
        >
          <CardSms />
          <CardSms1 />
        </div>
      </div>
    </div>
  );
}

export default CardSmsOpshi;
