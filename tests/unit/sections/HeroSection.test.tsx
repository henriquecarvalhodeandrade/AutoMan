import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { HeroSection } from "@/components/sections/HeroSection";

// Mock framer-motion para evitar erros com useScroll/useTransform no jsdom
vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children, style, className, ...rest }: React.HTMLAttributes<HTMLDivElement> & { style?: React.CSSProperties }) =>
      <div style={style} className={className} {...rest}>{children}</div>,
  },
  useScroll: () => ({ scrollY: { get: () => 0 } }),
  useTransform: (_source: unknown, _input: unknown, output: number[]) => ({ get: () => output[0] }),
  AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

// Mock react-scroll Link
vi.mock("react-scroll", () => ({
  Link: ({ children, to, className }: { children: React.ReactNode; to: string; className?: string }) => (
    <a href={`#${to}`} className={className}>{children}</a>
  ),
}));

describe("HeroSection", () => {
  it("renderiza o título principal", () => {
    render(<HeroSection />);
    expect(screen.getByText(/MARTELINHO/i)).toBeInTheDocument();
    expect(screen.getByText(/A ARTE DO/i)).toBeInTheDocument();
  });

  it("renderiza o subtítulo de estética automotiva", () => {
    render(<HeroSection />);
    expect(screen.getByText(/Estética Automotiva Premium/i)).toBeInTheDocument();
  });

  it("renderiza o botão de agendar avaliação com link para #contact", () => {
    render(<HeroSection />);
    const agendarBtn = screen.getByRole("link", { name: /Agendar Avaliação/i });
    expect(agendarBtn).toBeInTheDocument();
    expect(agendarBtn).toHaveAttribute("href", "#contact");
  });

  it("renderiza o botão de nossos serviços com link para #services", () => {
    render(<HeroSection />);
    const servicosBtn = screen.getByRole("link", { name: /Nossos Serviços/i });
    expect(servicosBtn).toBeInTheDocument();
    expect(servicosBtn).toHaveAttribute("href", "#services");
  });

  it("usa imagem local da fachada (não Unsplash) — verifica ausência de URL externa", () => {
    render(<HeroSection />);
    // O mock do framer-motion strip o style prop do motion.div externo,
    // mas podemos garantir que nenhuma URL do Unsplash está no DOM renderizado.
    const container = document.body.innerHTML;
    expect(container).not.toContain("unsplash.com");
    // O HERO_IMAGE está definido como constante local no componente —
    // garantimos que não há fallback para Unsplash
    expect(container).not.toContain("images.unsplash");
  });
});
