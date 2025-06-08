function CardGalery1() {
  const imges = ["/galeryCard.png"];

  return (
    <div className="flex flex-col xl:flex-row justify-center items-center gap-10 px-4 py-8 max-w-[1440px] mx-auto">
      {/* Տեքստային հատված */}
      <div className="flex flex-col gap-6 max-w-[600px] text-white">
        <h1 className="text-[32px] md:text-[36px] lg:text-[40px] font-semibold">Culture</h1>
        <p className="text-[18px] md:text-[22px] lg:text-[26px] leading-relaxed">
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
          <button className="text-white rounded-full border border-white flex items-center justify-center text-[24px] md:text-[30px] lg:text-[36px] w-[56px] md:w-[64px] lg:w-[72px] h-[56px] md:h-[64px] lg:h-[72px]">
            →
          </button>
        </div>
      </div>

      {/* Պատկերի հատված */}
      <div className="flex flex-col gap-6 w-full xl:w-auto">
        <div className="flex justify-between items-center flex-wrap gap-4 text-white">
          <h1 className="text-2xl xl:text-3xl font-bold text-center xl:text-left">
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
              className="w-full max-w-[604px] h-auto rounded-[32px] object-cover"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CardGalery1;
