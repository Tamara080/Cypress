import data from '../fixtures/data.json'
describe('template spec', () =>

   it.only('Register User', () => { 
     //Launch browser
  cy.visit('https://www.automationexercise.com')
   //Verify that home page is visible successfully
 cy.get('.shop-menu > .nav > :nth-child(1) > a').should('be.visible')
  // Click on 'Signup / Login' button
  cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
  // //5. Verify 'New User Signup!' is visible
 cy.get('.signup-form > h2').should('have.text', 'New User Signup!')
  // //    6. Enter name and email address
 cy.get('[data-qa="signup-name"]').type(data.name)
 cy.get('[data-qa="signup-email"]').type(data.email)
  // //    7. Click 'Signup' button
   cy.get('[data-qa="signup-button"]').click()
  // //    8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
 cy.get(':nth-child(1) > b').should('have.text','Enter Account Information')
  //    9. Fill details: Title, Name, Email, Password, Date of birth
  cy.get('#id_gender2').click(data.title)
  cy.get('[data-qa="password"]').type(data.password)
  cy.get('[data-qa="days"]').select(data.day)
  cy.get('[data-qa="months"]').select(data.month)
  cy.get('[data-qa="years"]').select(data.year)
  // Select checkbox 'Sign up for our newsletter!'
   cy.get('#newsletter').click()
  // Select checkbox 'Receive special offers from our partners!'
   cy.get('#optin').click()
  // Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
  cy.get('[data-qa="first_name"]').type(data.firstName)
  cy.get('[data-qa="last_name"]').type(data.lastName)
  cy.get('[data-qa="company"]').type(data.Company)
  cy.get('[data-qa="address"]').type(data.Address)
  cy.get('[data-qa="address2"]').type(data.Address2)
  cy.get('[data-qa="country"]').select(data.Country)
  cy.get('[data-qa="state"]').type(data.State)
  cy.get('[data-qa="city"]').type(data.City)
  cy.get('[data-qa="zipcode"]').type(data.Zipcode)
  cy.get('[data-qa="mobile_number"]').type(data.mobileNumber)
    //   Click 'Create Account button'
   cy.get('[data-qa="create-account"]').click()
  //  Verify that 'ACCOUNT CREATED!' is visible
  cy.get('b').should('be.visible')
  //    Click 'Continue' button
  //   Verify that 'Logged in as username' is visible 
  }));

  //test case 2
it.only('Login User with correct email and password',() =>{
 // Navigate to url 'http://automationexercise.com'
  cy.visit('http://automationexercise.com')
 // Verify that home page is visible successfully
 cy.get('.shop-menu > .nav > :nth-child(1) > a').should('be.visible')
  
 cy.login(data.email, data.password)
 cy.log('command')
 // Verify that 'Logged in as username' is visible
  cy.get(':nth-child(10) > a').should('be.visible')
});

  // test case 3
it.only('Login User with incorrect email and password',() =>{
  // Navigate to url 'http://automationexercise.com'
   cy.visit('http://automationexercise.com')
  // Verify that home page is visible successfully
  cy.get('.shop-menu > .nav > :nth-child(1) > a').should('be.visible')
   // Click on 'Signup / Login' button
   cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
   //  Verify 'Login to your account' is visible
   cy.get('.login-form').should('be.visible')
    //  Enter incorrect email address and password
  cy.get('[data-qa="login-email"]').type('tako.tako@gmail.com')
  cy.get('[data-qa="login-password"]').type('1234543')
  //  Click 'login' button
  cy.get('[data-qa="login-button"]').click()

})
