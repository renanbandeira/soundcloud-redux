import { HOME_PAGE } from '../locators';

Cypress.Commands.add('validateHomePage', () => {
  cy.get(HOME_PAGE.PAGE_TITLE).should('have.text', 'Spotlight /');
});

Cypress.Commands.add('searchTrack', (query) => {
  cy.get(HOME_PAGE.SEARCH_ICON).click();
  cy.get(HOME_PAGE.SEARCH_INPUT).clear().type(`${query}{enter}`);
});
