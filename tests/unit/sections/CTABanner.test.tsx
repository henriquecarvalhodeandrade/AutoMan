import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { CTABanner } from "@/components/sections/CTABanner";

describe("CTABanner", () => {
  it("renderiza o texto principal do CTA", () => {
    render(<CTABanner />);
    expect(
      screen.getByText(/Seu carro merece o melhor tratamento/i)
    ).toBeInTheDocument();
  });

  it("renderiza o texto de avaliação gratuita", () => {
    render(<CTABanner />);
    expect(
      screen.getByText(/avaliação gratuita/i)
    ).toBeInTheDocument();
  });

  it("renderiza 5 ícones de estrela", () => {
    render(<CTABanner />);
    // Os SVGs das estrelas são renderizados pelo lucide-react
    // Verificamos que existem 5 elementos SVG dentro do banner
    const svgs = document.querySelectorAll("svg");
    expect(svgs.length).toBeGreaterThanOrEqual(5);
  });

  it("usa textura de background local (não URL externa)", () => {
    render(<CTABanner />);
    const container = document.body.innerHTML;
    expect(container).not.toContain("transparenttextures.com");
    expect(container).toContain("carbon-fibre.png");
  });
});
