import ContactWatsap from "../componets/contactWatsapp";
import Footer from "../componets/footer";
import CardSliderSection from "../componets/mambersSwiper";
import MembersDestText from "../componets/membersDestText";
import MembFon from "../componets/membFon";
import PrzdOpshi from "../componets/przdOpshi";
import ImageSlider from "../componets/swipwerSaudArab";
import TravelText from "../componets/TravelText";

function Home() {
  return (
    <div className="flex justify-center items-center">
      <div className="max-w-[1440px] w-full ">
        <MembFon />

        <div className="pt-12 sm:pt-16">
          <MembersDestText />
        </div>

        <PrzdOpshi />

        <TravelText />

        <CardSliderSection />

        <ContactWatsap />

        <ImageSlider />

        <div className="pt-24">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Home;
