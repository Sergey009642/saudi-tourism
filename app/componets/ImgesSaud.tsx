import ExpTextHead from "./expTextHead"
import Header from "./header"
import HistorText1 from "./HistorText1"
import HistorText2 from "./HistorText2"
function ImgesSaud() {
  return (
    <div className="flex justify-center items-center">
      <div>
        <div className="bg-[url('/ImgesSound.png')] bg-cover bg-center w-[1440px] h-[982px] max-xl:w-[1024px] max-lg:w-[768px]">
          <Header />
          <div>
            <ExpTextHead />
          </div>
          <div className="flex justify-around items-center gap-[522px] pt-[122px] max-xl:gap-[360px] max-lg:gap-[240px] max-lg:flex-col max-lg:items-center max-sm:gap-[40px]">
            <HistorText1 />
            <HistorText2 />
          </div>
        </div>
      </div>
    </div>
  );
}
export default ImgesSaud;
