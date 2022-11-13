import Image from "next/image";
import React, { useState } from "react";
import Sidebar from "./sidebar";
import mountains from "public/pexels-michał-osiński-3454270.jpg";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";

interface Props {
  children: React.ReactElement;
}
export default function Layout({ children }: Props) {
  const [opened, setOpened] = useState(true);
  return (
    <div className="static flex flex-no-wrap h-screen  bg-gradient-to-r from-gray-700 to-zinc-900">
      <div
        onClick={() => {
          setOpened(!opened);
        }}
        className="text-gray-50 z-30 fixed left-0 bottom-0"
      >
        <button className="cursor-pointer text-lg p-3">
          {opened ? <AiOutlineMenuFold /> : <AiOutlineMenuUnfold />}
        </button>
      </div>
      <Sidebar opened={opened} />
      <div
        className={
          opened
            ? "ml-64 z-20 p-7 shadow-inner container mx-auto overflow-x-hidden overflow-y-auto text-slate-50"
            : "z-20 p-7 shadow-inner container mx-auto overflow-x-hidden overflow-y-auto text-slate-50"
        }
      >
        {children}
      </div>

      <Image
        className="absolute blur-sm opacity-30 w-100 z-0"
        alt="mage"
        src={mountains}
        fill
      />
    </div>
  );
}
