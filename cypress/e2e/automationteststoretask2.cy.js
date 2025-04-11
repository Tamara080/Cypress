describe('template spec', () => {
  it('Edit account details', () => {
    //Launch browser and login already registered user
    cy.visit('https://automationteststore.com') 
    cy.login('Tamara.k','Tamara&k1')
    cy.log('costume command')
    //Click on 'Edit account details' button
    cy.get('.nav-dash > :nth-child(1) > a > .fa').click()
    //Edit first name/last name and phone number
    cy.get('#AccountFrm_firstname').clear().type('Nino')
    cy.get('#AccountFrm_lastname').clear().type('Gagua')
    cy.get('#AccountFrm_telephone').clear().type('577585950')
    //press 'continue' button
    cy.get('.col-md-12 > .btn-orange').click()
    //verify that the changes are saved
    cy.get('.alert').should('contain', 'Success: Your account has been successfully updated.')
    /*არსებული მისამართის შეცვლა ან ახალი მისამართის დამატება
პაროლის შეცვლა*/
//press on 'Manage Address Book' button
cy.get('.side_account_list > :nth-child(5) > a').click()
//Press on 'Edit' btn
cy.get('tr > .pull-right > .btn').click()
//Change address details
cy.get('#AddressFrm_address_1').clear().type('Saingilo street')
cy.get('#AddressFrm_city').clear().type('Tbilisi')
cy.get('#AddressFrm_country_id').select('Georgia')
cy.get('#AddressFrm_zone_id').select('Tbilisi')
//add new address
cy.get('#AddressFrm_address_2').type('Bakhtrioni street')
//Press 'Continue' btn
cy.get('.col-md-12 > .btn-orange').click()
//verify that the changes are saved Your address has been successfully updated
cy.get('.alert').should('contain', 'Your address has been successfully updated')
//press on 'Change password' btn 
cy.get('.side_account_list > :nth-child(4) > a').click()
//change pw
cy.get('#PasswordFrm_current_password').type('Tamara&k1')
cy.get('#PasswordFrm_password').type('Tamara&k2')
cy.get('#PasswordFrm_confirm').type('Tamara&k2')
//press 'continue'btn
cy.get('.col-md-12 > .btn-orange').click() })
//დასაწყისში ისევ ძველი პაროლი წერია 
})