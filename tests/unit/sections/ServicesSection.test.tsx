import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { SERVICES } from "@/data/site-data";

// Mock ServiceCard para isolar o teste da seção
vi.mock("@/components/ServiceCard", () => ({
  ServiceCard: ({ service }: { service: { title: string } }) => (
    <div data-testid="service-card">{service.title}</div>
  ),
}));

describe("ServicesSection", () => {
  it("renderiza a seção com id='services'", () => {
    render(<ServicesSection />);
    const section = document.querySelector("#services");
    expect(section).toBeInTheDocument();
  });

  it("renderiza os headings da seção de serviços", () => {
    render(<ServicesSection />);
    expect(screen.getByText(/O Que Fazemos/i)).toBeInTheDocument();
    expect(screen.getByText(/Nossos Serviços/i)).toBeInTheDocument();
  });

  it(`renderiza exatamente ${SERVICES.length} ServiceCards`, () => {
    render(<ServicesSection />);
    const cards = screen.getAllByTestId("service-card");
    expect(cards).toHaveLength(SERVICES.length);
  });

  it("renderiza os títulos de todos os serviços do site-data", () => {
    render(<ServicesSection />);
    SERVICES.forEach((service) => {
      expect(screen.getByText(service.title)).toBeInTheDocument();
    });
  });
});
