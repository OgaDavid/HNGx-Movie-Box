import React from "react";
import Logo from "@/components/Navbar/logo";
import SearchInput from "@/components/Navbar/searchInput";
import Image from "next/image";
import Container from "@/components/ui/container";

const Navbar = () => {
  return (
    <Container>
      <div className="flex items-center py-2 justify-between">
        <Logo />
        <SearchInput />
        <div className="flex items-center gap-4">
          <p className="font-medium">Sign in</p>
          <div className="bg-rose-700 rounded-full p-4">
            <Image width={24} height={24} alt="Menu" src="/images/menu.svg" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
