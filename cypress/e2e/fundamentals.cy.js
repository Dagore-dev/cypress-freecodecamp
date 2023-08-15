describe('Fundamentals test', () => {
    beforeEach(() => {
        cy.visit('/fundamentals')
    })

    it('Correct header text', () => {
        const headerSelector = 'fundamentals-header'
        const text = /Testing Fundamentals/i

        cy.getDataTest(headerSelector).contains(text)
    })

    it('Accordion works correctly', () => {
        const accordionSelector = 'accordion-item-1'
        const roleBtnSelector = 'div[role="button"]'
        const text = /Your tests will exist in a describe block/i

        cy.contains(text).should('not.be.visible')
        cy.getDataTest(accordionSelector).children(roleBtnSelector).click()
        cy.contains(text).should('be.visible')

        cy.getDataTest(accordionSelector).children(roleBtnSelector).click()
        cy.contains(text).should('not.be.visible')
    })
})