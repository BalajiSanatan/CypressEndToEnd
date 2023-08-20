///<reference types="Cypress"/>

import { registerPage } from "../../Pages/registerpage"

const regPage=new registerPage()

import registerData from "../../fixtures/registerData.json"
describe('register page test',()=>{

    it('test register',()=>{
        regPage.openURL()
        regPage.enterFirstName(registerData.FirstName)
        regPage.enterLastName(registerData.LastName)
        regPage.enterEmail(registerData.email)
        regPage.enterPhoneNo(registerData.telephone)
        regPage.enterPassword(registerData.password)
        regPage.enterConPassword(registerData.password)
        regPage.selectPolicy()
        regPage.clickOnContioune()



    })


    
})