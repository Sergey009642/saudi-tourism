function ContactWatsap() {
  return (
    <div className="flex justify-center items-center px-4 py-20">
      <div className="w-full max-w-[1393px]">
        <div className="w-full rounded-[64px] md:rounded-[127px] bg-gradient-to-r from-[#047F01] via-[#047E01] to-[#047F01] px-6 py-10 md:py-[80px]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <h1 className="text-[24px] md:text-[30px] lg:text-[36px] text-white text-center md:text-left font-bold">
              Contact us on Whatsapp
            </h1>
            <button className="text-[18px] md:text-[20px] lg:text-[24px] px-6 py-3 rounded-[19px] bg-white text-[#047E01] font-semibold whitespace-nowrap">
              Start Chat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactWatsap;
