import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ContactForm } from "@/components/ContactForm";

// ---------------------------------------------------------------
// Mock: evita abrir janela do navegador real durante os testes
// ---------------------------------------------------------------
const openMock = vi.fn();
Object.defineProperty(window, "open", { value: openMock, writable: true });

// ---------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------
async function fillAndSubmit(
  name = "João Silva",
  email = "joao@email.com",
  message = "Preciso de um orçamento para polimento completo."
) {
  const user = userEvent.setup();
  await user.type(screen.getByPlaceholderText("Seu nome"), name);
  await user.type(screen.getByPlaceholderText("seu@email.com"), email);
  await user.type(
    screen.getByPlaceholderText(/Descreva o serviço/i),
    message
  );
  await user.click(screen.getByRole("button", { name: /Enviar via WhatsApp/i }));
}

// ---------------------------------------------------------------
// Suite
// ---------------------------------------------------------------
describe("ContactForm", () => {
  beforeEach(() => {
    openMock.mockClear();
    render(<ContactForm />);
  });

  // --- RENDERIZAÇÃO ---
  it("renderiza todos os campos do formulário", () => {
    expect(screen.getByPlaceholderText("Seu nome")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("seu@email.com")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/Descreva o serviço/i)
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Enviar via WhatsApp/i })
    ).toBeInTheDocument();
  });

  // --- VALIDAÇÃO: campos vazios ---
  it("exibe erros de validação quando o formulário é submetido vazio", async () => {
    const user = userEvent.setup();
    await user.click(
      screen.getByRole("button", { name: /Enviar via WhatsApp/i })
    );
    await waitFor(() => {
      expect(
        screen.getByText(/Nome deve ter ao menos 2 caracteres/i)
      ).toBeInTheDocument();
      expect(screen.getByText(/Email inválido/i)).toBeInTheDocument();
      expect(
        screen.getByText(/Mensagem deve ter ao menos 10 caracteres/i)
      ).toBeInTheDocument();
    });
    // Não deve abrir WhatsApp quando inválido
    expect(openMock).not.toHaveBeenCalled();
  });

  // --- VALIDAÇÃO: email inválido ---
  it("exibe erro quando o email não é válido", async () => {
    const user = userEvent.setup();
    await user.type(screen.getByPlaceholderText("seu@email.com"), "nao-e-email");
    await user.click(
      screen.getByRole("button", { name: /Enviar via WhatsApp/i })
    );
    await waitFor(() => {
      expect(screen.getByText(/Email inválido/i)).toBeInTheDocument();
    });
  });

  // --- VALIDAÇÃO: mensagem muito curta ---
  it("exibe erro quando a mensagem tem menos de 10 caracteres", async () => {
    const user = userEvent.setup();
    await user.type(screen.getByPlaceholderText(/Descreva o serviço/i), "curta");
    await user.click(
      screen.getByRole("button", { name: /Enviar via WhatsApp/i })
    );
    await waitFor(() => {
      expect(
        screen.getByText(/Mensagem deve ter ao menos 10 caracteres/i)
      ).toBeInTheDocument();
    });
  });

  // --- SUBMIT VÁLIDO: abre WhatsApp ---
  it("abre WhatsApp com os dados corretos ao submeter um formulário válido", async () => {
    await fillAndSubmit(
      "João Silva",
      "joao@email.com",
      "Preciso de um orçamento para polimento completo."
    );
    await waitFor(() => {
      expect(openMock).toHaveBeenCalledTimes(1);
    });
    const [url] = openMock.mock.calls[0];
    expect(url).toMatch(/^https:\/\/wa\.me\//);
    expect(url).toContain("Jo%C3%A3o%20Silva"); // "João Silva" encoded
    expect(url).toContain("joao%40email.com"); // email encoded
  });

  // --- SUBMIT VÁLIDO: feedback visual ---
  it("exibe mensagem de redirecionamento após submit bem-sucedido", async () => {
    await fillAndSubmit();
    await waitFor(() => {
      expect(
        screen.getByText(/Redirecionando para o WhatsApp/i)
      ).toBeInTheDocument();
    });
  });

  // --- SUBMIT VÁLIDO: limpa o formulário ---
  it("limpa os campos após submit bem-sucedido", async () => {
    await fillAndSubmit();
    await waitFor(() => {
      expect(screen.getByPlaceholderText("Seu nome")).toHaveValue("");
      expect(screen.getByPlaceholderText("seu@email.com")).toHaveValue("");
    });
  });
});
