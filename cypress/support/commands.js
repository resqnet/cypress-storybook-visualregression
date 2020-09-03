import '@testing-library/cypress/add-commands';

// This is based on examples from Gleb's Working with Iframes Cypress blog post.
// See: https://www.cypress.io/blog/2020/02/12/working-with-iframes-in-cypress/
Cypress.Commands.add('getIframeBody', () => {
  cy.log('getIframeBody');

  // get the storybook's iframe > document > body,
  // then wraps the body element to allow for continued chaining
  // i.e. cy.getIframeBody().findBy(...)
  return cy
      .get('#storybook-preview-iframe')
      .its('0.contentDocument.body').should('not.be.empty')

      .then((body) => cy.wrap(body))
});

const compareSnapshotCommand = require('cypress-visual-regression/dist/command');

compareSnapshotCommand();
