function DestBgImges() {
  return (
    <div
      className="relative w-full max-w-[1440px]
        h-[700px] md:h-[800px] lg:h-[982px]
        max-xl:h-[680px] max-lg:h-[600px] max-md:h-[500px] max-sm:h-[400px]
        mx-auto"
    >
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
      <div
        className="relative flex  justify-between items-center
          px-6 md:px-20
          pt-[500px] md:pt-[700px] lg:pt-[830px]
          max-xl:pt-[450px] max-lg:pt-[400px] max-md:pt-[350px] max-sm:pt-[300px]
          text-white 
          md:flex md:flex-col md:gap-[40px]
          "
      >
        <div className="flex flex-col items-center md:items-start gap-4">
          <img
            src="/desertHisma.png"
            alt="Desert Hisma"
            width={247}
            height={125}
            className="max-w-[180px] md:max-w-none"
          />
          <h1
            className="text-[40px] md:text-[70px] lg:text-[100px] font-bold
              max-xl:text-[50px] max-lg:text-[45px] max-md:text-[40px] max-sm:text-[35px]"
          >
            DESERT
          </h1>
        </div>

        <div className="flex items-center">
          <img
            src="/przd1Logo1.png"
            alt="Jonatan Pie"
            width={82}
            height={79}
            className="max-w-[60px] md:max-w-none"
          />
          <h1
            className="text-[14px] md:text-[17px] text-white font-semibold leading-tight
              max-xl:text-[13px] max-lg:text-[12px] max-md:text-[11px] max-sm:text-[10px]"
          >
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
