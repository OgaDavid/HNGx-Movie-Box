import Logo from "@/components/Navbar/logo";
import React from "react";

const Sidebar = () => {
  return (
    <aside className="fixed h-full rounded-tr-[45px] rounder-br-[45px] w-[226px] border">
      <div className="justify-center pt-10 flex flex-col items-center">
        <Logo textColor="text-black" />
      </div>
    </aside>
  );
};

export default Sidebar;
