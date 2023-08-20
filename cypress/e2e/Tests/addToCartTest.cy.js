import { homepage } from "../../Pages/homepage";
const homepageObj=new homepage()

import testData from "../../fixtures/testData.json"

describe('test add to cart',()=>{

    before(()=>{
        cy.login1(testData.login.username,testData.login.password)
        })

    it('test automation for product',()=>{

        homepageObj.searchProduct(testData.product.productName)
        homepageObj.addToCart()
        homepageObj.verifySuccessMessage().should('contain',testData.product.productName)


    })
})