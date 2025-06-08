function CardSms() {
  return (
    <div className="flex justify-center items-center px-4 py-10">
      <div className="flex flex-col w-full max-w-[742px]">
        <div className="bg-gradient-to-tr from-[#0a0a0a] to-[#1a1a1a] rounded-[24px] w-full h-auto p-6 md:p-10">
          <div className="flex justify-center items-center">
            <div className="flex flex-col gap-6">
              <h1 className="text-[28px] md:text-[32px] lg:text-[40px] text-white font-semibold text-center md:text-left">
                Currency Exchange
              </h1>
              <p className="text-white text-[18px] md:text-[22px] lg:text-[28px] leading-relaxed text-center md:text-left">
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
