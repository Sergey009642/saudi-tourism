function DestBgImges() {
  return (
    <div className="relative w-full max-w-[1440px] h-[700px] md:h-[800px] lg:h-[982px] mx-auto">
      {/* Հիմնական ֆոնը */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/desertImage.png')" }}
      ></div>

      {/* Վերընթաց ֆոնը */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/desertImgeHism.png')" }}
      ></div>

      {/* Կոնտենտը՝ պատկերի վրա */}
      <div className="relative flex flex-col md:flex-row justify-between items-center px-6 md:px-20 pt-[500px] md:pt-[700px] lg:pt-[830px] text-white">
        <div className="flex flex-col items-center md:items-start gap-4">
          <img src="/desertHisma.png" alt="Desert Hisma" width={247} height={125} />
          <h1 className="text-[40px] md:text-[70px] lg:text-[100px] font-bold">DESERT</h1>
        </div>

        <div className="flex items-center gap-4 md:gap-6">
          <img src="/przd1Logo1.png" alt="Jonatan Pie" width={82} height={79} />
          <h1 className="text-[14px] md:text-[17px] text-white font-semibold leading-tight">
            Jonatan Pie
            <br />
            Influencer
          </h1>
        </div>
      </div>
    </div>
  );
}

export default DestBgImges;
