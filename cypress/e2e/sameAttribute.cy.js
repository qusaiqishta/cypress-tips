describe('Check the samilarity of attributes values for two elements',()=>{

    it('check elements have the same attributes value',()=>{
        cy.visit('/');
        cy.get('#div1')
        .invoke('attr', 'data-name')
        .should('be.a', 'string')
        .and('be.not.empty')
        .then(function (s) {
          cy.get('#div2').should('have.attr', 'data-name', s)
        })
    })
})