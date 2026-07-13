import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { PARTNERS } from "@/data/site-data";

// Mock do Embla Carousel para evitar erros no jsdom
vi.mock("embla-carousel-autoplay", () => ({
  default: () => ({}),
}));

vi.mock("@/components/ui/carousel", () => ({
  Carousel: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  CarouselContent: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  CarouselItem: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

describe("PartnersSection", () => {
  it("renderiza a seção com id='partners'", () => {
    render(<PartnersSection />);
    const section = document.querySelector("#partners");
    expect(section).toBeInTheDocument();
  });

  it("renderiza o texto introdutório da seção de parceiros", () => {
    render(<PartnersSection />);
    expect(screen.getByText(/Trabalhamos com os melhores/i)).toBeInTheDocument();
  });

  it(`renderiza exatamente ${PARTNERS.length} logos de parceiros`, () => {
    render(<PartnersSection />);
    // Cada parceiro tem uma imagem com alt igual ao nome do parceiro
    PARTNERS.forEach((partner) => {
      const img = screen.getByAltText(partner.name);
      expect(img).toBeInTheDocument();
    });
  });

  it("todos os logos de parceiros usam caminhos locais (não URLs externas)", () => {
    render(<PartnersSection />);
    PARTNERS.forEach((partner) => {
      const img = screen.getByAltText(partner.name);
      expect(img.getAttribute("src")).toMatch(/^\/images\//);
      expect(img.getAttribute("src")).not.toMatch(/^https?:\/\//);
    });
  });
});
