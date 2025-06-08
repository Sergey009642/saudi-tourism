function Przd3Card() {
  return (
    <div className="flex justify-center items-center px-4">
      <div className="flex flex-col gap-4 max-w-[446px] w-full">
        {/* First Card */}
        <div
          className="bg-[url('/przd3Card1.png')] bg-cover bg-center rounded-[40px]
          w-full h-[682px] max-lg:h-[540px] max-md:h-[420px]"
        >
          <div className="flex flex-col justify-between h-full p-6 max-lg:p-4">
            <div>
              <h1 className="text-[36px] max-lg:text-[28px] text-[#fff] font-bold leading-snug">
                Al Qarah Mountain
              </h1>
              <p className="text-[16px] max-lg:text-[14px] text-[#fff] mt-2 leading-relaxed">
                The Mountain’s distractive rocks <br />
                formations inviting adventures to <br />
                explore its hidden treasure.
              </p>
            </div>
            <div className="flex items-center gap-3 mt-auto">
              <img
                src="/przd1Logo2.png"
                alt="mini"
                width={60}
                height={58}
                className="rounded-full"
              />
              <h1 className="text-[17px] max-lg:text-[14px] text-[#fff] font-bold leading-tight">
                Jonatan Pie
                <br />
                Influencer
              </h1>
            </div>
          </div>
        </div>

        {/* Second Card */}
        <div
          className="bg-[url('/przd3Card2.png')] bg-cover bg-center rounded-[40px]
          w-full h-[409px] max-lg:h-[340px] max-md:h-[280px]"
        >
          <div className="flex flex-col justify-between h-full p-6 max-lg:p-4">
            <div>
              <h1 className="text-[36px] max-lg:text-[28px] text-[#fff] font-bold leading-snug">
                The best of Tabuk
              </h1>
              <p className="text-[16px] max-lg:text-[14px] text-[#fff] mt-2 leading-relaxed">
                Taif is a city and governorate in the Makkah <br />
                Region of Saudi Arabia.
              </p>
            </div>
            <div className="flex items-center gap-3 mt-auto">
              <img
                src="/przd3Logo2.png"
                alt="mini"
                width={60}
                height={58}
                className="rounded-full"
              />
              <h1 className="text-[17px] max-lg:text-[14px] text-[#fff] font-bold leading-tight">
                Cristina Gottardi
                <br />
                Traveler
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Przd3Card;
