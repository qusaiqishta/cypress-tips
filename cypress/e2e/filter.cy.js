describe('Filter Table Elements',()=>{
   before(()=>{
    cy.visit('/');
   })
    it('rturn specefic td using callback',()=>{
        cy.get('table tr').find('td').filter((k,tr)=>tr.innerText==='Magazzini Alimentari Riuniti')
    });

    it('return specific td using css contains selector',()=>{
        cy.get('table tr td').filter(':contains(Magazzini Alimentari Riuniti)')
    })

    it('get odd lists using jquery',()=>{
        cy.get('ul li').filter(':odd')
    });

    it('select specific ones using jquery',()=>{
        cy.get('ul li').filter(':eq(1),:eq(2)')
    });

    it('select all elements with index gt 1 and lt 3',()=>{
        cy.get('ul li').filter(':gt(1)').filter(':lt(3)')
    })

    it('confirm table column order',()=>{
        const getTexts=($el)=>{
            return Cypress._.map($el,'innerText')
        }
        const target=['Company','Contact','Country'];

        cy.get('table th').each((column,index)=>{
                  expect(getTexts(column)[0]).to.eq(target[index])
        })
    })

    it('confirm table column order 2',()=>{
        const target=['Company','Contact','Country'];

        cy.get('table th').then(ele=>{
            return Cypress.$.makeArray(ele).map(ele=>ele.innerText)
        }).should('deep.equal',target)
    })
})