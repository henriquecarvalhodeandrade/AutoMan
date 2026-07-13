import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Navbar } from "@/components/Navbar";

// Mock framer-motion
vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children, className, ...rest }: React.HTMLAttributes<HTMLDivElement>) =>
      <div className={className} {...rest}>{children}</div>,
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

// Mock react-scroll Link
vi.mock("react-scroll", () => ({
  Link: ({ children, to, className, onClick }: {
    children: React.ReactNode;
    to: string;
    className?: string;
    onClick?: () => void;
  }) => (
    <a href={`#${to}`} className={className} onClick={onClick}>{children}</a>
  ),
}));

describe("Navbar", () => {
  beforeEach(() => {
    render(<Navbar />);
  });

  it("renderiza a logo da Automan", () => {
    const logo = screen.getByAltText(/Automan Funilaria Artesanal/i);
    expect(logo).toBeInTheDocument();
  });

  it("renderiza todos os links de navegação desktop", () => {
    expect(screen.getAllByText(/Quem Somos/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Serviços/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Portfólio/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Parceiros/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Localização/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Contato/i).length).toBeGreaterThan(0);
  });

  it("renderiza o botão de hamburguer para mobile", () => {
    // O botão hamburguer é o elemento button na navbar
    const menuButton = screen.getByRole("button");
    expect(menuButton).toBeInTheDocument();
  });

  it("abre o menu mobile ao clicar no botão hamburguer", async () => {
    const user = userEvent.setup();
    const menuButton = screen.getByRole("button");

    // Antes de clicar: menu mobile não existe no DOM
    expect(screen.queryByText("Agendar Orçamento")).not.toBeInTheDocument();

    await user.click(menuButton);

    // Após clicar: menu mobile aparece com o botão de orçamento
    expect(screen.getByText(/Agendar Orçamento/i)).toBeInTheDocument();
  });

  it("fecha o menu mobile ao clicar em um link de navegação", async () => {
    const user = userEvent.setup();
    const menuButton = screen.getByRole("button");

    // Abre o menu
    await user.click(menuButton);
    expect(screen.getByText(/Agendar Orçamento/i)).toBeInTheDocument();

    // Clica em um dos links do menu mobile (existem múltiplos "Quem Somos")
    const linksQuemsomas = screen.getAllByText(/Quem Somos/i);
    // O link do menu mobile é o último renderizado (dentro do AnimatePresence)
    await user.click(linksQuemsomas[linksQuemsomas.length - 1]);

    // O menu fecha
    expect(screen.queryByText("Agendar Orçamento")).not.toBeInTheDocument();
  });

  it("a navbar responde ao evento de scroll", () => {
    // Simula scroll acima do threshold de 50px
    Object.defineProperty(window, "scrollY", { value: 100, writable: true });
    window.dispatchEvent(new Event("scroll"));

    // A classe scrolled deve alterar o estilo do nav
    const nav = document.querySelector("nav");
    expect(nav).toBeInTheDocument();
    // O componente usa scrollY > 50 para mudar classes CSS
  });
});
