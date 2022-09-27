describe('Accessibility Test',()=>{
    it('Accessibility Violations',()=>{
   cy.visit("https://www.almosafer.com/en")
   cy.injectAxe()
   cy.checkA11y('.sc-iVOTot.hsjsGs.carousel-wrap:nth-child(9) > .sc-jKJlTe.cjrpqw.container > .sc-cLQEGU.laMIkr.row > .sc-fHlXLc.eQrBlf.card-container > .sc-iKpIOp.dKgaVo > .sc-AqAhp.jHJFti > .sc-jOBXIr.ijaGEl > .slick-slider.slick-initialized.ltr > .slick-list > .slick-track > .slick-slide[data-index="4"][aria-hidden="true"]')
    })
})