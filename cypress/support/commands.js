// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("signIn", (email, password) => {
  cy.visit("https://www.edu.goit.global/account/login");
  cy.get("#user_email").type(email);
  cy.get("#user_password").type(password);
  cy.get('[type="submit"]').click();
});

Cypress.Commands.add("signOut", () => {
  cy.get("#open-navigation-menu-mobile").click();
  cy.contains("Log out").click();
  // .scrollIntoView() - nie musi być
  //   cy.get(":nth-last-child > .next-bve2vl e1phyiqy2")
  //     .scrollIntoView()
  //     .should("be.visible")
  //     .click(); - nie łapie mi last child
});
