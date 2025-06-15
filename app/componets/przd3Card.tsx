function Przd3Card() {
    return(
        <div className="flex justify-center items-center">
            <div className="flex flex-col gap-[14px]">
                <div className="bg-[url('/przd3Card1.png')] bg-cover w-[446px] h-[682px] rounded-[40px] max-xl:w-[320px]">
                <div className="flex flex-col gap-[380px] p-[30px]">
                    <div className="flex-col">
                <h1 className="text-[26px] text-[#fff]"><strong>Al Qarah Mountain</strong></h1>
                <p className="text-[16px] text-[#fff]">
                The Mountain’s distractive rocks
                    <br />
                formations inviting adventures to
                    <br />
                explore its hidden treasure.
                </p>
                </div>
                <div className="flex items-center gap-[14px]">
                        <img
                        src='/przd1Logo2.png'
                        alt="mini"
                        width={82}
                        height={79}
                        />
                        <h1 className="text-[17px] text-[#fff]"><strong>
                        Jonatan Pie
                        <br />
                        Influencer
                            </strong>
                            </h1>
                </div>
                </div>
                </div>
                <div className="bg-[url('/przd3Card2.png')] bg-cover w-[446px] h-[409px] rounded-[40px] max-xl:w-[320px]">
                <div className="flex flex-col gap-[160px] p-[30px]">
                    <div className="flex-col">
                <h1 className="text-[26px] text-[#fff]"><strong>The best of Tabuk</strong></h1>
                <p className="text-[16px] text-[#fff]">
                Taif is a city and governorate in the Makkah
                <br />
                Region of Saudi Arabia.
                </p>
                </div>
                <div className="flex items-center gap-[14px]">
                        <img
                        src='/przd3Logo2.png'
                        alt="mini"
                        width={82}
                        height={79}
                        />
                        <h1 className="text-[17px] text-[#fff]"><strong>
                        Cristina Gottardi
                        <br />
                        Traveler
                            </strong>
                            </h1>
                </div>
                </div>
                </div>
            </div>
        </div>
    )
}
export default Przd3Card