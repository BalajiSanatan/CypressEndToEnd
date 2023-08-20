export class registerPage{

    weblocators={

        firstName:'#input-firstname',
        lastName:'#input-lastname',
        email:'#input-email',
        telephone:'#input-telephone',
        password:'#input-password',
        conPassword:'#input-confirm',
        policyCheck:"[type='checkbox']",
        contiouneBtn:"[type='submit']"
    }

    openURL()
    {
        cy.visit('https://naveenautomationlabs.com/opencart/index.php?route=account/register')
    }
    enterFirstName(fName)
    {
        cy.get(this.weblocators.firstName).type(fName)
    }
    enterLastName(lName)
    {
        cy.get(this.weblocators.lastName).type(lName)
    }
    enterEmail(email)
    {
        cy.get(this.weblocators.email).type(email)
    }
    enterPhoneNo(phone)
    {
        cy.get(this.weblocators.telephone).type(phone)
    }
    enterPassword(password)
    {
        cy.get(this.weblocators.password).type(password)
    }
    enterConPassword(conpassword)
    {
        cy.get(this.weblocators.conPassword).type(conpassword)
    }
    selectPolicy()
    {
        cy.get(this.weblocators.policyCheck).check()
    }
    clickOnContioune()
    {
        cy.get(this.weblocators.contiouneBtn).click()
    }








}