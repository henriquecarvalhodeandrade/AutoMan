import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { PortfolioSection } from "@/components/PortfolioSection";
import { PORTFOLIO } from "@/data/site-data";

// Mock framer-motion
vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children, className, ...rest }: React.HTMLAttributes<HTMLDivElement>) =>
      <div className={className} {...rest}>{children}</div>,
    img: ({ src, alt, className }: React.ImgHTMLAttributes<HTMLImageElement>) =>
      <img src={src} alt={alt} className={className} />,
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

describe("PortfolioSection", () => {
  it("renderiza a seção com id='portfolio'", () => {
    render(<PortfolioSection />);
    const section = document.querySelector("#portfolio");
    expect(section).toBeInTheDocument();
  });

  it("renderiza os headings de Trabalhos Realizados e Antes e Depois", () => {
    render(<PortfolioSection />);
    expect(screen.getByText(/Trabalhos Realizados/i)).toBeInTheDocument();
    expect(screen.getByText(/Antes e Depois/i)).toBeInTheDocument();
  });

  it(`renderiza ${PORTFOLIO.length} cards de portfólio`, () => {
    render(<PortfolioSection />);
    PORTFOLIO.forEach((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
    });
  });

  it("exibe imagem 'Antes' por padrão no primeiro card", () => {
    render(<PortfolioSection />);
    // O primeiro item do portfólio deve mostrar a imagem "Antes"
    const firstItem = PORTFOLIO[0];
    const beforeImg = screen.getAllByAltText(
      new RegExp(`${firstItem.title.split(" ")[0]}.*Antes`, "i")
    );
    expect(beforeImg.length).toBeGreaterThan(0);
    // Badge "Antes" visível
    const anteriorBadges = screen.getAllByText(/^Antes$/i);
    expect(anteriorBadges.length).toBeGreaterThan(0);
  });

  it("alterna para imagem 'Depois' ao clicar no botão de toggle", async () => {
    const user = userEvent.setup();
    render(<PortfolioSection />);

    // Hover o card para mostrar o botão de toggle (simula via click)
    const toggleButtons = screen.getAllByRole("button", { name: /Ver Depois/i });
    expect(toggleButtons.length).toBeGreaterThan(0);

    await user.click(toggleButtons[0]);

    // Badge "Depois ✓" deve aparecer
    expect(screen.getByText(/Depois ✓/i)).toBeInTheDocument();
  });

  it("renderiza os botões pill de Antes/Depois para acessibilidade", () => {
    render(<PortfolioSection />);
    const anteriorPills = screen.getAllByRole("button", { name: /Ver antes/i });
    const depoisPills = screen.getAllByRole("button", { name: /Ver depois/i });
    expect(anteriorPills.length).toBeGreaterThanOrEqual(1);
    expect(depoisPills.length).toBeGreaterThanOrEqual(1);
  });
});
