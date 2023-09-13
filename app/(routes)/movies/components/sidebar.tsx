"use client"

import Logo from "@/components/Navbar/logo";
import { Button } from "@/components/ui/button";
import { Calendar, Clapperboard, Home, PlaySquare, Tv } from "lucide-react";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const sideLinks = [
  {
    name: "Home",
    href: "/",
    icon: <Home />,
  },
  {
    name: "Movies",
    href: "/movies",
    icon: <Clapperboard />,
  },
  // {
  //   name: "Watch",
  //   href: `/movies/`,
  //   icon: <PlaySquare />,
  // },
  {
    name: "TV Series",
    href: "/movies/tv",
    icon: <Tv />,
  },
  {
    name: "Upcoming",
    href: "/movies/upcoming",
    icon: <Calendar />,
  },
];

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <aside className="fixed overflow-auto h-full hide-scrollbar rounded-tr-[45px] rounder-br-[45px] w-[226px] border">
      <div className="pt-10 flex flex-col">
        <div className="ml-2">
          <Logo textColor="text-black" />
        </div>
        <ul className="flex my-16 flex-col gap-6 items-start">
          {sideLinks.map((link, index) => (
            <li key={index}>
              <Link
                className={cn(
                  "flex py-4 hover:border-r-rose-700 text-[#333333] hover:border-r-[6px] w-[226px] items-start gap-4 px-4 hover:bg-rose-100",
                  pathname === link.href
                    ? "border-r-rose-700 bg-rose-100 border-r-[6px]"
                    : ""
                )}
                href={link.href}
              >
                <span className="w-4 h-4">{link.icon}</span>
                <span className="text-black font-bold ">{link.name}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="bg-rose-100 border mx-5 py-6 px-3 border-rose-700 rounded-2xl">
          <h4 className="text-[#333333] font-semibold">
            Play movie quizes and earn free tickets
          </h4>
          <p className="text-[#666666]">50k people are playing now</p>
          <Button className="bg-rose-200 border mt-3 border-transparent hover:bg-transparent hover:border-rose-500 text-rose-500 rounded-full">
            Start playing
          </Button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
