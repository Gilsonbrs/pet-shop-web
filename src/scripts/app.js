// Sistema de Autenticação e Gerenciamento do Pet Shop Inteligente

// Dados de usuários (simulando banco de dados)
let users = JSON.parse(localStorage.getItem('petShopUsers')) || [];
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;

// Produtos disponíveis para recomendações
const products = {
    cachorro: {
        racao: [
            { id: 'dog_food_1', name: 'Ração Premium Cachorro Adulto', price: 89.90, category: 'ração', size: 'todos', activity: 'todos' },
            { id: 'dog_food_2', name: 'Ração Especial Filhotes', price: 95.50, category: 'ração', size: 'todos', activity: 'todos' },
            { id: 'dog_food_3', name: 'Ração Light Cachorro', price: 78.90, category: 'ração', size: 'todos', activity: 'baixo' },
            { id: 'dog_food_4', name: 'Ração Energética Ativo', price: 102.30, category: 'ração', size: 'grande', activity: 'alto' }
        ],
        brinquedos: [
            { id: 'dog_toy_1', name: 'Bola de Borracha Resistente', price: 25.90, category: 'brinquedo', size: 'todos', activity: 'todos' },
            { id: 'dog_toy_2', name: 'Osso de Nylon', price: 18.50, category: 'brinquedo', size: 'medio', activity: 'medio' },
            { id: 'dog_toy_3', name: 'Brinquedo Interativo', price: 45.90, category: 'brinquedo', size: 'todos', activity: 'alto' },
            { id: 'dog_toy_4', name: 'Pelúcia Macia', price: 32.00, category: 'brinquedo', size: 'pequeno', activity: 'baixo' }
        ],
        acessorios: [
            { id: 'dog_acc_1', name: 'Coleira Ajustável', price: 35.90, category: 'acessório', size: 'todos', activity: 'todos' },
            { id: 'dog_acc_2', name: 'Guia Retrátil', price: 89.90, category: 'acessório', size: 'medio', activity: 'alto' },
            { id: 'dog_acc_3', name: 'Caminha Confortável', price: 120.00, category: 'acessório', size: 'grande', activity: 'todos' },
            { id: 'dog_acc_4', name: 'Comedouro Automático', price: 150.00, category: 'acessório', size: 'todos', activity: 'todos' }
        ]
    },
    gato: {
        racao: [
            { id: 'cat_food_1', name: 'Ração Premium Gato Adulto', price: 75.90, category: 'ração', size: 'todos', activity: 'todos' },
            { id: 'cat_food_2', name: 'Ração Especial Filhotes', price: 82.50, category: 'ração', size: 'todos', activity: 'todos' },
            { id: 'cat_food_3', name: 'Ração Light Gato', price: 68.90, category: 'ração', size: 'todos', activity: 'baixo' },
            { id: 'cat_food_4', name: 'Ração Premium Sabor Peixe', price: 95.30, category: 'ração', size: 'todos', activity: 'medio' }
        ],
        brinquedos: [
            { id: 'cat_toy_1', name: 'Varinha com Penas', price: 22.90, category: 'brinquedo', size: 'todos', activity: 'todos' },
            { id: 'cat_toy_2', name: 'Bolinhas de Brinquedo', price: 15.50, category: 'brinquedo', size: 'todos', activity: 'medio' },
            { id: 'cat_toy_3', name: 'Arranhador Vertical', price: 85.90, category: 'brinquedo', size: 'todos', activity: 'todos' },
            { id: 'cat_toy_4', name: 'Brinquedo Interativo Laser', price: 55.00, category: 'brinquedo', size: 'todos', activity: 'alto' }
        ],
        acessorios: [
            { id: 'cat_acc_1', name: 'Caixa de Areia', price: 45.90, category: 'acessório', size: 'todos', activity: 'todos' },
            { id: 'cat_acc_2', name: 'Comedouro Elevado', price: 65.90, category: 'acessório', size: 'todos', activity: 'todos' },
            { id: 'cat_acc_3', name: 'Caminha Felpuda', price: 95.00, category: 'acessório', size: 'todos', activity: 'todos' },
            { id: 'cat_acc_4', name: 'Transportadora', price: 120.00, category: 'acessório', size: 'medio', activity: 'todos' }
        ]
    },
    ave: {
        racao: [
            { id: 'bird_food_1', name: 'Mistura de Sementes Premium', price: 28.90, category: 'ração', size: 'todos', activity: 'todos' },
            { id: 'bird_food_2', name: 'Ração Extrusada', price: 35.50, category: 'ração', size: 'todos', activity: 'todos' }
        ],
        brinquedos: [
            { id: 'bird_toy_1', name: 'Brinquedo Suspenso', price: 18.90, category: 'brinquedo', size: 'todos', activity: 'todos' },
            { id: 'bird_toy_2', name: 'Escada de Madeira', price: 25.50, category: 'brinquedo', size: 'todos', activity: 'medio' }
        ],
        acessorios: [
            { id: 'bird_acc_1', name: 'Gaiola Espaçosa', price: 180.00, category: 'acessório', size: 'todos', activity: 'todos' },
            { id: 'bird_acc_2', name: 'Bebedouro Automático', price: 45.90, category: 'acessório', size: 'todos', activity: 'todos' }
        ]
    },
    peixe: {
        racao: [
            { id: 'fish_food_1', name: 'Ração Flocos Premium', price: 22.90, category: 'ração', size: 'todos', activity: 'todos' },
            { id: 'fish_food_2', name: 'Ração Granulada', price: 28.50, category: 'ração', size: 'todos', activity: 'todos' }
        ],
        brinquedos: [
            { id: 'fish_toy_1', name: 'Planta Artificial', price: 35.90, category: 'brinquedo', size: 'todos', activity: 'todos' },
            { id: 'fish_toy_2', name: 'Castelo Decorativo', price: 42.50, category: 'brinquedo', size: 'todos', activity: 'todos' }
        ],
        acessorios: [
            { id: 'fish_acc_1', name: 'Aquário 50L', price: 250.00, category: 'acessório', size: 'todos', activity: 'todos' },
            { id: 'fish_acc_2', name: 'Filtro Biológico', price: 85.90, category: 'acessório', size: 'todos', activity: 'todos' }
        ]
    }
};

