//Test Case 1: Register User

describe('template spec', () => {
  it('Register User', () => {
  //1.Launch browser
  cy.visit('https://www.automationexercise.com')
  //2. Navigate to url 'http://automationexercise.com'
  //3. Verify that home page is visible successfully*/
  cy.get('.shop-menu > .nav > :nth-child(1) > a').should('be.visible')
  //4.Click on 'Signup / Login' button
   cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
  //5. Verify 'New User Signup!' is visible
  cy.get('.signup-form > h2').should('have.text', 'New User Signup!')
  //    6. Enter name and email address
  cy.get('[data-qa="signup-name"]').type('Tamar Kurtsikidze')
  cy.get('[data-qa="signup-email"]').type('kurtsikidzetako@gmail.com')
  //    7. Click 'Signup' button
  cy.get('[data-qa="signup-button"]').click()
  //    8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
  cy.get(':nth-child(1) > b').should('have.text','Enter Account Information')
  //    9. Fill details: Title, Name, Email, Password, Date of birth
  cy.get('#id_gender2').click()
  cy.get('[data-qa="password"]').type('080808')
  cy.get('[data-qa="days"]').select('8')
  cy.get('[data-qa="months"]').select('March')
  cy.get('[data-qa="years"]').select('2001')
  //    10. Select checkbox 'Sign up for our newsletter!'
  cy.get('#newsletter').click()
  //    11. Select checkbox 'Receive special offers from our partners!'
  cy.get('#optin').click()
  //    12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
  cy.get('[data-qa="first_name"]').type('Tamar')
  cy.get('[data-qa="last_name"]').type('Kurtsikidze')
  cy.get('[data-qa="company"]').type('Smart Academy')
  cy.get('[data-qa="address"]').type('Tbilisi')
  cy.get('[data-qa="address2"]').type('Riga')
  cy.get('[data-qa="country"]').select('Canada')
  cy.get('[data-qa="state"]').type('Alberta')
  cy.get('[data-qa="city"]').type('Edmonton')
  cy.get('[data-qa="zipcode"]').type('T5K 0A1')
  cy.get('[data-qa="mobile_number"]').type('57748300')
  //    13. Click 'Create Account button'
  cy.get('[data-qa="create-account"]').click()
  //    14. Verify that 'ACCOUNT CREATED!' is visible
  //    15. Click 'Continue' button
  //    16. Verify that 'Logged in as username' is visible
  //    17. Click 'Delete Account' button
  //    18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
  })
  

 
})