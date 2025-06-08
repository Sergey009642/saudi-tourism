function Przd1Card() {
  return (
    <div className="flex justify-center items-center px-4">
      <div className="flex flex-col gap-6 max-w-[456px] w-full">
        {/* First card */}
        <div
          className="bg-[url('/przd1Card1.png')] bg-cover bg-center rounded-[40px] 
          w-full h-[672px] max-lg:h-[500px] max-md:h-[400px]"
        >
          <div className="flex flex-col justify-between h-full p-6 max-lg:p-4">
            <div>
              <h1 className="text-[36px] max-lg:text-[28px] text-[#fff] font-bold">Hisma Desert</h1>
              <p className="text-[16px] max-lg:text-[14px] text-[#fff] mt-2 leading-relaxed">
                The Hisma desert is a true marvel of <br />
                nature, and several desert oasis.
              </p>
            </div>
            <div className="flex items-center gap-3 mt-auto">
              <img
                src="/przd1Logo1.png"
                alt="mini"
                width={60}
                height={58}
                className="rounded-full"
              />
              <h1 className="text-[17px] max-lg:text-[14px] text-[#fff] font-bold leading-tight">
                Wazeem Al Mulk
                <br />
                Traveler
              </h1>
            </div>
          </div>
        </div>

        {/* Second card */}
        <div
          className="bg-[url('/przd1Card2.png')] bg-cover bg-center rounded-[40px] 
          w-full h-[420px] max-lg:h-[320px] max-md:h-[280px]"
        >
          <div className="flex flex-col justify-between h-full p-6 max-lg:p-4">
            <div>
              <h1 className="text-[36px] max-lg:text-[28px] text-[#fff] font-bold">The best of Tabuk</h1>
              <p className="text-[16px] max-lg:text-[14px] text-[#fff] mt-2 leading-relaxed">
                Tabuk also spelled Tabouk, the capital city of the <br />
                Tabuk Region in northwestern Saudi Arabia.
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
      </div>
    </div>
  );
}

export default Przd1Card;
