/* eslint-disable no-undef */
describe("test content", () => {
  it("should display the correct headers for the table", () => {
    cy.visit("http://localhost:5173");
    cy.get(`[data-testid="name-header-testid"]`).contains("Name");
    cy.get(`[data-testid="city-header-testid"]`).contains("City");
  });
});
