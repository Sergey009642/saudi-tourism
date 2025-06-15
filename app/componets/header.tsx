import HeadLogo from "./headLogo";
import Nav from "./nav";

export default function Header() {
  return (
    <div className="flex justify-center items-center pt-[20px]">
    <header className="flex items-center justify-center gap-[50px]">
      <HeadLogo />
      <Nav />
    </header>
    </div>
  );
}
