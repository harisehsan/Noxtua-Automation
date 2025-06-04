import { CounterPage } from '@pages/counterPage';

describe('Counter Component - Behavior and User Interactions', () => {
  const counterPage = new CounterPage();
  beforeEach(() => {
    counterPage.visitCounterPage();
  });

  it('should start with counter value 0', () => {
    counterPage.getCounter().should('contain.text', '0');
  });

  it('should increment a counter when increment button is clicked', () => {
    counterPage.getIncrementButton().click();
    counterPage.getCounter().should('contain.text', '1');
  });

  it('should not decrement below 0', () => {
    counterPage.getDecrementButton().click();
    counterPage.getCounter().should('contain.text', '0');
  });

  it('should increment and decrement correctly after multiple attempts', () => {
    counterPage.getIncrementButton().click().click().click();
    counterPage.getCounter().should('contain.text', '3');
    counterPage.getDecrementButton().click().click();
    counterPage.getCounter().should('contain.text', '1');
  });

  it('should handle a large number of increments and decrements', () => {
    for (let i = 0; i < 100; i++) {
      counterPage.getIncrementButton().click();
    }
    for (let i = 0; i < 50; i++) {
      counterPage.getDecrementButton().click();
    }
    counterPage.getCounter().should('contain.text', '50');
  });
});

