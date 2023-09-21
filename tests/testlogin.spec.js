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

    after(async () => {
        await driver.close()
    })

    afterEach(async () => {
        await driver.sleep(1000)
    })
    
    it('Berhasil Login', async () => {
        await logen.open()
        await logen.proseslogin('standard_user', 'secret_sauce')
        expect(inven.mainpage()).to.exist
    })

    it('Gagal Login karena username salah', async() => {
        await logen.open()
        await logen.proseslogin('standar_user', 'secret_sauce')
    
        const eror = await logen.errormsg()
        await driver.sleep(1000)
        expect(eror).to.exist
        expect(eror).to.include("Username and password do not match any user in this service")
    })

    it('Gagal Login karena password salah', async() => {
        await logen.open()
        await logen.proseslogin('standard_user', 'saus_rahasia')
        const eror = await logen.errormsg()
        expect(eror).to.exist
        expect(eror).to.include("Username and password do not match any user in this service")
    })

    it('Gagal Login karena tidak memasukkan username', async() => {
        await logen.open()
        await logen.proseslogin('','secret_sauce')
        const eror = await logen.errormsg()
        await driver.sleep(2000)
        expect(eror).to.exist
        expect(eror).to.include('Username is required')
    })

    it('Gagal Login karena tidak memasukkan password', async() => {
        await logen.open()
        await logen.proseslogin('dash','')
        const eror = await logen.errormsg()
        await driver.sleep(2000)
        expect(eror).to.exist
        expect(eror).to.include('Password is required')
    })

    it('Berhasil logout', async() => {
        await logen.open()
        await logen.proseslogin('standard_user', 'secret_sauce')
        await inven.burger()
        await driver.sleep(2000)
        await inven.logouted()
        const log = await logen.logo()
        expect(log).to.exist
    })
})