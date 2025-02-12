"use client";

import { useEffect, useState } from "react";

export const Header = ({ activeId }: { activeId?: string }) => {
  const [activeSection, setActiveSection] = useState(activeId ? activeId : "");

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10 mx-auto max-w-[1440px] ">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        {["home", "projects", "about", "resume"].map((id) => (
          <a
            key={id}
            href={`${
              id === "resume"
                ? "https://drive.google.com/file/d/1-ZP2-tJDi6mo6eW-qvlyAP13GTpxKmAu/view?usp=drive_link"
                : `/${id === "home" ? "" : `web-portfolio/` + id}`
            }`}
            className={`px-4 py-2 rounded-full transition-all ${
              activeSection === id
                ? "bg-white text-gray-900" // Active section styling
                : "text-white hover:bg-white/20"
            }`}
          >
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </a>
        ))}
      </nav>
    </div>
  );
};
