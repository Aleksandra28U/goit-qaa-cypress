describe("HTTP API headers tests", () => {
  it("should set the header", () => {
    cy.request({
      method: "GET",
      url: "https://httpbin.org/headers",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.headers).to.have.property("content-type");
      expect(response.headers["content-type"]).to.include("application/json");
    });
  });

  it("sending cookie", () => {
    cy.request({
      method: "GET",
      url: "https://httpbin.org/headers",
      headers: {
        Cookie: "mojePierwszeCiasteczko",
      },
    }).then((response) => {
      assert.equal(200, response.status);
      assert.equal("mojePierwszeCiasteczko", response.requestHeaders["Cookie"]);
    });
  });
});
