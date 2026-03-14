describe('SauceDemo Add to Cart', () => {
  it('adds first item to cart', () => {
    cy.visit('https://www.saucedemo.com')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()

    // Add first item to cart
    cy.get('.inventory_item:first .btn_inventory').click()

    // Check cart has 1 item
    cy.get('.shopping_cart_badge').should('have.text', '1')
  })
})