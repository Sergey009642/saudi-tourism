function Przd2Card() {
  return (
    <div className="flex justify-center items-center px-4">
      <div className="flex flex-col gap-6 max-w-[390px] w-full">
        {/* First card */}
        <div
          className="bg-[url('/przd2Card1.png')] bg-cover bg-center rounded-[40px]
          w-full h-[380px] max-lg:h-[320px] max-md:h-[260px]"
        >
          <div className="flex flex-col justify-between h-full p-6 max-lg:p-4">
            <div>
              <h1 className="text-[36px] max-lg:text-[28px] text-[#fff] font-bold leading-snug">
                Kafd World Trade <br /> Centre, Riyadh.
              </h1>
              <p className="text-[16px] max-lg:text-[14px] text-[#fff] mt-2 leading-relaxed">
                The Towering Structure stands as a <br />
                testament to Saudi Arabia’s vision for <br />
                a thriving business hub.
              </p>
            </div>
            <div className="flex items-center gap-3 mt-auto">
              <img
                src="/przd2Logo1.png"
                alt="mini"
                width={60}
                height={58}
                className="rounded-full"
              />
              <h1 className="text-[17px] max-lg:text-[14px] text-[#fff] font-bold leading-tight">
                Benjamin Voros
                <br />
                Traveler
              </h1>
            </div>
          </div>
        </div>

        {/* Second card */}
        <div
          className="bg-[url('/przd2Card2.png')] bg-cover bg-center rounded-[40px]
          w-full h-[711px] max-lg:h-[560px] max-md:h-[420px]"
        >
          <div className="flex flex-col justify-between h-full p-6 max-lg:p-4">
            <div>
              <h1 className="text-[36px] max-lg:text-[28px] text-[#fff] font-bold leading-snug">
                AlUIa
              </h1>
              <p className="text-[16px] max-lg:text-[14px] text-[#fff] mt-2 leading-relaxed">
                AIUIa is located deep in the desert in <br />
                the northwest of Saudi Arabia
              </p>
            </div>
            <div className="flex items-center gap-3 mt-auto">
              <img
                src="/przd2Logo2.png"
                alt="mini"
                width={60}
                height={58}
                className="rounded-full"
              />
              <h1 className="text-[17px] max-lg:text-[14px] text-[#fff] font-bold leading-tight">
                Garrett Parker
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

export default Przd2Card;
