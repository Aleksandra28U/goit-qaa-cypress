export class Login {
  constructor() {
    this.url = "https://www.edu.goit.global/account/login";
    this.emailInput = "#user_email";
    this.passwordInput = "#user_password";
    this.loginButton = 'button[type="submit"]';
  }
  openPage() {
    cy.visit(this.url);
  }
  logIn(email, password) {
    cy.get(this.emailInput).type(email);
    cy.get(this.passwordInput).type(password);
    cy.get(this.loginButton).click();
  }
}

//    timeout: 3000;
