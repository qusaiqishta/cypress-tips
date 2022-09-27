describe('select multible elements that contains specific text',()=>{

    before(()=>{
        cy.visit('/')
    })
    it('contains method only returns the first match',()=>{
        cy.contains('apple').should('have.text','apple')
    })

    it('using jquery method',()=>{
        cy.get('li:contains(apple)').should('have.length',2)
    })
})