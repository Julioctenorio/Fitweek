# FitWeek 💪

Uma plataforma premium de fitness que oferece uma experiência completa de treino, nutrição e acompanhamento de performance em uma única aplicação.

## 🚀 Visão Geral

**FitWeek** é uma aplicação web moderna construída com as tecnologias mais recentes de frontend, projetada para ajudar usuários a alcançarem seus objetivos fitness através de:

- **Plano de Treinos Personalizados** - Workouts customizados adaptados ao nível e objetivos
- **Acompanhamento de Nutrição** - Controle de calorias, macronutrientes e refeições
- **Dashboard de Performance** - Visualização em tempo real de progresso e métricas
- **Perfil de Usuário** - Gerenciamento de dados pessoais e preferências

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org) - React com SSR/SSG
- **Linguagem**: [TypeScript](https://www.typescriptlang.org) - Type safety
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com) - Utility-first CSS
- **UI Components**: [Shadcn/ui](https://ui.shadcn.com) + [Radix UI](https://radix-ui.com)
- **Ícones**: [Lucide React](https://lucide.dev)
- **Linting**: [ESLint 9](https://eslint.org)
- **Compiler**: React Compiler (Babel plugin)

---

## 📋 Requisitos

- **Node.js** >= 18.0
- **npm** >= 9.0 (ou yarn/pnpm/bun)

---

## ⚙️ Instalação & Setup

### 1. Clone o repositório

```bash
git clone https://github.com/Julioctenorio/Fitweek.git
cd fitweek
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure variáveis de ambiente

Crie um arquivo `.env.local` na raiz do projeto (se necessário):

```bash
# Exemplo - adapte conforme sua configuração
# NEXT_PUBLIC_API_URL=http://localhost:3000
```

### 4. Execute o servidor de desenvolvimento

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador para ver a aplicação.

---

## 📁 Estrutura do Projeto

```
fitweek/
├── src/
│   ├── app/                    # App Router (Next.js 16)
│   │   ├── public/            # Páginas públicas (Home, Login, Register)
│   │   ├── app/               # Rotas protegidas (Dashboard, Workouts, etc)
│   │   ├── globals.css        # Estilos globais
│   │   └── layout.tsx         # Layout raiz
│   ├── components/            # Componentes React reutilizáveis
│   │   ├── ui/               # Componentes de UI (Button, etc)
│   │   ├── layout/           # Layout components (Header, Footer, Navbar)
│   │   └── features/         # Componentes de features (Auth, etc)
│   ├── lib/                  # Utilities e helpers
│   ├── hooks/                # Custom React hooks
│   ├── services/             # Serviços (API calls, etc)
│   ├── types/                # TypeScript types & interfaces
│   └── utils/                # Funções utilitárias
├── public/                   # Assets estáticos (imagens, ícones)
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.ts
```

---

## 🎨 Scripts Disponíveis

| Comando         | Descrição                          |
| --------------- | ---------------------------------- |
| `npm run dev`   | Inicia servidor de desenvolvimento |
| `npm run build` | Build otimizado para produção      |
| `npm start`     | Executa aplicação em produção      |
| `npm run lint`  | Valida código com ESLint           |

---

## 🔑 Principais Recursos

### Autenticação

- Login e registro de usuários
- Gerenciamento de sessões seguro
- Validação de formulários

### Dashboard

- Overview de performance
- Visualização de treinos próximos
- Estatísticas nutricionais

### Treinos (Workouts)

- Listagem e detalhes de exercícios
- Histórico de treinos realizados
- Progresso e evolução

### Nutrição

- Acompanhamento de refeições
- Cálculo de macronutrientes
- Metas nutricionais personalizadas

### Perfil

- Edição de dados pessoais
- Ajuste de preferências
- Configurações da conta

---

## 🎯 Desenvolvimento

### Adicionar novos componentes

Os componentes segem o padrão de organização:

```bash
src/components/
├── ui/              # Componentes básicos (Button, Input, etc)
├── layout/          # Layout (Header, Footer, Sidebar)
└── features/        # Features específicas (Auth, Workouts, etc)
```

### Adicionar novos tipos

Coloque as types em `src/types/`:

```typescript
// src/types/user.ts
export interface User {
  id: string;
  name: string;
  email: string;
}
```

### Usar Tailwind CSS

O projeto usa Tailwind v4 com `@import "tailwindcss"`:

```tsx
<div className="flex items-center gap-4 p-6 rounded-lg bg-slate-100">
  {/* conteúdo */}
</div>
```

---

## 🚀 Deploy

### Deploy na Vercel (Recomendado)

1. Push seu código para GitHub
2. Conecte seu repositório na [Vercel](https://vercel.com)
3. Vercel detectará automaticamente Next.js e fará o deploy

```bash
# Ou use Vercel CLI
npm i -g vercel
vercel
```

### Deploy em outros providers

O projeto pode ser deployado em qualquer servidor que suporte Node.js:

```bash
npm run build
npm start
```

---

## 🐛 Troubleshooting

### Problema: Componentes não aparecem

Verifique se os imports estão corretos:

```tsx
import { Button } from "@/components/ui/Button"; // ✅ Correto
```

### Problema: Tailwind CSS não está sendo aplicado

Certifique-se que o arquivo está incluído no `tailwind.config.ts`:

```ts
content: ["./src/**/*.{js,ts,jsx,tsx}"];
```

### Problema: Build falha

Limpe cache e reinstale dependências:

```bash
rm -rf .next node_modules package-lock.json
npm install
npm run build
```

---

## 📚 Recursos & Documentação

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Shadcn/ui Components](https://ui.shadcn.com)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

---

## 👥 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

---

## 📄 Licença

Este projeto está sob a licença MIT - veja o arquivo LICENSE para detalhes.

---

## 📞 Contato

**GitHub**: [Julioctenorio/Fitweek](https://github.com/Julioctenorio/Fitweek)

---

## 🙌 Agradecimentos

- Next.js team pela excelente framework
- Shadcn pela library de componentes
- Comunidade open source
