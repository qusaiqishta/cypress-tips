describe('get element index using jquery methond',()=>{

    it('test1',()=>{
        cy.visit('https://demoqa.com/');
        cy.get('.card:first-of-type').invoke('index').should('eq',0);
    })
})