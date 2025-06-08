import Image from "next/image";

function HeadLogo() {
  return (
    <div>
        <a>
          <Image
            src="/Frame.png"
            alt="Logo"
            width={213}
            height={118}
          />
        </a>
    </div>
  );
}

export default HeadLogo;
