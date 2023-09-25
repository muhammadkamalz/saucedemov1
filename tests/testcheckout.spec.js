const {By, } = require('selenium-webdriver')
const chai = require('chai')
const expect = chai.expect
const base = require('../utility/openpage')
const item = require('../pageobjects/item')
const keranjang = require('../pageobjects/cart')
const checkout = require('../pageobjects/checkout')

describe('Menguji checkout item', async() => {
    before(async() => {
        driver = await base()
        inven = new item(driver)
        cart = new keranjang(driver)
        cekout = new checkout(driver)
    })
    after(async()=> {
        await driver.close()
    })
    afterEach(async()=>{
        await driver.sleep(1000)
    })
    it('Membuka halaman checkout', async() => {
        await inven.open()
        await inven.add()
        await cart.open()
        await cekout.open()
        const cek = await cekout.info()
        expect(cek).to.exist
    })

    it('Lanjut Checkout dengan Item', async() => {
        await inven.open()
        await inven.add()
        await cart.open()
        await cekout.open()
        await cekout.input("Gojo", "Satoru","20923")
        const cek = await cekout.sumary()
        expect(cek).to.exist
        await cekout.finish()
        const cekfinish = await cekout.completed()
        expect(cekfinish).to.exist.and.to.include("THANK YOU FOR YOUR ORDER")

    })
})