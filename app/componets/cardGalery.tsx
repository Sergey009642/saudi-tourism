function CardGalery() {
  const imges = ["/galeryCard1.png"];

  return (
    <div className="flex justify-center items-center px-4 py-8">
      <div className="flex flex-col gap-10 max-w-[1440px] w-full">
        {/* Վերնագիր և փոքր տեքստ */}
        <div className="flex justify-between items-center flex-wrap gap-4">
          <h1 className="text-3xl xl:text-4xl font-bold text-white text-center xl:text-left 
            max-xl:text-[28px] 
            max-lg:text-[24px] 
            max-md:text-[22px] 
            max-sm:text-[20px] 
            max-[320px]:text-[18px]"
          >
            Traditions of Saudi Arabia
          </h1>
          <p className="text-white">.</p>
        </div>

        {/* Պատկեր և տեքստ */}
        <div className="flex flex-col xl:flex-row items-center justify-between gap-10 xl:gap-[50px]">
          <div className="w-full xl:w-auto">
            {imges.map((src, i) => (
              <img
                src={src}
                alt={`mini${i + 1}`}
                key={i}
                className="w-full max-w-[604px] h-auto rounded-[32px] object-cover
                  max-xl:max-w-[500px]
                  max-lg:max-w-[420px]
                  max-md:max-w-[360px]
                  max-sm:max-w-[300px]
                  max-[320px]:max-w-[260px]"
              />
            ))}
          </div>

          <div className="flex flex-col gap-6 max-w-[600px] text-white">
            <h1 className="text-[32px] md:text-[36px] lg:text-[40px] font-semibold 
              max-xl:text-[30px]
              max-lg:text-[26px]
              max-md:text-[22px]
              max-sm:text-[20px]
              max-[320px]:text-[18px]"
            >
              Language
            </h1>
            <p className="text-[18px] md:text-[20px] lg:text-[24px] leading-relaxed
              max-xl:text-[16px]
              max-lg:text-[15px]
              max-md:text-[14px]
              max-sm:text-[13px]
              max-[320px]:text-[12px]"
            >
              Arabic is the official language of Saudi Arabia <br />
              and the primary language used in all dealings <br />
              and public transactions. English serves as an <br />
              informal second language in the Kingdom and <br />
              is spoken by a large section of its society. All <br />
              road signs are bilingual, showing information <br />
              in both Arabic and English.
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
        </div>
      </div>
    </div>
  );
}

export default CardGalery;
