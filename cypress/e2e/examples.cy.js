describe('Various examples', () => {
    it('multi-page testing', () => {
        const navItems = [
            {
                label: 'Why Cypress?',
                path: '/',
                dataTest: 'nav-why-cypress'
            },
            {
                label: 'Overview',
                path: '/overview',
                dataTest: 'nav-overview'
            },
            {
                label: 'Fundamentals',
                path: '/fundamentals',
                dataTest: 'nav-fundamentals'
            },
            {
                label: 'Forms',
                path: '/forms',
                dataTest: 'nav-forms'
            },
            {
                label: 'Examples',
                path: '/examples',
                dataTest: 'nav-examples'
            },
            {
                label: 'Component',
                path: '/component',
                dataTest: 'nav-component'
            },
            {
                label: 'Best Practices',
                path: '/best-practices',
                dataTest: 'nav-best-practices'
            },
        ]

        cy.visit('/')

        navItems.forEach(navItem => {
            cy.getDataTest(navItem.dataTest).click()
            cy.location('pathname').should('equal', navItem.path)
        });
    })

    it('intercepts', () => {
        cy.visit('/examples')

        cy.getDataTest('post-button').click()

        cy.intercept('POST', 'http://localhost:3000/examples', {
            fixture: 'example.json'
        })
    })
})