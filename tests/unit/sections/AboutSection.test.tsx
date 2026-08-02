import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { AboutSection } from "@/components/sections/AboutSection";

// Mock framer-motion
vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children, className, ...rest }: React.HTMLAttributes<HTMLDivElement>) =>
      <div className={className} {...rest}>{children}</div>,
  },
}));

describe("AboutSection", () => {
  it("renderiza o heading da seção com id='about'", () => {
    render(<AboutSection />);
    const section = document.querySelector("#about");
    expect(section).toBeInTheDocument();
  });

  it("renderiza título 'Quem Somos' e subtítulo de excelência", () => {
    render(<AboutSection />);
    expect(screen.getByText(/Quem Somos/i)).toBeInTheDocument();
    expect(screen.getByText(/Excelência em Cada Detalhe/i)).toBeInTheDocument();
  });


  it("renderiza os 4 diferenciais da empresa", () => {
    render(<AboutSection />);
    expect(screen.getByText("Certificação Internacional")).toBeInTheDocument();
    expect(screen.getByText("Atendimento Premium")).toBeInTheDocument();
    expect(screen.getByText("Garantia no Serviço")).toBeInTheDocument();
    expect(screen.getByText("Tecnologia de Ponta")).toBeInTheDocument();
  });
});
