import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

// Mock next/image and SVG imports
vi.mock("next/image", () => ({
  default: ({ alt }: { alt: string }) => <img alt={alt} />,
}));
vi.mock("@/assets/icons/arrow-up-right.svg", () => ({ default: () => null }));
vi.mock("@/assets/images/grain.jpg", () => ({ default: { src: "/grain.jpg" } }));
vi.mock("@/components/ScrollReveal", () => ({
  ScrollReveal: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));
vi.mock("@formspree/react", () => ({
  useForm: () => [{ succeeded: false, submitting: false, errors: [] }, vi.fn()],
  ValidationError: () => null,
}));
vi.mock("@/i18n/LangContext", () => ({
  useLang: () => ({
    t: {
      contact: {
        title: "Let's connect",
        description: "Open to full-time roles.",
        replyTime: "24 hours",
        available: "Open to full-time opportunities",
        form: {
          name: "Name",
          namePlaceholder: "Your name",
          email: "Email",
          emailPlaceholder: "email",
          message: "Message",
          messagePlaceholder: "Tell me...",
          send: "Send",
          sending: "Sending",
          successTitle: "Sent!",
          successDesc: "I'll reply.",
          sendAnother: "Send another",
        },
      },
    },
    locale: "en",
  }),
}));

import { ContactSection } from "@/sections/Contact";

describe("ContactSection", () => {
  it("renders email contact link", () => {
    render(<ContactSection />);
    const emailLink = screen.getByRole("link", { name: /vuquyen.04092000@gmail.com/i });
    expect(emailLink).toBeInTheDocument();
    expect(emailLink).toHaveAttribute("href", "mailto:vuquyen.04092000@gmail.com");
  });

  it("renders LinkedIn link", () => {
    render(<ContactSection />);
    const linkedIn = screen.getByRole("link", { name: /linkedin/i });
    expect(linkedIn).toBeInTheDocument();
    expect(linkedIn).toHaveAttribute("href", expect.stringContaining("linkedin.com"));
  });

  it("renders Resume download link", () => {
    render(<ContactSection />);
    const resume = screen.getByRole("link", { name: /download pdf/i });
    expect(resume).toBeInTheDocument();
    expect(resume).toHaveAttribute("href", expect.stringContaining("drive.google.com"));
  });

  it("renders contact form", () => {
    render(<ContactSection />);
    expect(screen.getByRole("button", { name: /send/i })).toBeInTheDocument();
  });
});
