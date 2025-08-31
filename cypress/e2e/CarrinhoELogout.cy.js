describe('Funcionalidades do Carrinho e Logout', () => {
    beforeEach(() => {
        // Acessa a aplicação e adiciona um item ao carrinho
        cy.visit('http://127.0.0.1:5500/src/index.html');
        cy.get('#enter-btn').click();

        // Garante que há um pet para gerar recomendações
        cy.get('#pet-name').type('Rex');
        cy.get('#pet-age').type('3');
        cy.get('#pet-species').select('cachorro');
        cy.get('#pet-breed').type('Golden Retriever');
        cy.get('#pet-size').select('grande');
        cy.get('#pet-activity').select('alto');
        cy.get('#pet-form').submit();
        cy.get('.get-recommendations-btn').click();
        cy.get('.recommendation-card').first().click();
    });

    it('CT09: Deve alterar a quantidade e remover um produto', () => {
        // Aumenta a quantidade do item no carrinho
        cy.get('.cart-item-controls .quantity-btn').contains('+').click();
        cy.get('.quantity-display').should('contain', '2');

        // Remove o item e verifica se o carrinho fica vazio [cite: 11]
        cy.get('.cart-item-controls .remove-item-btn').click();
        cy.get('.empty-cart').should('be.visible');
    });

    it('CT10: Deve limpar o carrinho com o botão "Limpar"', () => {
        // Clica no botão para limpar o carrinho e confirma a ação [cite: 12]
        cy.get('#clear-cart').click();
        cy.on('window:confirm', () => true); // Confirma o alert

        // Verifica se o carrinho está vazio
        cy.get('.empty-cart').should('be.visible');
        cy.get('#cart-count').should('contain', '0');
    });

    it('CT13: Deve fazer logout corretamente', () => {
        // Clica no botão "Sair" e verifica se retorna à tela inicial [cite: 15]
        cy.get('#logout-btn').click();
        cy.get('#auth-screen').should('not.have.class', 'hidden');
        cy.get('#main-app').should('have.class', 'hidden');
    });
});