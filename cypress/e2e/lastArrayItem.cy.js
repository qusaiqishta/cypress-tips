describe('Last Item In Array',()=>{
   const array=[1,2,3]
    it('old method',()=>{
     cy.wrap(array).then(arr=>{
        return arr[arr.length-1]
     }).should('equal',3)
    })

    it('using at',()=>{
        cy.wrap(array).invoke('at',-1).should('eq',3);
    })

    it('using last',()=>{
        cy.wrap(array).then(Cypress._.last).should('equal', 3)
    })
})