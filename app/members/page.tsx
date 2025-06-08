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
    <div className="flex justify-center items-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1440px] w-full space-y-12 sm:space-y-16">
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
