import ExpTextHead from "./expTextHead";
import Header from "./header";
import HistorText1 from "./HistorText1";
import HistorText2 from "./HistorText2";

function ImgesSaud() {
  return (
   <div className="flex justify-center items-center">
  <div className="w-[1440px] h-[982px]">
    <div className="bg-[url('/ImgesSound.png')] bg-cover bg-center w-full h-full relative">
      
      {/* Make sure Header doesn't cover image unnecessarily */}
      <div className="absolute top-0 left-0 w-full z-10">
        <Header /> {/* Check bg-* inside Header */}
      </div>

      <div className="pt-[100px]"> {/* Push content down below header */}
        <ExpTextHead />

        <div
          className="flex justify-around items-center gap-[522px]
            pt-[122px]
            max-xl:gap-[360px]
            max-lg:gap-[180px] max-lg:flex-col max-lg:items-center max-lg:pt-[80px]
            max-sm:gap-[40px]">
          <HistorText1 />
          <HistorText2 />
        </div>
      </div>
    </div>
  </div>
</div>

  );
}

export default ImgesSaud;
