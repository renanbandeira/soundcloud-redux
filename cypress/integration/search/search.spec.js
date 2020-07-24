/* eslint-disable spaced-comment */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */
/// <reference types="cypress" />

describe('Search feature', function () {
  before(function () {
    cy.fixture('search/data').as('searchData');
  });
  it('Searches for coldplay', function () {
    cy.server();
    cy.route({
      method: 'GET',
      url: 'https://api.soundcloud.com/tracks?client_id=d02c42795f3bcac39f84eee0ae384b00&limit=60&linked_partitioning=1&q=**'
    }).as('searchRequest');

    cy.log(`Using query ${this.searchData.query}`);

    cy.visit('/');

    cy.validateHomePage();
    cy.searchTrack(this.searchData.query);
    cy.validateSearchPage(this.searchData.query);

    cy.wait('@searchRequest').then((xhr) => {
      expect(xhr.url.includes(this.searchData.query)).to.equal(true);
      expect(xhr.status).to.equal(200);
      expect(xhr.response.body.collection).to.have.length(54);
      // cy.get('.tracklist').screenshot('search-result');
    });
  });
});
