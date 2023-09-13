import Image from "next/image";
import Link from "next/link";

const Logo = ({ textColor } : {textColor: string}) => {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image className="w-9 h-9" width={100} height={100} alt="Logo" src="/images/logo.svg" />
      <span className={`font-bold md:text-2xl ${textColor}`}>Moviebox</span>
    </Link>
  );
};

export default Logo;
