describe("httpbin API tests", () => {
  const request = {
    method: "PUT",
    url: "https://httpbin.org/post",
    failOnStatusCode: false,
  };
  // - nie zawieszaj się w przypadku niepowodzenia testu

  it("failed response", () => {
    cy.request(request).then((response) => {
      assert.equal(405, response.status);
    });
  });
});
