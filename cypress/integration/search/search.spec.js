/* eslint-disable spaced-comment */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */
/// <reference types="cypress" />

describe('Search feature', function () {
  before(function () {

  });
  it('Searches for coldplay', function () {
    cy.server();
    cy.route({
      method: 'GET',
      url: 'https://api.soundcloud.com/tracks?client_id=d02c42795f3bcac39f84eee0ae384b00&limit=60&linked_partitioning=1&q=**'
    }).as('searchRequest');

    cy.visit('/');

    cy.validateHomePage();
    cy.searchTrack('coldplay');
    cy.validateSearchPage('coldplay');

    cy.wait('@searchRequest').then((xhr) => {
      expect(xhr.status).to.equal(200);
      console.log(xhr);
    });
    cy.screenshot();
  });
});
