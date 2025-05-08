import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Layout = ({ showSidebar = false, children }) => {
  return (
    <section className="min-h-screen">
      <div className="flex">
        {showSidebar && <Sidebar />}

        <section className="flex flex-1 flex-col">
          <Navbar />
          <main className="flex-1 overflow-y-auto">{children}</main>
        </section>
      </div>
    </section>
  );
};

export default Layout;
