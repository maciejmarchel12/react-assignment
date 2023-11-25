// cypress/integration/register.spec.js

describe('Registration Form', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.contains('Register').click(); 
    });

    
    it('should show error for invalid email format', () => {

        cy.clearAllCookies()

        const testName = 'John Doe';
        const testEmail = 'invalid-email'; // Invalid email format
        const testPassword = 'password123';

        cy.get('.register__textBox').eq(0).type(testName); // Full Name
        cy.get('.register__textBox').eq(1).type(testEmail); // Email
        cy.get('.register__textBox').eq(2).type(testPassword); // Password
        cy.get('.register__btn').first().click(); // Click the register button

        cy.get('.error').should('contain', 'Invalid email format');
    });

    it('should register successfully with valid data', () => {

        cy.clearAllCookies()

        const testName = 'John Doe';
        const testEmail = 'john.doe@example.com';
        const testPassword = 'password123';

        cy.get('.register__textBox').eq(0).type(testName); // Full Name
        cy.get('.register__textBox').eq(1).type(testEmail); // Email
        cy.get('.register__textBox').eq(2).type(testPassword); // Password
        cy.get('.register__btn').first().click(); // Click the register button
    });

});