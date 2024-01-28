import Image from "next/image";
import logo from "../public/logo.svg";
import Link from "next/link";

const Logo = () => {
  return (
    <div>
      <Link href="/">
        <Image src={logo} alt="snap logo" />
      </Link>
    </div>
  );
};

export default Logo;
