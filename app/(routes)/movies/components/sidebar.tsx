"use client";

import Logo from "@/components/Navbar/logo";
import { Button } from "@/components/ui/button";
import { Calendar, Clapperboard, Home, Tv } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";

const sideLinks = [
  {
    name: "Home",
    icon: <Home />,
  },
  {
    name: "Movies",
    icon: <Clapperboard />,
  },
  {
    name: "TV Series",
    icon: <Tv />,
  },
  {
    name: "Upcoming",
    icon: <Calendar />,
  },
];

const Sidebar = () => {
  return (
    <aside className="fixed max-[1250px]:hidden overflow-auto h-full hide-scrollbar rounded-tr-[45px] rounder-br-[45px] w-[226px] border">
      <div className="pt-10 flex flex-col">
        <div className="ml-2">
          <Logo textColor="text-black" />
        </div>
        <ul className="flex my-16 flex-col gap-6 items-start">
          {sideLinks.map((link, index) => (
            <li key={index}>
              <span
                className={cn(
                  "flex py-4 hover:border-r-rose-700 cursor-pointer text-[#333333] hover:border-r-[6px] w-[226px] items-start gap-4 px-4 hover:bg-rose-100",
                  link.name === "Movies"
                    ? "border-r-rose-700 bg-rose-100 border-r-[6px]"
                    : ""
                )}
              >
                <span className="w-4 h-4">{link.icon}</span>
                <span className="text-black font-bold ">{link.name}</span>
              </span>
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
