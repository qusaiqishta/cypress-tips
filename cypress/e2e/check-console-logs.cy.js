describe('check console log erros', () => {

    it('fail the test if console contains erros', () => {
        cy.visit('/')
        console.log('started')
        // change to 1 to see the test fail
        if (Math.random() < 1) {
            console.log('Random error')
        } else {
            console.log('All is good')
        }

        cy.window()
            .its('console')
            .then((console) => {
                cy.spy(console, 'log').as('log')
            })
        // perform some action or give app time to
        // do its thing that might log an error message
        cy.wait(2000)
        // check the logs by going through all recorded calls
        cy.get('@log')
            .invoke('getCalls')
            .then((calls) => {
                // open the DevTools to see the dumped table
                console.table(calls)
            })
            // cy.each can work with an array of objects
            .each((call) => {
                // inspect each console.log argument
                call.args.forEach((arg) => {
                    expect(arg).to.not.contain('error')
                })
            })
        })


        it('stub console log', () => {
            setTimeout(() => {
                console.log('started')
                // change to 1 to see the test fail
                if (Math.random() < 1) {
                    console.log('Random error')
                } else {
                    console.log('All is good')
                }
            }, 100)
            cy.window()
                .its('console')
                .then((console) => {
                    cy.stub(console, 'log').callsFake((...args) => {
                        args.forEach((arg) => {
                            expect(arg).to.not.contain('error')
                        })
                        // all is good, call the original log method
                        console.log.wrappedMethod(...args)
                    })
                })
            // perform some action or give app time to
            // do its thing that might log an error message
    })
})