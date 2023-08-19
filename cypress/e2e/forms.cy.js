describe('form tests', () => {
    const inputDataSelector = 'subscribe-form'
    const btnDataSelector = 'subscribe-button'
    const waitTime = 3000

    beforeEach(() => {
        cy.visit('/forms')
        // Input alias.
        cy.getDataTest(inputDataSelector).find('input').as('subscribe-input')
    })

    it('Happy path', () => {
        const correctEmail = 'example@example.com'
        const successText = `Successfully subbed: ${correctEmail}`

        cy.get('@subscribe-input').type(correctEmail)

        cy.contains(successText).should('not.exist')

        cy.getDataTest(btnDataSelector).click()

        cy.contains(successText)

        cy.wait(waitTime)

        cy.contains(successText).should('not.exist')
    })

    it('Invalid email', () => {
        const incorrectEmail = 'example@example.io'
        const invalidEmailText = `Invalid email: ${incorrectEmail}!`

        cy.get('@subscribe-input').type(incorrectEmail)

        cy.contains(invalidEmailText).should('not.exist')

        cy.getDataTest(btnDataSelector).click()

        cy.contains(invalidEmailText)

        cy.wait(waitTime)

        cy.contains(invalidEmailText).should('not.exist')
    })

    it('Empty email', () => {
        const emptyEmailText = 'fail!'

        cy.get('@subscribe-input')

        cy.contains(emptyEmailText).should('not.exist')

        cy.getDataTest(btnDataSelector).click()

        cy.contains(emptyEmailText)

        cy.wait(waitTime)

        cy.contains(emptyEmailText).should('not.exist')
    })
})