describe('Gerenciamento de Pets', () => {
    beforeEach(() => {
        // Acessa a aplicação antes de cada teste de pet
        cy.visit('http://127.0.0.1:5500/src/index.html');
        cy.get('#enter-btn').click();
    });

    it('CT03: Deve cadastrar um pet com dados válidos', () => {
        // Preenche o formulário com dados válidos [cite: 5]
        cy.get('#pet-name').type('Rex');
        cy.get('#pet-age').type('3');
        cy.get('#pet-species').select('cachorro');
        cy.get('#pet-breed').type('Golden Retriever');
        cy.get('#pet-size').select('grande');
        cy.get('#pet-activity').select('alto');
        cy.get('#pet-form').submit();

        // Verifica a mensagem de sucesso
        cy.on('window:alert', (text) => {
            expect(text).to.eq('Pet adicionado com sucesso!');
        });
        // Verifica se o pet aparece na lista de pets
        cy.get('.pet-card').should('have.length', 1).and('contain', 'Rex');
    });

    it('CT05: Deve remover um pet da lista', () => {
        // Primeiro, cadastra um pet para poder removê-lo
        cy.get('#pet-name').type('Bartolomeu');
        cy.get('#pet-age').type('5');
        cy.get('#pet-species').select('gato');
        cy.get('#pet-breed').type('Siamês');
        cy.get('#pet-size').select('pequeno');
        cy.get('#pet-activity').select('baixo');
        cy.get('#pet-form').submit();

        // Clica no botão "Remover" e verifica se o pet desaparece da lista [cite: 7]
        cy.get('.pet-card').should('contain', 'Bartolomeu');
        cy.get('.pet-card .remove-pet-btn').click();
        cy.get('.pet-card').should('not.exist');
        cy.get('.no-pets-message').should('be.visible');
    });
});