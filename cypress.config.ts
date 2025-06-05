import { defineConfig } from 'cypress'

export default defineConfig({
    e2e: {
        baseUrl: 'http://localhost:3000',
        specPattern: 'cypress/e2e/**/*.cy.{js,ts}',
        supportFile: 'cypress/support/e2e.ts',
        screenshotOnRunFailure: true,
        screenshotsFolder: 'cypress/screenshots',
        reporter: 'mochawesome',
        reporterOptions: {
            reportDir: 'cypress/reports',
            overwrite: true,
            html: true,
            json: false
        },
        setupNodeEvents(on, config) {
            // implement node event listeners here if needed
            return config
        },
    },
})


