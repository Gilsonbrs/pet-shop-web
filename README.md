
# 🐾 Pet Shop Inteligente

Uma aplicação web de Pet Shop com cadastro de pets, recomendações personalizadas e carrinho de compras, desenvolvida em HTML, CSS e JavaScript puro. Não há mais sistema de login ou autenticação: basta clicar em "Entrar" para acessar todas as funcionalidades.

### 🐕 Cadastro de Pets
- **Informações completas**: Nome, idade, espécie, raça, porte e nível de atividade
- **Múltiplos pets**: Possibilidade de cadastrar vários pets
- **Gerenciamento**: Adicionar e remover pets facilmente
- **Persistência**: Dados salvos no navegador

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
3. Clique em "Entrar" e aproveite!

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica e acessível
- **CSS3**: Design responsivo com gradientes e animações
- **JavaScript ES6+**: Programação orientada a objetos com classes
- **LocalStorage**: Persistência de dados no navegador

## 📱 Características da Interface

- **Design Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Interface Moderna**: Gradientes, sombras e animações suaves
- **UX Intuitiva**: Navegação clara entre pets, recomendações e carrinho
- **Feedback Visual**: Notificações e estados visuais claros

## 🎯 Estrutura do Projeto

```
pet-shop-web/
├── src/
│   ├── index.html          # Página principal
│   ├── styles/
│   │   └── main.css        # Estilos da aplicação
│   └── scripts/
│       └── app.js          # Lógica completa do sistema
└── README.md               # Documentação
```

## 🔧 Arquitetura do Sistema

### Classes Principais

#### PetManager
- Cadastro e gerenciamento de pets
- Sistema de recomendações inteligentes
- Persistência de dados

#### ShoppingCart
- Gerenciamento completo do carrinho
- Controle de quantidades e preços
- Persistência dos itens

### Sistema de Recomendações

O sistema analisa as características do pet para gerar recomendações personalizadas:

- **Espécie**: Cachorro, Gato, Ave, Peixe
- **Porte**: Pequeno, Médio, Grande
- **Nível de Atividade**: Baixo, Médio, Alto

**Exemplos de recomendações:**
- Cachorro grande com alta atividade → Ração energética + brinquedos interativos
- Gato pequeno com baixa atividade → Ração light + pelúcias macias
- Ave média → Gaiola espaçosa + brinquedos suspensos

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

- **Pets**: `pets_{email}` no localStorage
- **Carrinho**: `cart_{email}` no localStorage

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

**Desenvolvido como projeto de portfólio** - Demonstração de sistema de e-commerce inteligente com recomendações personalizadas para pets.