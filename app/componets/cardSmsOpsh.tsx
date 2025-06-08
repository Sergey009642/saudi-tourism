import CardSms from "./cardSms";
import CardSms1 from "./cardSms1";

function CardSmsOpshi() {
  return (
    <div className="flex justify-center items-center px-4 py-20 bg-transparent">
      <div className="w-full max-w-[1440px] flex flex-col gap-12">
        {/* Վերնագիր */}
        <div className="flex flex-col xl:flex-row justify-between items-center gap-4 px-4">
          <h1 className="text-[32px] md:text-[40px] lg:text-[45px] text-white font-semibold text-center xl:text-left">
            Currency & Payments
          </h1>
          <p className="text-white hidden xl:block">.</p>
        </div>

        {/* Քարտերը */}
        <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">
          <CardSms />
          <CardSms1 />
        </div>
      </div>
    </div>
  );
}

export default CardSmsOpshi;
