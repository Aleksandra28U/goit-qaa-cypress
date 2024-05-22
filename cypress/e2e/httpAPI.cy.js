describe("httpbin API tests", () => {
  const request = {
    url: "https://httpbin.org",
  };

  it("response code should be 200", () => {
    cy.request(request).then((response) => {
      const status = response.status;

      assert.equal(200, status);
    });
  });

  it("test random ids", () => {
    for (let i = 0; i < 10; i++) {
      const randomId = getRandomInt(10000000);
      const request = {
        url: "https://httpbin.org",
        id: randomId,
      };
      cy.request(request).then((response) => {
        assert.isTrue(response.status == 200);
      });
    }
  });

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  it("test duration", () => {
    cy.request(request).then((response) => {
      // dla 150 to za mało - przynajmniej u mnie
      assert.isTrue(response.duration <= 1000);
    });
  });

  it("set response-headers", () => {
    cy.request(
      "GET",
      "https://httpbin.org/response-headers?freeform=formfree"
    ).then((response) => {
      expect(response.body).to.have.property("freeform", "formfree");
    });
  });

  it("try anything", () => {
    cy.request("POST", "https://httpbin.org/anything", {
      form: {},
    }).then((response) => {
      expect(response.body).to.have.property("form");
    });
  });

  it("delete anything", () => {
    cy.request("DELETE", "https://httpbin.org/anything", {}).then(
      (response) => {
        expect(response.status).to.eq(200);
      }
    );
  });

  it("Encoding", () => {
    cy.request("https://httpbin.org/encoding/utf8")
      .its("body")
      .should("include", "<h1>Unicode Demo</h1>");
  });
});
