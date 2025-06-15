import GaleryText from "./galeryText";
import Header from "./header";

function GaleryFon() {
  return (
    <div className="flex justify-center items-center">
      <div className="relative w-[1512px] h-[944px]">
        {/* Ներքին երկու ֆոնային շերտերը շերտավորված absolute դիրքավորմամբ */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/imgesFon3.png')" }}
        />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/membersHims.png')" }}
        />
        {/* Կոնտենտը վերևում՝ z-10 */}
        <div className="relative z-10 flex flex-col h-full">
          <Header />
          <div className="flex justify-center items-center pt-[80px] flex-grow">
            <GaleryText />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GaleryFon;
