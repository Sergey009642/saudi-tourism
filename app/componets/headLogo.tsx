import Image from "next/image";
import Link from "next/link";

function HeadLogo() {
  return (
    <div>
      <Link href="/">
        <Image
          src="/Frame.png"
          alt="Logo"
          width={213}
          height={118}
          priority={true} // Եթե ուզում ես, որ լոգոն արագ լցվի
        />
      </Link>
    </div>
  );
}
export default HeadLogo;
