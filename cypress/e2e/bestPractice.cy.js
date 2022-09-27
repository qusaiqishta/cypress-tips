
// 1: do not trust the data from the page
// 2: do not compute the result, know what to expect
// 3: control the page by typing our values
it('adds numbers via aliases - bad practice', () => {
    cy.visit('/')
    cy.get('[name=a]').invoke('val').then(parseInt).as('a')
    cy.get('[name=b]').invoke('val').then(parseInt).as('b')
    cy.get('#result')
      .invoke('text')
      .then(parseInt)
      .as('result')
      .then(function () {
        expect(this.a + this.b).to.equal(this.result)
      })
  })
  
  it('checks the page', () => {
    cy.get('[name=a]').should('have.value', '2')
    cy.get('[name=b]').should('have.value', '3')
    cy.contains('#result', '5')
  })
  
  it('handles empty inputs', () => {
    cy.get('[name=a]').clear()
    cy.get('[name=b]').clear()
    cy.contains('#result', 'empty')
  })
  
  it('adds the given numbers', () => {
    cy.get('[name=a]').clear().type(10)
    cy.get('[name=b]').clear().type(30)
    cy.contains('#result', '40')
  })
  