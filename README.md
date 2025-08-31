

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

#### Exemplo com Live Server (VS Code)
1. Instale a extensão "Live Server".
2. Clique com o botão direito em `src/index.html` e escolha "Open with Live Server".
3. Acesse a aplicação pelo navegador no endereço exibido (ex: `http://127.0.0.1:5500/src/index.html`).


## 🧪 Testes E2E com Cypress

O projeto inclui testes end‑to‑end com Cypress para as principais funcionalidades:

- Cadastro e remoção de pets
- Recomendações personalizadas
- Carrinho de compras (adicionar, remover, limpar, finalizar)
- Logout e fluxo de telas

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

> **Dica:** Se estiver usando Windows e o caminho do projeto tiver espaços (ex: `C:\Users\Gilson Rodrigues\...`), pode ocorrer erro ao abrir o Cypress. Recomenda-se clonar o projeto em um caminho sem espaços ou usar aspas no terminal.

#### Servindo a aplicação para testes
Os testes esperam a aplicação rodando em `http://127.0.0.1:5500/src/index.html` (Live Server padrão). Se necessário, ajuste a `baseUrl` em `cypress.config.js`.


## 🗂️ Estrutura do projeto

```
pet-shop-web/
├── cypress/                 # Testes E2E
│   ├── e2e/
│   │   ├── CadastroPet.cy.js
│   │   ├── CarrinhoELogout.cy.js
│   │   ├── Principal.cy.js
│   │   └── Recomendacoes.cy.js
│   ├── fixtures/
│   │   └── example.json
│   └── support/
│       ├── commands.js
│       └── e2e.js
├── src/
│   ├── index.html           # Página principal
│   ├── data/
│   │   └── pets.json        # Exemplo de dados de pets
│   ├── scripts/
│   │   └── app.js           # Lógica do sistema (pets, recomendações e carrinho)
│   └── styles/
│       └── main.css         # Estilos da aplicação
├── cypress.config.js        # Configuração do Cypress
├── package.json
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