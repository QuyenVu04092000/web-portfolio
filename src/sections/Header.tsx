"use client";

import { useEffect, useState } from "react";

export const Header = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);
        if (visibleEntry) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  // Handle click to update active section immediately
  const handleClick = (id: string) => {
    setActiveSection(id);
  };

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        {["home", "projects", "about", "contact"].map((id) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={() => handleClick(id)}
            className={`px-4 py-2 rounded-full transition-all ${
              activeSection === id
                ? "bg-white text-gray-900"
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
