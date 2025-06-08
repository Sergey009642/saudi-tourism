function CardGalery1() {
  const imges = ["/galeryCard.png"];

  return (
    <div className="flex flex-col xl:flex-row justify-center items-center gap-10 px-4 py-8 max-w-[1440px] mx-auto">
      {/* Տեքստային հատված */}
      <div className="flex flex-col gap-6 max-w-[600px] text-white">
        <h1 className="text-[32px] md:text-[36px] lg:text-[40px] font-semibold
          max-xl:text-[28px]
          max-lg:text-[24px]
          max-md:text-[20px]
          max-sm:text-[18px]
          max-[320px]:text-[16px]"
        >
          Culture
        </h1>

        <p className="text-[18px] md:text-[22px] lg:text-[26px] leading-relaxed
          max-xl:text-[16px]
          max-lg:text-[15px]
          max-md:text-[14px]
          max-sm:text-[13px]
          max-[320px]:text-[12px]"
        >
          Saudi Arabia’s rich heritage and traditions have <br />
          been shaped by its position as a historic trade <br />
          hub and the birthplace of Islam. In recent years, <br />
          the Kingdom has undergone a significant <br />
          cultural transformation, evolving century-old <br />
          customs to fit the contemporary world we live in <br />
          today.
        </p>

        <div className="flex justify-between items-center pt-4">
          <p>.</p>
          <button className="text-white rounded-full border border-white flex items-center justify-center 
            text-[24px] md:text-[30px] lg:text-[36px] 
            w-[56px] md:w-[64px] lg:w-[72px] 
            h-[56px] md:h-[64px] lg:h-[72px]
            max-xl:text-[20px] max-xl:w-[50px] max-xl:h-[50px]
            max-lg:text-[18px] max-lg:w-[44px] max-lg:h-[44px]
            max-md:text-[16px] max-md:w-[40px] max-md:h-[40px]
            max-sm:text-[14px] max-sm:w-[36px] max-sm:h-[36px]
            max-[320px]:text-[12px] max-[320px]:w-[32px] max-[320px]:h-[32px]"
          >
            →
          </button>
        </div>
      </div>

      {/* Պատկերի հատված */}
      <div className="flex flex-col gap-6 w-full xl:w-auto">
        <div className="flex justify-between items-center flex-wrap gap-4 text-white">
          <h1 className="text-2xl xl:text-3xl font-bold text-center xl:text-left
            max-xl:text-[22px]
            max-lg:text-[20px]
            max-md:text-[18px]
            max-sm:text-[16px]
            max-[320px]:text-[14px]"
          >
            Traditions of Saudi Arabia
          </h1>
          <p>.</p>
        </div>
        <div className="flex justify-center items-center">
          {imges.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`mini${i + 1}`}
              className="w-full max-w-[604px] h-auto rounded-[32px] object-cover
                max-xl:max-w-[500px]
                max-lg:max-w-[420px]
                max-md:max-w-[360px]
                max-sm:max-w-[300px]
                max-[320px]:max-w-[260px]"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CardGalery1;
