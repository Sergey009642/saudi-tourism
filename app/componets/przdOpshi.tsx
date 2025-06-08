import Przd1Card from "./przd1Card";
import Przd2Card from "./przd2Card";
import Przd3Card from "./przd3Card";

function PrzdOpshi() {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-6 p-4 lg:gap-6 lg:p-10 max-w-[1440px] mx-auto">
      <Przd1Card />
      <Przd2Card />
      <Przd3Card />
    </div>
  );
}

export default PrzdOpshi;
