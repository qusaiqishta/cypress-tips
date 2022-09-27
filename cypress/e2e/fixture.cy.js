describe('working with fixtures',()=>{
   const users=require('../fixtures/example.json');
      
    it('using fuxure command',()=>{
        cy.fixture("example.json").then(fixture=>{
            expect(fixture,'should be array').to.be.an('array').and.deep.eq(users)
        })
    })

    it('using require',()=>{
        users.forEach(user=>{
            expect(user.email).to.eq('hello@cypress.io')
        })
    })
})