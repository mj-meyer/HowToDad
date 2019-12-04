// This spec is only to check presence of core elements.
describe('Home page contains', function() {
  beforeEach(() => {
    cy.visit('/');
  });

  it('logo', function() {
    cy.get('img[alt="How to Dad logo"]').should('be.visible');
  });

  it('header text', function() {
    cy.get('header > h1')
      .should('be.visible')
      .should('contain.text', 'The ULTIMATE Dad Jokes!');
    cy.get('header > p')
      .should('be.visible')
      .should('contain.text', 'Give the gift that NEVER gets old! 😜');
  });

  it('joke', function() {
    cy.get('.joke > p').should('be.visible');
  });

  it('joke actions', function() {
    cy.get('.joke-actions > button')
      .should('have.length', 3)
      .each(function(element) {
        // tslint:disable-next-line:no-unused-expression
        expect(element).to.be.visible;
        expect(element).to.contain.html('nb-icon');
      });
  });

  it('view all favourite jokes button', function() {
    cy.get('.joke-footer > button')
      .should('be.visible')
      .should('contain.html', 'nb-icon');
  });

  it('site footer ', function() {
    cy.get('nb-layout-footer p')
      .should('be.visible')
      .should('contain.text', '©2019 MJ Meyer |')
      .should('contain.html', 'button')
      .should('contain.html', 'nb-icon')
      .should('contain.text', 'View On Github');
  });
});
