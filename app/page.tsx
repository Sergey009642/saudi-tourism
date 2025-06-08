import DesertText from "./componets/desertText";
import DestBgImges from "./componets/destBgimges";
import Footer from "./componets/footer";
import ImgesSaud from "./componets/ImgesSaud";
import PrzdOpshi from "./componets/przdOpshi";
import PrzdText from "./componets/przdText";
import SaudianLogo from "./componets/saudianLogo";
import ImageSlider from "./componets/swipwerSaudArab";

export default function Home() {
  return (
    <div className="flex justify-center items-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1440px] w-full space-y-10 sm:space-y-16">
        <ImgesSaud />

        <div className="flex justify-center pt-16 pb-8">
          <SaudianLogo />
        </div>

        <div className="pt-20 pb-16 text-center">
          <PrzdText />
        </div>

        <PrzdOpshi />

        <DestBgImges />

        <DesertText />

        <div className="p-6 sm:p-10">
          <ImageSlider />
        </div>

        <Footer />
      </div>
    </div>
  );
}
