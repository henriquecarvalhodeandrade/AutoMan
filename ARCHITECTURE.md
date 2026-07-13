# Automan — Arquitetura do Projeto

## Visão Geral

O Automan é uma **Landing Page 100% estática**. Não existe backend, servidor de aplicação nem banco de dados. Toda a lógica roda no navegador do cliente.

```
┌──────────────────────────────────────────────────────────┐
│                     NAVEGADOR DO CLIENTE                 │
│                                                          │
│   ┌─────────────────────────────────────────────────┐   │
│   │            React SPA (Vite + React 18)          │   │
│   │                                                 │   │
│   │   Navbar → Hero → About → Services →            │   │
│   │   Portfolio → Partners → ContactForm → Footer   │   │
│   └────────────────────┬────────────────────────────┘   │
│                        │                                 │
│                  onSubmit()                              │
│                        │                                 │
│          window.open("https://wa.me/...")                │
│                        │                                 │
└────────────────────────┼─────────────────────────────────┘
                         │
                         ▼
              ┌──────────────────┐
              │   WhatsApp Web   │  (serviço externo)
              │   wa.me/NÚMERO   │
              └──────────────────┘
```

**Não há:**
- ❌ Servidor Node/Express/Fastify
- ❌ Banco de dados (PostgreSQL, SQLite, etc.)
- ❌ API REST própria
- ❌ Autenticação / sessões
- ❌ Variáveis de ambiente em runtime

---

## Decisões Arquiteturais

### 1. Aplicação de Página Única (SPA) sem roteamento
O projeto possui **uma única rota** (`/`). Não há React Router. A navegação entre seções usa `react-scroll` para smooth-scroll por `id` de seções HTML.

### 2. Dados estáticos centralizados
Toda informação do negócio (serviços, parceiros, dados da empresa) vive em um único arquivo:

```
client/src/data/site-data.ts
```

Isto elimina a necessidade de um CMS ou API e facilita atualizações pontuais sem risco de quebrar outros módulos.

### 3. Integração WhatsApp via URL scheme
O ContactForm **não envia emails nem faz POST para nenhum endpoint.** Ao submeter o formulário:
1. Os dados são validados localmente com `zod` + `react-hook-form`
2. Uma URL `https://wa.me/{número}?text={mensagem_encoded}` é construída
3. `window.open()` abre essa URL em nova aba, redirecionando ao WhatsApp Web/App

### 4. shadcn/ui como subset mínimo
O projeto não instala shadcn/ui como dependência npm — os componentes são **copiados diretamente** para `client/src/components/ui/`. Apenas 9 dos 47 componentes originalmente instalados estão presentes, os restantes foram removidos na etapa de limpeza.

**Componentes mantidos:**

| Arquivo | Motivo |
|---|---|
| `button.tsx` | Usado pelo Carousel |
| `card.tsx` | Página 404 |
| `carousel.tsx` | Seção Parceiros + Home |
| `form.tsx` | ContactForm |
| `input.tsx` | ContactForm |
| `label.tsx` | Dependência de form.tsx |
| `textarea.tsx` | ContactForm |
| `toast.tsx` | Sistema de notificações |
| `toaster.tsx` | Montado em App.tsx |

---

## Estrutura de Arquivos

```
automan/                          ← raiz do projeto
│
├── vite.config.ts                ← config do Vite (root → client/, outDir → dist/)
├── tailwind.config.ts            ← design tokens (cores, fontes, animações)
├── tsconfig.json                 ← paths TypeScript (@/ → client/src/)
├── package.json                  ← scripts e dependências
│
├── client/                       ← código-fonte da aplicação
│   └── src/
│       ├── main.tsx              ← entry point (ReactDOM.createRoot)
│       ├── App.tsx               ← raiz da árvore React (Toaster + Home)
│       ├── index.css             ← design tokens CSS e estilos globais
│       │
│       ├── pages/
│       │   ├── Home.tsx          ← monta todas as seções em sequência
│       │   └── not-found.tsx     ← fallback 404
│       │
│       ├── components/
│       │   ├── Navbar.tsx        ← navegação com smooth-scroll
│       │   ├── Hero.tsx          ← seção hero com parallax (framer-motion)
│       │   ├── About.tsx         ← seção "Quem Somos"
│       │   ├── ServicesSection.tsx
│       │   ├── ServiceCard.tsx   ← card individual de serviço
│       │   ├── PortfolioSection.tsx ← galeria antes/depois
│       │   ├── Partners.tsx      ← carrossel de parceiros
│       │   ├── ContactForm.tsx   ← formulário → WhatsApp
│       │   ├── LocationContact.tsx
│       │   ├── Footer.tsx
│       │   └── ui/               ← subset shadcn/ui (9 arquivos)
│       │
│       ├── data/
│       │   └── site-data.ts      ← SERVICES, PARTNERS, PORTFOLIO, COMPANY
│       │
│       ├── hooks/
│       │   ├── use-toast.ts      ← hook de notificações
│       │   └── use-mobile.tsx    ← detecção de mobile
│       │
│       └── lib/
│           └── utils.ts          ← função cn() (clsx + tailwind-merge)
│
├── tests/                        ← suite de testes (Vitest + Testing Library)
│   ├── setup.ts
│   └── unit/
│       └── ContactForm.test.tsx
│
└── dist/                         ← bundle de produção (gerado, não versionado)
```

---

## Fluxo de Build

```
npm run build
      │
      ▼
  vite build
      │
      ├── root: client/
      ├── entry: client/index.html
      └── outDir: dist/
            │
            ├── index.html        (2 kB)
            ├── assets/index.css  (36 kB / 6.7 kB gzip)
            └── assets/index.js   (489 kB / 155 kB gzip)
```

O bundle final é 100% estático e pode ser servido por qualquer CDN sem configuração de servidor.

---

## Testes

A estratégia de testes adota **Vitest + Testing Library** para testes unitários/de componente:

- **Cobertura prioritária:** `ContactForm.tsx` — validação de schema, construção da URL WhatsApp e feedback visual
- **Abordagem:** testes de comportamento (o que o usuário vê/faz), não de implementação interna

Consulte [`tests/`](./tests/) para os casos de teste implementados.

---

## Principais Dependências e Seus Papéis

| Pacote | Papel |
|---|---|
| `react` / `react-dom` | Renderização da UI |
| `vite` / `@vitejs/plugin-react` | Dev server + bundler |
| `typescript` | Type safety |
| `tailwindcss` | Utilidades CSS |
| `framer-motion` | Animações de scroll e entrada |
| `embla-carousel-react` | Carrossel de parceiros |
| `react-hook-form` | Gerenciamento de estado do formulário |
| `zod` | Validação de schema |
| `@hookform/resolvers` | Bridge zod ↔ react-hook-form |
| `react-scroll` | Smooth-scroll por âncoras |
| `lucide-react` | Ícones SVG |
| `class-variance-authority` | Variantes de classes CSS |
| `clsx` + `tailwind-merge` | Composição condicional de classes |
