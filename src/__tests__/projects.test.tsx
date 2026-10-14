import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

vi.mock("next/image", () => ({
  default: ({ alt }: { alt: string }) => <img alt={alt} />,
}));
vi.mock("@/assets/icons/arrow-up-right.svg", () => ({ default: () => null }));
vi.mock("@/assets/images/wetax.png", () => ({ default: { src: "/wetax.png" } }));
vi.mock("@/assets/images/vdental.png", () => ({ default: { src: "/vdental.png" } }));
vi.mock("@/assets/images/lothashop.png", () => ({ default: { src: "/lothashop.png" } }));
vi.mock("@/assets/images/psa.png", () => ({ default: { src: "/psa.png" } }));
vi.mock("@/components/ScrollReveal", () => ({
  ScrollReveal: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));
vi.mock("@/components/Card", () => ({
  Card: ({ children, className, style }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) => (
    <div className={className} style={style}>{children}</div>
  ),
}));
vi.mock("@/components/SectionHeader", () => ({
  SectionHeader: ({ title }: { title: string }) => <h2>{title}</h2>,
}));
vi.mock("@/i18n/LangContext", () => ({
  useLang: () => ({
    t: {
      projects: {
        eyebrow: "Projects",
        title: "Featured Projects",
        description: "Production systems.",
        visitSite: "Visit Live Site",
        items: [
          { results: ["PDF rendering improved by ~90%", "Millions of invoices", "WebSocket updates"] },
          { results: ["Booking UI rebuilt", "TODO(Buck): metric", "TODO(Buck): metric"] },
          { results: ["500+ SKUs", "TODO(Buck): metric", "TODO(Buck): metric"] },
          { results: ["CMS dashboard", "TODO(Buck): metric", "TODO(Buck): metric"] },
        ],
      },
    },
    locale: "en",
  }),
}));

import { ProjectsSection } from "@/sections/Projects";

describe("ProjectsSection", () => {
  it("renders WeTax project", () => {
    render(<ProjectsSection />);
    expect(screen.getByText("WeTax")).toBeInTheDocument();
  });

  it("renders live site links with correct hrefs", () => {
    render(<ProjectsSection />);
    const links = screen.getAllByRole("link", { name: /visit live site/i });
    expect(links.length).toBeGreaterThan(0);
    expect(links[0]).toHaveAttribute("href", "https://invoice.wetax.com.vn/");
  });

  it("renders all 4 projects", () => {
    render(<ProjectsSection />);
    expect(screen.getByText("WeTax")).toBeInTheDocument();
    expect(screen.getByText("VDental")).toBeInTheDocument();
    expect(screen.getByText("Lothashop")).toBeInTheDocument();
    expect(screen.getByText("PSA-CMS")).toBeInTheDocument();
  });
});
