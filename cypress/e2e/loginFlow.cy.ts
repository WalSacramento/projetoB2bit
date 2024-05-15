describe('Login Page', () => {
  const sizes = [[375, 667], [768, 1024], [1280, 720]] 

  sizes.forEach((size) => {
    context(`Testing responsiveness on ${size[0]}x${size[1]} screen`, () => {
      beforeEach(() => {
        cy.viewport(size[0], size[1])
        cy.visit('/')
      })

      it('should display email and password fields', () => {
        cy.get('input[name=email]')
        cy.get('input[name=password]')
      })

      it('should have empty email and password fields', () => {
        cy.get('input[name=email]').should('have.value', '')
        cy.get('input[name=password]').should('have.value', '')
      })

      it('should validate the form', () => {
        cy.get('button[type=submit]').click()
        cy.get('div').should('contain', 'Campo obrigatório')
      })

      it('should validate the email field', () => {
        cy.get('input[name=email]').type('invalid email')
        cy.get('button[type=submit]').click()
        cy.get('div').should('contain', 'Email inválido')
      })

      it('should login with valid credentials', () => {
        cy.get('input[name=email]').type('cliente@youdrive.com')
        cy.get('input[name=password]').type('password')
        cy.get('button[type=submit]').click()
        cy.url().should('include', '/home') 
      })

      it('should show an error message with invalid credentials', () => {
        cy.get('input[name=email]').type('invalid@email.com')
        cy.get('input[name=password]').type('invalidpassword')
        cy.get('button[type=submit]').click()
        cy.get('body').should('contain', 'Usuário ou senha inválidos') 
      })

      it('should logout', () => {
        cy.get('input[name=email]').type('cliente@youdrive.com')
        cy.get('input[name=password]').type('password')
        cy.get('button[type=submit]').click()
        cy.url().should('include', '/home')
        cy.get('button').click()
        cy.url().should('include', '/')
      })
    })
  })
})