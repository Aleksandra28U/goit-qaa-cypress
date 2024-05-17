export class HomePage {
  constructor() {
    this.menuButton = "#open-navigation-menu-mobile";
    this.logoutButton = "Log out";
  }
  logOut() {
    cy.get(this.menuButton).click();
    cy.contains(this.logoutButton).click();
  }
}
