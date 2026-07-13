import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { ServiceCard } from "@/components/ServiceCard";
import type { Service } from "@/data/site-data";

// Mock framer-motion
vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children, className, transition, ...rest }: React.HTMLAttributes<HTMLDivElement> & { transition?: unknown }) =>
      <div className={className} data-delay={JSON.stringify(transition)} {...rest}>{children}</div>,
  },
}));

const mockService: Service = {
  id: 1,
  title: "Martelinho de Ouro",
  description: "Técnica artesanal para remover amassados sem danificar a pintura original.",
  imageUrl: "/images/AutoMan/onix vermelho/onix-antes.webp",
};

describe("ServiceCard", () => {
  it("renderiza o título do serviço", () => {
    render(<ServiceCard service={mockService} index={0} />);
    expect(screen.getByText("Martelinho de Ouro")).toBeInTheDocument();
  });

  it("renderiza a descrição do serviço", () => {
    render(<ServiceCard service={mockService} index={0} />);
    expect(
      screen.getByText(/Técnica artesanal para remover amassados/i)
    ).toBeInTheDocument();
  });

  it("renderiza a imagem com alt correto e loading lazy", () => {
    render(<ServiceCard service={mockService} index={0} />);
    const img = screen.getByAltText("Martelinho de Ouro");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("loading", "lazy");
    expect(img).toHaveAttribute("src", mockService.imageUrl);
  });

  it("renderiza o texto 'Saiba Mais' para o CTA do card", () => {
    render(<ServiceCard service={mockService} index={0} />);
    expect(screen.getByText(/Saiba Mais/i)).toBeInTheDocument();
  });

  it("aplica delay de animação proporcional ao index (index 0 < index 3)", () => {
    const { rerender } = render(<ServiceCard service={mockService} index={0} />);
    const cardIndex0 = document.querySelector("[data-delay]");
    const delay0 = JSON.parse(cardIndex0?.getAttribute("data-delay") || "{}").delay;

    rerender(<ServiceCard service={mockService} index={3} />);
    const cardIndex3 = document.querySelector("[data-delay]");
    const delay3 = JSON.parse(cardIndex3?.getAttribute("data-delay") || "{}").delay;

    expect(delay0).toBeLessThan(delay3);
  });
});
