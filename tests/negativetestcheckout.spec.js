const {By, } = require('selenium-webdriver')
const chai = require('chai')
const {expect} = require('chai')
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

    it('Tidak Bisa Kehalaman checkout tanpa memasukkan produk ke keranjang', async() => {
        await inven.open()
        await cart.open()
        await cekout.open()
        const cek = await cekout.info()
        expect(cek).to.not.exist
    })

    it('Tidak menginputkan First Name dan menampilkan error "First Name is required"', async() => {
        await cekout.bukain()
        await cekout.input("","Satoru","202923")
        const cek = await cekout.errormsg()
        expect(cek).to.exist.and.to.include("First Name is required")
    })
    
    it('Tidak menginputkan Last Name dan menampilkan error "Last Name is required"', async() => {
        await cekout.bukain()
        await cekout.input("Gojo","","202923")
        const cek = await cekout.errormsg()
        expect(cek).to.exist.and.to.include("Last Name is required")
    })
    
    it('Tidak menginputkan Zip Code dan menampilkan error "Postal Code is required"', async() => {
        await cekout.bukain()
        await cekout.input("Gojo","Satoru","")
        const cek = await cekout.errormsg()
        expect(cek).to.exist.and.to.include("Postal Code is required")
    })
})