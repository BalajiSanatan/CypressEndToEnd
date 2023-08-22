///<reference types="Cypress"/>
import { faker } from '@faker-js/faker';
import { registerPage } from "../../Pages/registerpage"
import neatCsv from 'neat-csv';

const regPage=new registerPage()

const csv=require('neat-csv')
let regData

describe('read csv file for registration form',()=>{

    before(()=>{
        cy.fixture('users.csv')
        .then(csv)
        .then((data)=>
        {regData=data})
          })
      
          it('fill registration form using csv',()=>{
      console.log(regData)
        for(let i=0;i< regData.length;i++)
        {
        regPage.openURL()
        regPage.enterFirstName(regData[i]['firstName'])
        regPage.enterLastName(regData[i]['lastName'])
        regPage.enterEmail(faker.datatype.uuid()+ regData[i]['Email'])
        regPage.enterPhoneNo(regData[i]['Telephone'])
        regPage.enterPassword(regData[i]['Password'])
        regPage.enterConPassword(regData[i]['Password'])
        regPage.selectPolicy()
        regPage.clickOnContioune()
        cy.get('a[data-toggle="dropdown"]').first().click()
        cy.contains('Logout').click()

        }


    })
})
