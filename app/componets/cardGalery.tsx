function CardGalery() {
  const imges = ["/galeryCard1.png"];

  return (
    <div className="flex justify-center items-center px-4 py-8">
      <div className="flex flex-col gap-10 max-w-[1440px] w-full">
        {/* Վերնագիր և փոքր տեքստ */}
        <div className="flex justify-between items-center flex-wrap gap-4">
          <h1 className="text-3xl xl:text-4xl font-bold text-white text-center xl:text-left">
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
                className="w-full max-w-[604px] h-auto rounded-[32px] object-cover"
              />
            ))}
          </div>

          <div className="flex flex-col gap-6 max-w-[600px] text-white">
            <h1 className="text-[32px] md:text-[36px] lg:text-[40px] font-semibold">
              Language
            </h1>
            <p className="text-[18px] md:text-[20px] lg:text-[24px] leading-relaxed">
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
              <button className="text-white rounded-full border border-white flex items-center justify-center text-[24px] md:text-[30px] lg:text-[36px] w-[56px] md:w-[64px] lg:w-[72px] h-[56px] md:h-[64px] lg:h-[72px]">
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
