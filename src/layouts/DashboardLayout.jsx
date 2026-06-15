import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import {
  Logs,
  X,
  LayoutDashboard,
  UserPen,
  FolderDot,
  NotebookText,
  BookMarked,
} from "lucide-react";
import { Link } from "react-router-dom";

const navItems = [
  { name: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
  { name: "Projects", icon: FolderDot, path: "/projects" },
  { name: "Skills", icon: NotebookText, path: "/skills" },
  { name: "Experience", icon: BookMarked, path: "/experience" },
  { name: "Profile", icon: UserPen, path: "/profile" },
];

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen text-zinc-300 bg-zinc-950">
      {/* SIDEBAR */}
      <div
        className={`fixed lg:static z-20 h-screen w-64 bg-zinc-900 shadow-2xl
        transform transition-transform duration-300 
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0`}
      >
        {/* top */}
        <div className="p-4 flex justify-between items-center border-b border-zinc-800">
          <div
            className="w-9 h-9 rounded-xl bg-zinc-800 border border-zinc-700
                flex items-center justify-center text-lime-400 font-bold text-lg
                group-hover:border-lime-500 transition-colors duration-200"
          >
            {" "}
            B
          </div>

          <button onClick={() => setSidebarOpen(false)} className="lg:hidden">
            <X />
          </button>
        </div>

        {/* nav */}
        <div className="p-4 space-y-2">
          {navItems.map((nav) => {
            const Icon = nav.icon;

            return (
              <Link
                key={nav.name}
                to={nav.path}
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-zinc-800 transition"
              >
                <Icon className="w-5 h-5" />
                <span>{nav.name}</span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* MAIN */}
      <div className="flex-1 flex flex-col">
        {/* HEADER */}
        <header className="bg-lime-200/10 flex justify-between items-center p-4 backdrop-blur-md shadow-sm border-b border-zinc-800">
          <button onClick={() => setSidebarOpen(true)} className="lg:hidden">
            <Logs className="w-6 h-6" />
          </button>

          <h1 className="text-2xl font-bold">Dashboard</h1>

          <div className="w-9 h-9 bg-zinc-400 rounded-full"></div>
        </header>

        {/* CONTENT AREA */}
        <main className="p-4 flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
