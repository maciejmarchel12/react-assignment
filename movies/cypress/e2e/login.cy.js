// cypress/integration/login.spec.js
describe('Login Page', () => {

  it('should display an error with incorrect email or password', () => {
    
     cy.clearAllCookies() //custom command
     // Visit the login page
     cy.visit('/');

     // Enter incorrect email and password
     cy.get('.login__textBox').eq(0).type('wrongemail@gmail.com');
     cy.get('.login__textBox').eq(1).type('wrongpassword');

     // Click on the login button
     cy.get('.login__btn').eq(0).click();

     // Check if an error message is displayed
     cy.get('.login__error').should('be.visible').contains('Invalid email or password');
    });

    it('should login with email and password', () => {
      // Visit the login page
      cy.visit('/');
  
      // Enter email and password
      cy.get('.login__textBox').eq(0).type('20093921@mail.wit.ie');
      cy.get('.login__textBox').eq(1).type('test1234');
  
      // Click on the login button
      cy.get('.login__btn').eq(0).click();
  
      // Wait for the navigation to happen (adjust the timeout as needed)
      cy.url().should('include', '/movies/homePage');
    });
  });