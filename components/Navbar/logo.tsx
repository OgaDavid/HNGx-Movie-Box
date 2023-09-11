import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <Image className="w-9 h-9" width={100} height={100} alt="Logo" src="/images/logo.svg" />
      <span className="font-bold md:text-2xl text-white">Moviebox</span>
    </div>
  );
};

export default Logo;
