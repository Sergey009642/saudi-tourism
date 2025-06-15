function ExpTextHead() {
  return (
    <div className="flex justify-center items-center pt-16 px-4 max-sm:pt-10 max-xs:pt-8">
      <div className="flex flex-col text-center max-w-4xl px-2">
        <h1
          className="text-white font-extrabold leading-tight
            text-[60px] sm:text-[80px] lg:text-[98px]
            max-lg:text-[68px] max-md:text-[46px] max-sm:text-[40px] max-[320px]:text-[36px]"
        >
          Explore
          <br />
          Saudi Arabia
        </h1>
        <p
          className="text-white mt-4 leading-relaxed
            text-[16px] sm:text-[18px]
            max-lg:text-[16px] max-md:text-[14px] max-sm:text-[13px] max-[320px]:text-[12px]"
        >
          Saudi Arabia is rich in heritage and history. The country is
          <br />
          home to hundreds of historically important sites.
        </p>
      </div>
    </div>
  );
}

export default ExpTextHead;
