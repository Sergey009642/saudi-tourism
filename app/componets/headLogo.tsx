import Image from "next/image";

function HeadLogo() {
  return (
    <div>
      <a href="/">
        <Image
          src="/Frame.png"
          alt="Logo"
          width={213}
          height={118}
          priority={true} // Եթե ուզում ես, որ լոգոն արագ լցվի
        />
      </a>
    </div>
  );
}
export default HeadLogo;
