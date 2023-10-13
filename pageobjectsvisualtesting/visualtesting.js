const By = require('selenium-webdriver')
const chai = require('chai')
const page = require('./halamanvisual')
const { existsSync, writeFileSync, readFileSync } = require('fs')
const {chaiImage} = require('chai-image')
chai.use(chaiImage )

const expected = `screenshots/expect/expected.png`
const result = `screenshots/hasil/test.png`

const expected2 = `screenshots/expect/expected2.png`
const result2 = `screenshots/hasil/test2.png`

const expected3 = `screenshots/expect/expected3.png`
const result3 = `screenshots/hasil/test3.png`

const expected4 = `screenshots/expect/expected4.png`
const result4 = `screenshots/hasil/test4.png`

const expected5 = `screenshots/expect/expected5.png`
const result5 = `screenshots/hasil/test5.png`

class visualtest extends page  {

    constructor (driver) {
        super(driver)
    }

    async open () {
        await this.buka('/')
    }
    
    async open2 () {
        await this.buka('/inventory.html')
    }
    
    async open3 () {
        await this.buka('/inventory-item.html?id=4')
    }
    
    async open4 () {
        await this.buka('/cart.html')
    }
    
    async open5 () {
        await this.buka('/checkout-step-one.html')
    }
    
    async take1() {
        const fotograph = await this.driver.takeScreenshot()
        const sintesis =  Buffer.from(fotograph, 'base64')                          
        writeFileSync(result, sintesis)                    
        return sintesis
    }

    async check1() {
        const checker =  readFileSync(expected)
        return checker
    }


    async take2() {
        const fotograph = await this.driver.takeScreenshot()
        const sintesis =  Buffer.from(fotograph, 'base64')                                              
        writeFileSync(result2, sintesis)                    
        return sintesis
    }

    async check2() {
        const checker =  readFileSync(expected2)
        return checker
    }


    async take3() {
        const fotograph = await this.driver.takeScreenshot()
        const sintesis =  Buffer.from(fotograph, 'base64')                                              
        writeFileSync(result3, sintesis)                    
        return sintesis
    }

    async check3() {
        const checker =  readFileSync(expected3)
        return checker
    }

    async take4() {
        const fotograph = await this.driver.takeScreenshot()
        const sintesis =  Buffer.from(fotograph, 'base64')                                              
        writeFileSync(result4, sintesis)                    
        return sintesis
    }

    async check4() {
        const checker =  readFileSync(expected4)
        return checker
    }

    async take5() {
        const fotograph = await this.driver.takeScreenshot()
        const sintesis =  Buffer.from(fotograph, 'base64')                                              
        writeFileSync(result5, sintesis)                    
        return sintesis
    }

    async check5() {
        const checker =  readFileSync(expected5)
        return checker
    }

}

module.exports = visualtest