describe('Private Routes', () => {
  it('should redirect to login when not authenticated', () => {
    cy.visit('/home')
    cy.url().should('include', '/')
  })

  it('should allow access when authenticated', () => {
    cy.visit('/')
    cy.get('input[name=email]').type('cliente@youdrive.com')
    cy.get('input[name=password]').type('password')
    cy.get('button[type=submit]').click()
    cy.url().should('include', '/home')
    cy.visit('/home')
    cy.url().should('include', '/home')
  })
})
