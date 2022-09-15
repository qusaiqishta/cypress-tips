//with async, test can passed even when the assertions/commands inside it failed
//to avoid it use cypress-catch-async-tests plugin
import 'cypress-catch-async-tests'
var Promise = require('promise');

describe('Async behaviour',()=>{
it('sync callback',()=>{
    cy.wrap(2).should('eq',2);
});

function getBar(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve('bar')
        },1000)
    })
}

it('async callback', async ()=>{
    cy.contains(await getBar())
})
})