describe("[Ultra Marketplace] Visit, adding products to cart and finally purchasing them", () => {

  it("Visits home", () => {
    cy.visit("/");
    cy.contains("Marketplace");
  });

  it("Should add 1 item in cart when click card", () => {

    // Default Basket count
    cy.visit("/");
    cy.get(".header__cart a span").contains('Basket 0');
    cy.wait(2000);

    // Get the first Card and after that basket count = 1
    cy.get(".card__name").eq(0).click();
    cy.wait(1000);
    cy.get(".header__cart a span").contains('Basket 1');
    cy.wait(1000);

    //Click in Cart
    cy.get(".header__cart").click();
    cy.wait(1000);

    // Check if we are in basket view
    cy.location('pathname').should('eq', '/basket')
    cy.get(".cart__products .product").should("have.length", 1);
    cy.wait(1000);

    // Click in Checkout
    cy.get(".checkout button").click();
    cy.wait(1000);
    cy.location('pathname').should('eq', '/checkout')
    cy.wait(1000);

    //Fill Checkout Form
    cy.get("#float-input-firstname").type("Jon");
    cy.get("#float-input-lastname").type("Doe");
    cy.get("#float-input-address").type("8082 Summer Street Upland, CA 91784");
    cy.get("#float-input-city").type("Paris");
    cy.get("#float-input-state").type("France");
    cy.get("#float-input-email").type("jondoe@ultra.io");
    cy.get("#submit-btn").click();
    cy.wait(1000);

    // Check if we are in bthank view
    cy.contains('Thank you for your purchase');


  });


});
