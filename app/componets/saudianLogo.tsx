function SaudianLogo() {
  const imges = ['/Saudialogo1.png','Saudialogo2.png','Saudianlogo3.png','Saudianlogo4.png']
  return(
    <div className="max-w-[1440px] m-0">
        <div className="flex justify-center items-center gap-[30px] max-lg:flex-wrap">
         {imges.map((src, index) => (
          <img key={index} src={src} alt="logoSaoud"
          className="w-[200px]"
          />
          ))}
        </div>
      </div>
  )
}
export default SaudianLogo