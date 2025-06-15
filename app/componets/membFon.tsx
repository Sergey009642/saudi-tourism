import Header from "./header";
import MembersText from "./membersText";

function MembFon() {
  return (
    <div className="flex justify-center items-center">
      <div className="relative w-[1512px] h-[944px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/membersFons.png')" }}
        />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/membersHims.png')" }}
        />
        <div className="relative z-10 flex flex-col h-full">
          <Header />
          <div className="flex justify-center items-center pt-[150px] flex-grow">
            <MembersText />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MembFon;
