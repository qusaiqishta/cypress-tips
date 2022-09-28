// it is a way to run cypress commands until a predicat function returns true
import { recurse, each } from 'cypress-recurse';
describe('cypress recurse', () => {

    it('gets 7', () => {
        recurse(
            () => cy.task('randomNumber'),
            (n) => n === 7,
            {
                log: true,
                limit: 50, // max number of iterations
                timeout: 30000, // time limit in ms
                delay: 300, // delay before next iteration, ms
            }
        )
    });

    it('works for 4', () => {
        recurse(
            () => cy.wrap(4),
            (x) => expect(x).to.eq(4)
        ).should('equal', 4)
    })

    it('each', () => {
        const numbers = [1, 2, 3];
        cy.wrap(numbers).then(
            each(
                (x) => x + 10,
                (x) => x == 13
            )
        ).should('deep.equal', [11, 12])
    })


    it.only('opens each accordion panel to find the button', () => {
        cy.visit('/')

        // first, check that we have accordion panels
        cy.get('.accordion')
        // prepare for clicking on the button
        cy.window().then((win) => cy.stub(win, 'alert').as('alert'))

        let k = 0
        recurse(
            () => {
                cy.get('.accordion').eq(k).click()
                return cy.get('.panel:visible button').should(Cypress._.noop)
            },
            ($button) => $button.length,
            {
                post() {
                    // close the current panel
                    cy.get('.accordion').eq(k).click()
                    // advance to the next panel
                    k += 1
                },
                timeout: 10_000,
                // open up to 10 panels
                limit: 10,
                log: 'found the button',
                delay: 1000,
            },
        )
            // the cypress-recurse yields the subject of the first function
            // and in our case it will be the found button
            .click()
        // confirm the application called the alert
        cy.get('@alert').should('have.been.calledOnce')

    })

})