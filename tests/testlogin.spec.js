const {By} = require('selenium-webdriver')
const chai = require('chai')
const base = require('../utility/openpage')
const login = require('../pageobjects/login')
const item = require('../pageobjects/item')
const assert = chai.assert
const expect = chai.expect

describe('Menguji fitur login', async() => {

    before(async () => {
        driver = await base()
        logen = new login(driver)
        inven = new item(driver)
    })


    beforeEach(async() => {
        await logen.open()
    })
    after(async () => {
        await driver.close()
    })

    afterEach(async () => {
        await driver.sleep(1000)
    })
    
    it('Berhasil Login dengan standard_user', async () => {
        await logen.proseslogin('standard_user', 'secret_sauce')
        expect(inven.mainpage()).to.exist
    })


    it('Berhasil logout', async() => {
        await logen.proseslogin('standard_user', 'secret_sauce')
        await inven.burger()
        await driver.sleep(2000)
        await inven.logouted()
        const log = await logen.logo()
        expect(log).to.exist
    })
})