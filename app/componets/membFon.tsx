import Header from "./header";
import MembersText from "./membersText";

function MembFon(){
  return (
<div className="flex justify-center items-center">
    <div className="">
        <div className="bg-[url('/membersFons.png')] bg-cover bg-center w-[1512px] h-[944px]">
            <div className="bg-[url('/membersHims.png')] bg-cover bg-center w-[1512px] h-[944px]">
                <div className="">
                    <Header/>   
                        </div>
                    <div className="flex justify-center items-center pt-[150px]">
                        <MembersText/>
                </div>
            </div>
        </div>
    </div>
</div>
  );
};

export default MembFon;