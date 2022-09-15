import 'cypress-if';

describe('Check commands execution order',()=>{
    it('calls else command befor finally',()=>{
    cy.wrap(1)
    .if('equals',2)
    .log('from if branch')
    .then(cy.spy().as('if'))
    .else()
    .log('from else branch')
    .then(cy.spy().as('else'))
    .finally()
    .log('finally')
    .then(cy.spy().as('finally'))
    cy.get('@else').should('have.been.calledOnce');
    cy.get('@if').should('not.be.called');
    cy.get('@finally').should('have.been.calledOnce');
    cy.get('@finally').then(fin=>{
        cy.get('@else').should('have.been.calledBefore',fin)
    })
    })
})