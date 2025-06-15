function ContactWatsap() {
  return (
    <div
      className="flex justify-center items-center px-4 py-20
        max-xl:px-6 max-xl:py-16
        max-lg:px-5 max-lg:py-14
        max-md:px-4 max-md:py-12
        max-sm:px-3 max-sm:py-10
        max-[320px]:px-2 max-[320px]:py-8"
    >
      <div className="w-full max-w-[1393px]">
        <div
          className="w-full rounded-[64px] md:rounded-[127px] bg-gradient-to-r from-[#047F01] via-[#047E01] to-[#047F01]
            px-6 py-10 md:py-[80px]
            max-xl:px-5 max-xl:py-8
            max-lg:px-4 max-lg:py-7
            max-md:px-3 max-md:py-6
            max-sm:px-2 max-sm:py-5
            max-[320px]:px-2 max-[320px]:py-4"
        >
          <div
            className="flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <h1
              className="text-[24px] md:text-[30px] lg:text-[36px] text-white font-bold
                text-center md:text-left
                max-xl:text-[22px]
                max-lg:text-[20px]
                max-md:text-[18px]
                max-sm:text-[16px]
                max-[320px]:text-[14px]"
            >
              Contact us on Whatsapp
            </h1>
            <button
              className="text-[18px] md:text-[20px] lg:text-[24px] px-6 py-3 rounded-[19px] bg-white text-[#047E01] font-semibold whitespace-nowrap
                max-xl:text-[16px] max-xl:px-5 max-xl:py-2.5
                max-lg:text-[15px] max-lg:px-4 max-lg:py-2
                max-md:text-[14px] max-md:px-3 max-md:py-1.5
                max-sm:text-[13px] max-sm:px-2.5 max-sm:py-1.5
                max-[320px]:text-[12px] max-[320px]:px-2 max-[320px]:py-1"
            >
              Start Chat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactWatsap;
