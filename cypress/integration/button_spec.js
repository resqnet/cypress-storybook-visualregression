describe('Button Component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:6006/?path=/story/example-button--primary');
  });

  it('Button Click', () => {
    cy.getIframeBody().findByTestId('button').should('have.text', 'Button');
    cy.getIframeBody().findByTestId('button').click().should('have.text', 'hoge');
  });

  it('should display the Button correctly', () => {
    cy.getIframeBody().findByTestId('button').contains('Button');
    cy.compareSnapshot('button');
  });
});
