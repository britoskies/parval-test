import React from "react";
import { Outlet } from "react-router";
import NavBar from "./NavBar";

const MainLayout: React.FC = () => (
  <div className="flex flex-col min-h-screen bg-white">
    <NavBar />
    <main className="flex-1 p-4">
      <Outlet />
    </main>
  </div>
);

export default MainLayout;
