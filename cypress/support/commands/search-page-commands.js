import { SEARCH_PAGE } from '../locators';

Cypress.Commands.add('validateSearchPage', (query) => {
  cy.get(SEARCH_PAGE.PAGE_TITLE).should('have.text', 'Search Results /');
  cy.get(SEARCH_PAGE.SEARCH_QUERY_TITLE).should('have.text', query);
});
