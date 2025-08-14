# 🐾 Pet Shop Inteligente

Uma aplicação web completa de Pet Shop com sistema de login, cadastro de pets e recomendações personalizadas baseadas nas características de cada animal. Desenvolvida em HTML, CSS e JavaScript puro.

## ✨ Funcionalidades Principais

### 🔐 Sistema de Autenticação
- **Registro de usuários**: Criação de conta com nome, email e senha
- **Login seguro**: Autenticação com email e senha
- **Sessão persistente**: Mantém usuário logado entre navegações
- **Logout**: Encerramento seguro da sessão

### 🐕 Cadastro de Pets
- **Informações completas**: Nome, idade, espécie, raça, porte e nível de atividade
- **Múltiplos pets**: Possibilidade de cadastrar vários pets por usuário
- **Gerenciamento**: Adicionar e remover pets facilmente
- **Persistência**: Dados salvos por usuário

### 🎯 Recomendações Inteligentes
- **Personalizadas**: Baseadas nas características do pet
- **Por espécie**: Cachorro, Gato, Ave e Peixe
- **Por categoria**: Ração, Brinquedos e Acessórios
- **Por características**: Porte (pequeno, médio, grande) e nível de atividade (baixo, médio, alto)

### 🛒 Carrinho de Compras
- **Adição de produtos**: Dos cards de recomendação
- **Controle de quantidade**: Botões + e - para cada item
- **Remoção individual**: Botão remover para cada produto
- **Limpeza total**: Botão para esvaziar carrinho
- **Totalização**: Cálculo automático do valor total
- **Finalização**: Processo de checkout simulado

## 🚀 Como Executar

1. Clone ou baixe este repositório
2. Abra o arquivo `src/index.html` em qualquer navegador moderno
3. Crie uma conta ou faça login
4. Cadastre seus pets e receba recomendações personalizadas!

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica e acessível
- **CSS3**: Design responsivo com gradientes e animações
- **JavaScript ES6+**: Programação orientada a objetos com classes
- **LocalStorage**: Persistência de dados por usuário

## 📱 Características da Interface

- **Design Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Interface Moderna**: Gradientes, sombras e animações suaves
- **UX Intuitiva**: Navegação clara entre login, pets e recomendações
- **Feedback Visual**: Notificações e estados visuais claros

## 🎯 Estrutura do Projeto

```
pet-shop-app/
├── src/
│   ├── index.html          # Página principal com login e app
│   ├── styles/
│   │   └── main.css        # Estilos da aplicação
│   └── scripts/
│       └── app.js          # Lógica completa do sistema
└── README.md               # Documentação
```

## 🔧 Arquitetura do Sistema

### Classes Principais

#### AuthSystem
- Gerenciamento de usuários e autenticação
- Registro e login de usuários
- Controle de sessão

#### PetManager
- Cadastro e gerenciamento de pets
- Sistema de recomendações inteligentes
- Persistência de dados por usuário

#### ShoppingCart
- Gerenciamento completo do carrinho
- Controle de quantidades e preços
- Persistência por usuário

### Sistema de Recomendações

O sistema analisa as características do pet para gerar recomendações personalizadas:

- **Espécie**: Cachorro, Gato, Ave, Peixe
- **Porte**: Pequeno, Médio, Grande
- **Nível de Atividade**: Baixo, Médio, Alto

**Exemplos de recomendações:**
- Cachorro grande com alta atividade → Ração energética + brinquedos interativos
- Gato pequeno com baixa atividade → Ração light + pelúcias macias
- Ave média → Gaiola espaçosa + brinquedos suspensos

## 🎨 Design System

- **Cores**: Gradiente roxo/azul (#667eea → #764ba2)
- **Tipografia**: Segoe UI para melhor legibilidade
- **Espaçamento**: Sistema consistente de padding/margin
- **Animações**: Transições suaves e feedback visual

## 📊 Produtos Disponíveis

### Cachorros
- **Rações**: Premium Adulto, Especial Filhotes, Light, Energética
- **Brinquedos**: Bola resistente, Osso de nylon, Interativo, Pelúcia
- **Acessórios**: Coleira, Guia retrátil, Caminha, Comedouro automático

### Gatos
- **Rações**: Premium Adulto, Especial Filhotes, Light, Sabor Peixe
- **Brinquedos**: Varinha com penas, Bolinhas, Arranhador, Laser
- **Acessórios**: Caixa de areia, Comedouro elevado, Caminha, Transportadora

### Aves
- **Rações**: Mistura de sementes, Extrusada
- **Brinquedos**: Suspenso, Escada de madeira
- **Acessórios**: Gaiola espaçosa, Bebedouro automático

### Peixes
- **Rações**: Flocos premium, Granulada
- **Brinquedos**: Planta artificial, Castelo decorativo
- **Acessórios**: Aquário 50L, Filtro biológico

## 🔒 Armazenamento

- **Usuários**: `petShopUsers` no localStorage
- **Sessão atual**: `currentUser` no localStorage
- **Pets por usuário**: `pets_{email}` no localStorage
- **Carrinho por usuário**: `cart_{email}` no localStorage

## 📱 Responsividade

- **Desktop**: Layout em 3 colunas (Pets, Recomendações, Carrinho)
- **Tablet**: Layout em 2 colunas com carrinho ocupando largura total
- **Mobile**: Layout em coluna única com carrinho no topo

## 🚀 Próximos Passos Sugeridos

- Integração com API de produtos reais
- Sistema de avaliações e reviews
- Histórico de compras
- Notificações push
- Integração com veterinários
- Sistema de agendamento de serviços

---

**Desenvolvido como projeto de portfólio** - Demonstração completa de sistema de e-commerce inteligente com recomendações personalizadas para pets.