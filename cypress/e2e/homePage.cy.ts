describe('Homepage and profile info', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  const sizes = [[375, 667], [768, 1024], [1280, 720]] // mobile, tablet and desktop viewport sizes

  sizes.forEach((size) => {
    it(`should login and display profile info on ${size[0]}x${size[1]} screen`, () => {
      cy.viewport(size[0], size[1])

      cy.get('input[name=email]').type('cliente@youdrive.com')
      cy.get('input[name=password]').type('password')
      cy.get('button[type=submit]').click()
      cy.url().should('include', '/home')

      it('displays skeleton loading when isLoading is true', () => {
        cy.intercept('/api/user', { fixture: 'user.json' }) 
        cy.get('.w-full.flex.flex-col.items-center').should('exist')
        cy.get('.w-full.flex.flex-col.items-center').within(() => {
          cy.get('p').contains('Profile picture').should('exist')
          cy.get('.ant-skeleton-avatar').should('exist')
          cy.get('.bg-boxGray.appearance-none.border.rounded-lg.w-full.py-2.px-3.text-textBlack.leading-tight.focus:outline-none.focus:shadow-outline').should('exist')
        })
      })
      
    
      it('displays user data when isLoading is false', () => {
        cy.intercept('/api/user', { fixture: 'user.json' }) 
        cy.get('.w-full.flex.flex-col.items-center').should('exist')
        cy.get('.w-full.flex.flex-col.items-center').within(() => {
          cy.get('p').contains('Profile picture').should('exist')
          cy.get('img').should('exist')
          cy.get('.bg-boxGray.appearance-none.border.rounded-lg.w-full.py-4.px-3.text-textBlack.leading-tight.focus:outline-none.focus:shadow-outline').should('exist')
        })
      })
    })
  })
})