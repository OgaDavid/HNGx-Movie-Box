"use client";

import React, { useState, useEffect } from "react";
import Logo from "@/components/Navbar/logo";
import SearchInput from "@/components/Navbar/searchInput";
import Image from "next/image";
import Container from "@/components/ui/container";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isPageScrolled, setIsPageScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY >= 30) {
        setIsPageScrolled(true);
      } else {
        setIsPageScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className={cn("fixed z-10 w-full", isPageScrolled && "glassmorphism")}>
      <Container>
        <div className="flex items-center w-full py-4 justify-between">
          <Logo textColor="text-white" />
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
