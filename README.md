
## 🐾 Pet Shop Inteligente

Aplicação web de Pet Shop com cadastro de pets, recomendações personalizadas e carrinho de compras, feita em HTML, CSS e JavaScript puro. Não há login: clique em "Entrar" para acessar todas as funcionalidades.

### ✨ Principais funcionalidades
- **Cadastro de Pets**: nome, idade, espécie, raça, porte e nível de atividade, com validação e múltiplos pets.
- **Recomendações Inteligentes**: produtos por espécie e perfil do pet (porte e atividade).
- **Carrinho Completo**: adicionar dos cards, alterar quantidade, remover, limpar e finalizar (simulado).
- **Persistência Local**: dados de pets e carrinho salvos no `localStorage` por usuário fake.
- **UI Responsiva**: layout moderno e adaptativo para desktop, tablet e mobile.

## 🚀 Como executar

### Opção rápida (sem Node)
1. Baixe ou clone o repositório.
2. Abra `src/index.html` em um navegador moderno.
3. Clique em "Entrar" e use o app.

### Opção recomendada (servidor local)
Use uma extensão como "Live Server" (VS Code) ou qualquer servidor estático para servir a pasta `src/`.

## 🧪 Testes E2E com Cypress

O projeto inclui testes end‑to‑end com Cypress.

### Pré‑requisitos
- Node.js 18+ e npm

### Instalação
```bash
npm ci
```

### Abrir o Cypress (modo interativo)
```bash
npx cypress open
```

### Rodar testes em modo headless
```bash
npx cypress run
```

Testes localizam a UI em arquivo local; se necessário, sirva `src/` em `http://localhost:PORT` e ajuste a baseUrl no `cypress.config.js`.

## 🗂️ Estrutura do projeto

```
pet-shop-web/
├── cypress/                 # Testes E2E
│   ├── e2e/
│   │   ├── CadastroPet.cy.js
│   │   └── Principal.cy.js
│   └── support/
├── src/
│   ├── index.html           # Página principal
│   ├── styles/
│   │   └── main.css         # Estilos da aplicação
│   └── scripts/
│       └── app.js           # Lógica do sistema (pets, recomendações e carrinho)
└── README.md
```

## 🔧 Arquitetura e componentes

- **`PetManager`**: gerencia cadastro/remoção de pets, persistência e recomendações por espécie/porte/atividade.
- **`ShoppingCart`**: gerencia itens do carrinho, quantidades, totalização, persistência e renderização.
- **Fluxo de telas**: tela inicial com botão "Entrar" → app principal (`showAuthScreen`/`showMainApp`).

## 💾 Persistência de dados
- **Pets**: `pets_{email}` no `localStorage`.
- **Carrinho**: `cart_{email}` no `localStorage`.

## 🛠️ Tecnologias
- **HTML5**, **CSS3**, **JavaScript ES6+**
- **Cypress** para testes E2E
- **LocalStorage** para persistência

## 📱 Responsividade
- **Desktop**: 3 colunas (Pets, Recomendações, Carrinho)
- **Tablet**: 2 colunas, carrinho em largura total quando necessário
- **Mobile**: coluna única, carrinho em destaque

## 🗺️ Roadmap (ideias futuras)
- Integração com API real de produtos
- Avaliações/reviews de produtos
- Histórico de compras
- Notificações push
- Agenda de serviços e integração com veterinários

## 🤝 Contribuição
Sugestões e PRs são bem-vindos. Abra uma issue descrevendo a proposta ou envie um PR diretamente.

## 📄 Licença
Este projeto está sob a licença ISC (ver `package.json`).