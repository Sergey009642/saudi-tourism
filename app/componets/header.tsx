import HeadLogo from "./headLogo";
import Nav from "./nav";

export default function Header() {
  return (
    <header className="flex justify-between items-center pt-[40px] px-4 max-w-[1440px] mx-auto
                       max-xl:flex-col max-xl:items-center max-xl:gap-8
                       max-lg:gap-16">
      <HeadLogo />
      <Nav />
    </header>
  );
}
