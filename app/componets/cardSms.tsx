function CardSms() {
  return (
    <div
      className="flex justify-center items-center px-4 py-10 
        max-xl:px-6 max-xl:py-8 
        max-lg:px-5 max-lg:py-6 
        max-md:px-4 max-md:py-4 
        max-sm:px-3 max-sm:py-3 
        max-[320px]:px-2 max-[320px]:py-2"
    >
      <div className="flex flex-col w-full max-w-[742px]">
        <div
          className="bg-gradient-to-tr from-[#0a0a0a] to-[#1a1a1a] rounded-[24px] w-full h-auto 
            p-6 md:p-10 
            max-xl:p-5 
            max-lg:p-4 
            max-md:p-3 
            max-sm:p-2 
            max-[320px]:p-2"
        >
          <div className="flex justify-center items-center">
            <div className="flex flex-col gap-6">
              <h1
                className="text-[28px] md:text-[32px] lg:text-[40px] font-semibold text-white 
                  text-center md:text-left 
                  max-xl:text-[26px]
                  max-lg:text-[24px]
                  max-md:text-[22px]
                  max-sm:text-[20px]
                  max-[320px]:text-[18px]"
              >
                Currency Exchange
              </h1>

              <p
                className="text-white text-[18px] md:text-[22px] lg:text-[28px] leading-relaxed 
                  text-center md:text-left
                  max-xl:text-[16px]
                  max-lg:text-[15px]
                  max-md:text-[14px]
                  max-sm:text-[13px]
                  max-[320px]:text-[12px]"
              >
                You can send or receive money in Saudi <br />
                Arabia by transferring funds online or <br />
                through a bank that offers fast money <br />
                transfer services, all of which are subject <br />
                to the rules and regulations of the Saudi <br />
                Arabian Monetary Authority.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardSms;
