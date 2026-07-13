# Automan — Landing Page

> Landing page estática da **Automan Estética Automotiva Premium**, especializada em Martelinho de Ouro, Polimento Técnico, Vitrificação e Higienização Interna.

---

## Stack

| Camada | Tecnologia |
|---|---|
| Framework | [Vite](https://vitejs.dev/) + [React 18](https://react.dev/) |
| Linguagem | TypeScript 5.6 |
| Estilização | Tailwind CSS 3 + `tailwindcss-animate` |
| Componentes UI | [shadcn/ui](https://ui.shadcn.com/) (subset: button, card, carousel, form, input, label, textarea, toast, toaster) |
| Formulário | `react-hook-form` + `zod` |
| Animações | `framer-motion` + `embla-carousel` |
| Ícones | `lucide-react` + `react-icons` |
| Integração | **WhatsApp API via cliente** (`wa.me`) — sem backend, sem banco de dados |

> ⚠️ **Não há servidor, banco de dados ou API própria.** O formulário de contato abre diretamente o WhatsApp do usuário com a mensagem pré-preenchida.

---

## Pré-requisitos

- [Node.js](https://nodejs.org/) **≥ 18**
- npm **≥ 9**

---

## Rodando localmente

```bash
# 1. Clone o repositório
git clone https://github.com/henriquecarvalhodeandrade/automan.git
cd automan

# 2. Instale as dependências (na raiz do projeto)
npm install

# 3. Inicie o servidor de desenvolvimento
npm run dev
```

A aplicação estará disponível em **http://localhost:5173** por padrão.

> **Atenção:** os comandos `npm install` e `npm run dev` devem ser executados na **raiz do projeto** (`automan/`), não dentro de `client/`. O `vite.config.ts` aponta `root` para `client/` automaticamente.

---

## Scripts disponíveis

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento com HMR |
| `npm run build` | Gera o bundle de produção em `dist/` |
| `npm run preview` | Serve o bundle de produção localmente |
| `npm run check` | Verificação de tipos TypeScript |
| `npm run test` | Executa os testes unitários com Vitest |

---

## Estrutura do projeto

```
automan/
├── client/
│   └── src/
│       ├── components/        # Componentes da landing page
│       │   ├── ui/            # Componentes shadcn/ui (subset)
│       │   ├── Navbar.tsx
│       │   ├── Hero.tsx
│       │   ├── ContactForm.tsx
│       │   └── ...
│       ├── data/
│       │   └── site-data.ts   # Dados estáticos (serviços, parceiros, empresa)
│       ├── hooks/             # Hooks customizados (use-toast)
│       ├── lib/               # Utilitários (cn, etc.)
│       ├── pages/
│       │   └── Home.tsx       # Página única (SPA)
│       ├── App.tsx
│       └── main.tsx
├── tests/                     # Testes Vitest + Testing Library
│   ├── unit/
│   └── setup.ts
├── dist/                      # Bundle de produção (gerado pelo build)
├── vite.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── ARCHITECTURE.md
└── README.md
```

---

## Dados e configuração

Toda informação da empresa (nome, WhatsApp, endereço, redes sociais) está centralizada em:

```
client/src/data/site-data.ts → constante COMPANY
```

Para atualizar o número de WhatsApp ou qualquer dado da empresa, edite apenas esse arquivo.

---

## Deploy

Por ser uma aplicação 100% estática, o deploy pode ser feito em qualquer CDN:

- **Vercel**: conecte o repositório e configure `Output Directory = dist`
- **Netlify**: conecte o repositório e configure `Publish directory = dist`
- **GitHub Pages**: use o artefato `dist/` gerado pelo `npm run build`

---

## Licença

MIT © Automan Estética Automotiva Premium
