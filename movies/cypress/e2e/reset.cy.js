describe('Reset Password Page', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.contains('Forgot Password').click(); 
    });

    it('should reset password with correct email', () => {
      
      cy.visit('/reset');
    
      // Type in the correct email
      cy.get('.reset__textBox').type('johndoe@gmail.com');
  
      // Assert that the email input has the correct value
      cy.get('.reset__textBox').should('have.value', 'johndoe@gmail.com');
  
      cy.wait(2000);
  
      cy.url().should('include', '/reset');
    });
  });