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
    

    it('Gagal Login karena username salah', async() => {
        await logen.proseslogin('standar_user', 'secret_sauce')
    
        const eror = await logen.errormsg()
        await driver.sleep(1000)
        expect(eror).to.exist
        expect(eror).to.include("Username and password do not match any user in this service")
    })

    it('Gagal Login karena password salah', async() => {
        await logen.proseslogin('standard_user', 'saus_rahasia')
        const eror = await logen.errormsg()
        expect(eror).to.exist
        expect(eror).to.include("Username and password do not match any user in this service")
    })

    it('Gagal Login karena tidak memasukkan username', async() => {
        await logen.proseslogin('','secret_sauce')
        const eror = await logen.errormsg()
        await driver.sleep(2000)
        expect(eror).to.exist.and.to.include("Username is required")
    })

    it('Gagal Login karena tidak memasukkan password', async() => {
        await logen.proseslogin('dash','')
        const eror = await logen.errormsg()
        await driver.sleep(2000)
        expect(eror).to.exist.and.to.include("Password is required")
    })

    it('Gagal Login dengan locked_user', async () => {
        await logen.proseslogin('locked_out_user', 'secret_sauce')
        const eror = await logen.errormsg()
        expect(eror).to.exist.and.to.include("Sorry, this user has been locked out.")
    })

    it('Login menggunakan Problem_user menjadi bermasalah', async () => {
        await logen.proseslogin('problem_user', 'secret_sauce')
        await logen.image()
        const eror = await logen.title()
        expect(eror).to.not.exist.or.to.include('Sauce Labs Backpack')
    })

    it('Login menggunakan performance_glitch menyebabkan glitch kepada web', async (done) => {
        [await logen.proseslogin('performance_glitch_user', 'secret_sauce'),
        expect(inven.mainpage()).to.exist
]
    }).timeout(3000)
})