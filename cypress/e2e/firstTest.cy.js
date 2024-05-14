describe("Nasz pierwszy blok testów", () => {
  it("Test z wizytą w siedzibie LMS dla user888", () => {
    // cypress code
    cy.signIn("user888@gmail.com", "1234567890");
    cy.signOut();
  });

  it("Test z wizytą w siedzibie LMS dla testowyqa", () => {
    // cypress code
    cy.signIn("testowyqa@qa.team", "QA!automation-1");
    cy.signOut();
  });
});
