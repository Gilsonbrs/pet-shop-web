describe('Recomendações e Carrinho', () => {
    beforeEach(() => {
        // Acessa a aplicação e cadastra um pet antes de cada teste [cite: 9]
        cy.visit('http://127.0.0.1:5500/src/index.html');
        cy.get('#enter-btn').click();
        cy.get('#pet-name').type('Rex');
        cy.get('#pet-age').type('3');
        cy.get('#pet-species').select('cachorro');
        cy.get('#pet-breed').type('Golden Retriever');
        cy.get('#pet-size').select('grande');
        cy.get('#pet-activity').select('alto');
        cy.get('#pet-form').submit();
    });

    it('CT07: Deve exibir recomendações personalizadas para o pet', () => {
        // Clica em "Ver Recomendações" e verifica se os produtos são exibidos
        cy.get('.get-recommendations-btn').click();
        cy.get('.recommendations-container').should('be.visible').and('contain', 'Recomendações para Rex');
        cy.get('.recommendation-card').should('have.length.gt', 0);
    });

    it('CT08: Deve adicionar um produto ao carrinho', () => {
        // Clica para ver as recomendações e adiciona o primeiro produto ao carrinho
        cy.get('.get-recommendations-btn').click();
        cy.get('.recommendation-card').first().click();

        // Verifica se o contador do carrinho é atualizado [cite: 10]
        cy.get('#cart-count').should('contain', '1');
        // Verifica se o produto foi adicionado à lista do carrinho
        cy.get('.cart-items').should('contain', 'R$');
    });

    it('CT11: Deve finalizar a compra com sucesso', () => {
        // Adiciona um produto ao carrinho primeiro
        cy.get('.get-recommendations-btn').click();
        cy.get('.recommendation-card').first().click();

        // Clica no botão "Finalizar Compra" e verifica o resultado [cite: 13]
        cy.get('#checkout-btn').should('be.enabled').click();

        cy.on('window:alert', (text) => {
            expect(text).to.include('Compra finalizada com sucesso!');
        });

        // Verifica se o carrinho está vazio após a finalização
        cy.get('#cart-count').should('contain', '0');
        cy.get('.empty-cart').should('be.visible');
    });

    it('CT12: Deve lidar com a remoção de pet limpando o carrinho', () => {
        // Adiciona um pet e um produto ao carrinho
        cy.get('.get-recommendations-btn').click();
        cy.get('.recommendation-card').first().click();
        cy.get('#cart-count').should('contain', '1');

        // Remove o pet cadastrado [cite: 14]
        cy.get('.remove-pet-btn').click();

        // Verifica se o carrinho foi limpo e o botão de checkout desabilitado
        cy.get('#cart-count').should('contain', '0');
        cy.get('.empty-cart').should('be.visible');
        cy.get('#checkout-btn').should('be.disabled');
    });
});