describe('Check An Array if it include onther array',()=>{
    const contries =['jordan','america','qatar','israel'];
    const list=['jordan','israel'];
    it('Loop over smaller array',()=>{
        list.forEach(country=>{
            expect(contries).to.include(country);
        })
    })

    it(' built in difference method',()=>{
        const differences=Cypress._.difference(list,contries) // is there anything in list not in contries??
        expect(differences).to.be.empty
    })
})