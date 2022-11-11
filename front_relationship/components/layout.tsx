import React from "react";
import Sidebar from "./sidebar";

interface Props {
  children: React.ReactElement;
}
export default function Layout({ children }: Props) {
  return (
    <div className="flex flex-no-wrap h-screen  bg-gradient-to-r from-gray-700 to-zinc-900">
      <Sidebar />
      <div className="p-3 shadow-inner container mx-auto overflow-y-auto text-slate-50">
        {children}
      </div>
    </div>
  );
}
