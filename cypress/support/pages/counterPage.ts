export class CounterPage {
    visitCounterPage(): void {
        cy.visit('http://localhost:3000');
    }

    getCounter(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('#counter');
    }

    getIncrementButton(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('#increment-btn');
    }

    getDecrementButton(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('#decrement-btn');
    }
}