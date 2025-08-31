describe('Pet Shop - Tela Inicial e Acesso', () => {

  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/src/index.html')
  })

  it('CT01 - Exibição da Tela Inicial', () => {
    cy.contains('🐾 Pet Shop Inteligente').should('be.visible')
    cy.contains('Seu pet merece o melhor! 🐕🐱').should('be.visible')
    cy.get('#enter-btn').should('be.visible').and('be.enabled')
  })

  it('CT02 - Acesso à Tela Principal', () => {
    cy.get('#enter-btn').should('be.visible').click()
    cy.get('#main-app').should('not.have.class', 'hidden')
    cy.get('#user-name').should('contain', 'Pai/Mãe de Pet');
    cy.get('#cart-count').should('contain', '0');
    cy.get('#logout-btn').should('be.visible').and('be.enabled');
  })

})
