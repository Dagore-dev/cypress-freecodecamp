describe('Grudge List', () => {
    const grudgeListSelector = 'grudge-list'

    beforeEach(() => {
        cy.visit('/examples')
    })

    it('passes', () => {
        const exampleGrudge = 'Some grudge'
        const anotherGrudge = 'Another grudge'

        cy.contains(/add some grudges/i)

        cy.getDataTest(grudgeListSelector).within(() => {
            cy.get('li').should('have.length', 0)

            cy.get('input').type(exampleGrudge)
            cy.getDataTest('add').click()

            cy.get('li').should('have.length', 1)
            cy.contains(exampleGrudge)

            cy.get('input').type(anotherGrudge)
            cy.getDataTest('add').click()

            cy.get('li').should('have.length', 2)
            cy.contains(anotherGrudge)

            // Delete first.
            cy.get('li').its(0).within(() => {
                cy.get('button').click()
            })
            cy.get('li').should('have.length', 1)
            cy.should('not.contain', exampleGrudge)

        })
    })
})