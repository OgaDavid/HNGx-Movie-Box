import React from "react";
import Logo from "@/components/Navbar/logo";
import SearchInput from "@/components/Navbar/searchInput";
import Image from "next/image";
import Container from "@/components/ui/container";

const Navbar = () => {
  return (
    <header className="fixed z-10 w-full">
      <Container>
        <div className="flex items-center w-full py-4 justify-between">
          <Logo />
          <SearchInput />
          <div className="flex items-center gap-6">
            <p className="font-medium text-white">Sign in</p>
            <div className="bg-rose-700 rounded-full p-2">
              <Image width={24} height={24} alt="Menu" src="/images/menu.svg" />
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
