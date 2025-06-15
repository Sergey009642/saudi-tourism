function TravelText() {
  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-center items-center gap-24 max-[768px]:gap-12 max-[480px]:gap-6 max-[320px]:gap-4 px-4">
        <h1 className="text-[45px] p-[20px] max-[1440px]:text-[38px] max-[1024px]:text-[32px] max-[768px]:text-[28px] max-[480px]:text-[24px] max-[320px]:text-[20px] text-[#fff]">
          <strong>Travel Essentials</strong>
        </h1>
        <p className="hidden md:block">.</p>
      </div>
    </div>
  );
}

export default TravelText;
