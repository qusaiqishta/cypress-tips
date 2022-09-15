

describe('interact with html tables',()=>{
    it('',()=>{
        cy.visit('https://www.techlistic.com/p/demo-selenium-practice.html');
        cy.get("table#customers tbody tr").then(tr=>{
            return tr.filter(':has( td:nth-child(1))')
        }).should('have.length',6)
    })
})