// Classe para gerenciar o carrinho de compras
class ShoppingCart {
    constructor() {
        this.items = [];
        this.loadFromStorage();
        this.updateCartCount();
    }

    addItem(product) {
        const existingItem = this.items.find(item => item.id === product.id);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.items.push({
                ...product,
                quantity: 1
            });
        }
        
        this.saveToStorage();
        this.updateCartCount();
        this.renderCart();
        
        this.showAddedToCartFeedback(product.name);
    }

    removeItem(productId) {
        this.items = this.items.filter(item => item.id !== productId);
        this.saveToStorage();
        this.updateCartCount();
        this.renderCart();
    }

    updateQuantity(productId, newQuantity) {
        if (newQuantity <= 0) {
            this.removeItem(productId);
            return;
        }
        
        const item = this.items.find(item => item.id === productId);
        if (item) {
            item.quantity = newQuantity;
            this.saveToStorage();
            this.updateCartCount();
            this.renderCart();
        }
    }

    clearCart() {
        this.items = [];
        this.saveToStorage();
        this.updateCartCount();
        this.renderCart();
    }

    getTotal() {
        return this.items.reduce((total, item) => {
            return total + (item.price * item.quantity);
        }, 0);
    }

    saveToStorage() {
        if (currentUser) {
            localStorage.setItem(`cart_${currentUser.email}`, JSON.stringify(this.items));
        }
    }

    loadFromStorage() {
        if (currentUser) {
            const savedCart = localStorage.getItem(`cart_${currentUser.email}`);
            if (savedCart) {
                this.items = JSON.parse(savedCart);
            }
        }
    }

    updateCartCount() {
        const cartCount = document.getElementById('cart-count');
        const totalItems = this.items.reduce((total, item) => total + item.quantity, 0);
        cartCount.textContent = totalItems;
    }

    renderCart() {
        const cartItems = document.getElementById('cart-items');
        const cartTotal = document.getElementById('cart-total');
        const checkoutBtn = document.getElementById('checkout-btn');

        if (this.items.length === 0) {
            cartItems.innerHTML = `
                <div class="empty-cart">
                    <div class="empty-cart-icon">🛒</div>
                    <p>Seu carrinho está vazio</p>
                    <p>Adicione produtos das recomendações!</p>
                </div>
            `;
            checkoutBtn.disabled = true;
        } else {
            cartItems.innerHTML = this.items.map(item => `
                <div class="cart-item" data-id="${item.id}">
                    <div class="cart-item-header">
                        <span class="cart-item-name">${item.name}</span>
                        <span class="cart-item-price">R$ ${item.price.toFixed(2)}</span>
                    </div>
                    <div class="cart-item-controls">
                        <button class="quantity-btn" onclick="cart.updateQuantity('${item.id}', ${item.quantity - 1})">-</button>
                        <span class="quantity-display">${item.quantity}</span>
                        <button class="quantity-btn" onclick="cart.updateQuantity('${item.id}', ${item.quantity + 1})">+</button>
                        <button class="remove-item-btn" onclick="cart.removeItem('${item.id}')">Remover</button>
                    </div>
                    <div class="cart-item-total">
                        Total: R$ ${(item.price * item.quantity).toFixed(2)}
                    </div>
                </div>
            `).join('');
            checkoutBtn.disabled = false;
        }

        cartTotal.textContent = this.getTotal().toFixed(2);
    }

    showAddedToCartFeedback(productName) {
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #48bb78;
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            z-index: 1000;
            animation: slideIn 0.3s ease-out;
        `;
        notification.textContent = `✅ ${productName} adicionado ao carrinho!`;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease-in';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 2000);
    }
}

// Classe para gerenciar pets
class PetManager {
    constructor() {
        this.pets = [];
        this.loadPets();
    }

    addPet(pet) {
        pet.id = Date.now().toString();
        this.pets.push(pet);
        this.savePets();
        this.renderPets();
        this.updateRecommendations();
    }

    removePet(petId) {
        this.pets = this.pets.filter(pet => pet.id !== petId);
        this.savePets();
        this.renderPets();
        this.updateRecommendations();
    }

    savePets() {
        if (currentUser) {
            localStorage.setItem(`pets_${currentUser.email}`, JSON.stringify(this.pets));
        }
    }

    loadPets() {
        if (currentUser) {
            const savedPets = localStorage.getItem(`pets_${currentUser.email}`);
            if (savedPets) {
                this.pets = JSON.parse(savedPets);
            }
        }
    }

    renderPets() {
        const petsList = document.getElementById('pets-list');
        
        if (this.pets.length === 0) {
            petsList.innerHTML = `
                <div class="no-pets-message">
                    <p>🐾 Você ainda não cadastrou nenhum pet</p>
                    <p>Adicione seu primeiro pet para receber recomendações!</p>
                </div>
            `;
        } else {
            petsList.innerHTML = this.pets.map(pet => `
                <div class="pet-card">
                    <div class="pet-info">
                        <div class="pet-name">${pet.name}</div>
                        <div class="pet-details">
                            ${pet.age} anos • ${pet.species} • ${pet.breed} • ${pet.size} • ${pet.activity}
                        </div>
                    </div>
                    <div class="pet-actions">
                        <button class="get-recommendations-btn" onclick="petManager.getRecommendations('${pet.id}')">
                            Ver Recomendações
                        </button>
                        <button class="remove-pet-btn" onclick="petManager.removePet('${pet.id}')">
                            Remover
                        </button>
                    </div>
                </div>
            `).join('');
        }
    }

    getRecommendations(petId) {
        const pet = this.pets.find(p => p.id === petId);
        if (!pet) return;

        const speciesProducts = products[pet.species];
        if (!speciesProducts) return;

        const recommendations = [];
        
        // Adicionar produtos de cada categoria
        Object.keys(speciesProducts).forEach(category => {
            const categoryProducts = speciesProducts[category].filter(product => {
                return (product.size === 'todos' || product.size === pet.size) &&
                       (product.activity === 'todos' || product.activity === pet.activity);
            });
            
            if (categoryProducts.length > 0) {
                recommendations.push(...categoryProducts.slice(0, 2)); // Máximo 2 por categoria
            }
        });

        this.showRecommendations(pet, recommendations);
    }

    showRecommendations(pet, recommendations) {
        const container = document.getElementById('recommendations-container');
        
        container.innerHTML = `
            <div class="pet-recommendations">
                <h3>🎯 Recomendações para ${pet.name}</h3>
                <div class="recommendations-grid">
                    ${recommendations.map(product => `
                        <div class="recommendation-card" onclick="cart.addItem(${JSON.stringify(product).replace(/"/g, '&quot;')})">
                            <div class="recommendation-category">${product.category}</div>
                            <div class="recommendation-name">${product.name}</div>
                            <div class="recommendation-price">R$ ${product.price.toFixed(2)}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    updateRecommendations() {
        const container = document.getElementById('recommendations-container');
        
        if (this.pets.length === 0) {
            container.innerHTML = `
                <div class="no-pets-message">
                    <p>🐾 Adicione seus pets para receber recomendações personalizadas!</p>
                </div>
            `;
        } else {
            // Mostrar recomendações do primeiro pet como exemplo
            this.getRecommendations(this.pets[0].id);
        }
    }
}

// Sistema de Autenticação
class AuthSystem {
    register(name, email, password) {
        if (users.find(user => user.email === email)) {
            throw new Error('Email já cadastrado!');
        }

        const user = { name, email, password };
        users.push(user);
        localStorage.setItem('petShopUsers', JSON.stringify(users));
        
        return user;
    }

    login(email, password) {
        const user = users.find(u => u.email === email && u.password === password);
        if (!user) {
            throw new Error('Email ou senha incorretos!');
        }
        
        return user;
    }

    logout() {
        currentUser = null;
        localStorage.removeItem('currentUser');
        this.showAuthScreen();
    }

    showAuthScreen() {
        document.getElementById('auth-screen').classList.remove('hidden');
        document.getElementById('main-app').classList.add('hidden');
    }

    showMainApp() {
        document.getElementById('auth-screen').classList.add('hidden');
        document.getElementById('main-app').classList.remove('hidden');
    }
}

// Variáveis globais
let cart;
let petManager;
let authSystem;

// Funções de interface
function showRegister() {
    document.getElementById('login-form').classList.add('hidden');
    document.getElementById('register-form').classList.remove('hidden');
}

function showLogin() {
    document.getElementById('register-form').classList.add('hidden');
    document.getElementById('login-form').classList.remove('hidden');
}

// Inicialização da aplicação
document.addEventListener('DOMContentLoaded', function() {
    authSystem = new AuthSystem();
    
    // Verificar se há usuário logado
    if (currentUser) {
        authSystem.showMainApp();
        initializeApp();
    } else {
        authSystem.showAuthScreen();
    }

    // Event listeners para autenticação
    document.getElementById('login-form').addEventListener('submit', handleLogin);
    document.getElementById('register-form').addEventListener('submit', handleRegister);
    document.getElementById('logout-btn').addEventListener('click', () => authSystem.logout());
    
    // Event listeners para pets
    document.getElementById('pet-form').addEventListener('submit', handleAddPet);
    
    // Event listeners para carrinho
    document.getElementById('clear-cart').addEventListener('click', () => {
        if (cart.items.length > 0) {
            if (confirm('Tem certeza que deseja limpar o carrinho?')) {
                cart.clearCart();
            }
        }
    });

    document.getElementById('checkout-btn').addEventListener('click', handleCheckout);
});

function initializeApp() {
    cart = new ShoppingCart();
    petManager = new PetManager();
    
    document.getElementById('user-name').textContent = currentUser.name;
    
    petManager.renderPets();
    petManager.updateRecommendations();
    cart.renderCart();
}

function handleLogin(e) {
    e.preventDefault();
    
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    try {
        currentUser = authSystem.login(email, password);
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        authSystem.showMainApp();
        initializeApp();
    } catch (error) {
        alert(error.message);
    }
}

function handleRegister(e) {
    e.preventDefault();
    
    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const confirm = document.getElementById('register-confirm').value;
    
    if (password !== confirm) {
        alert('As senhas não coincidem!');
        return;
    }
    
    try {
        currentUser = authSystem.register(name, email, password);
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        authSystem.showMainApp();
        initializeApp();
        alert('Conta criada com sucesso!');
    } catch (error) {
        alert(error.message);
    }
}

function handleAddPet(e) {
    e.preventDefault();
    
    const pet = {
        name: document.getElementById('pet-name').value,
        age: parseInt(document.getElementById('pet-age').value),
        species: document.getElementById('pet-species').value,
        breed: document.getElementById('pet-breed').value,
        size: document.getElementById('pet-size').value,
        activity: document.getElementById('pet-activity').value
    };
    
    petManager.addPet(pet);
    e.target.reset();
    alert('Pet adicionado com sucesso!');
}

function handleCheckout() {
    if (cart.items.length === 0) {
        alert('Carrinho vazio!');
        return;
    }
    
    const total = cart.getTotal();
    alert(`Compra finalizada com sucesso!\nTotal: R$ ${total.toFixed(2)}\n\nObrigado por escolher o Pet Shop Inteligente! 🐾`);
    cart.clearCart();
}

// Adicionar estilos CSS para animações
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
