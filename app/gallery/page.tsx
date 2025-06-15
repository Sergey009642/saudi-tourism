import CardOpshiGalery from "../componets/cardOpshGalery";
import CardSmsOpshi from "../componets/cardSmsOpsh";
import ContactWatsap from "../componets/contactWatsapp";
import Footer from "../componets/footer";
import GaleryFon from "../componets/galeryFon";
import GalMainText from "../componets/GalMainText";
import ImageSlider from "../componets/swipwerSaudArab";

export default function Home() {
  return (
    <div className="flex justify-center items-center">
      <div className="max-w-[1440px] w-full">
        <div>
          <GaleryFon />
        </div>
        <div className="pt-[100px] max-lg:pt-12 max-sm:pt-8">
          <GalMainText />
        </div>
        <div className="mt-10 max-w-full overflow-x-auto">
          <CardOpshiGalery />
        </div>
        <div className="mt-10">
          <CardSmsOpshi />
        </div>
        <div className="mt-10">
          <ContactWatsap />
        </div>
        <div className="pb-[50px] mt-10">
          <ImageSlider />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
