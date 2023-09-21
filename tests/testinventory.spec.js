const {By} = require('selenium-webdriver')
const {expect, assert} = require('chai')
const base = require('../utility/openpage')
const login = require('../pageobjects/login')
const item = require('../pageobjects/item')
const keranjang = require('../pageobjects/cart')

describe('Menguji Fitur untuk Inventory & Cart', async() => {
    before(async() => {
        driver = await base()
        logen = new login(driver)
        inven = new item(driver)
        cart = new keranjang(driver)
    })
    after(async() => {
        await driver.close()
    })
    afterEach(async() => {
        await driver.sleep(1000)
    })
    it('Tidak bisa langsung membuka halaman inventory', async() => {
        await inven.open()
        const cek = await inven.mainpage()
        expect(cek).to.not.exist
    })
    it('Menambahkan 3 item ke cart', async() => {
        await inven.open()
        await inven.add()
        await driver.sleep(1000)
        await driver.executeScript( () =>{
            window.scrollTo({
                top: -2000,
                behavior: 'smooth'
            })
        })
        const badge = await inven.carteks()
        expect(badge).to.exist
        expect(badge).to.include("3")
    })

    it('Membuka halaman cart', async() => {
        await inven.open()
        await cart.open()
        await driver.sleep(2000)
        const cek = await cart.checker()
        expect(cek).to.exist
    })

    it('Mengecek apakah 3 item yang diinput ada didalam cart', async() => {
        await inven.open()
        await inven.add()
        await driver.sleep(2000)
        await cart.open()
        await driver.sleep(2000)
        const cek = await cart.cartlis()
        expect(cek).to.exist
    })

    it('Menghapus item yang ada didalam cart', async() => {
        await inven.open()
        await inven.add()
        await cart.open()
        await cart.remove()
        const cek = await cart.removed()
        expect(cek).to.exist
    })

    it('Kembali ke halaman produk', async() => {
        await inven.open()
        await cart.open()
        await cart.back()
        const cek = await inven.mainpage()
        expect(cek).to.exist
    })

    it('Membuka halaman detail produk 1', async() =>{
        await inven.open()
        await driver.sleep(1000)
        await inven.detailitem1()
        const cek = await inven.checkerdetil()
        expect(cek).to.exist
    })    

    it('Membuka halaman detail produk 2', async() =>{
        await inven.open()
        await driver.sleep(1000)
        await inven.detailitem2()
        const cek = await inven.checkerdetil()
        expect(cek).to.exist
    })
        
    it('Membuka halaman detail produk 3', async() =>{
        await inven.open()
        await driver.sleep(1000)
        await inven.detailitem3()
        const cek = await inven.checkerdetil()
        expect(cek).to.exist
    })
            
    it('Membuka halaman detail produk 4', async() =>{
        await inven.open()
        await driver.sleep(1000)
        await inven.detailitem4()
        const cek = await inven.checkerdetil()
        expect(cek).to.exist
    })
            
    it('Membuka halaman detail produk 5', async() =>{
        await inven.open()
        await driver.sleep(1000)
        await inven.detailitem5()
        const cek = await inven.checkerdetil()
        expect(cek).to.exist
    })
            
    it('Membuka halaman detail produk 6', async() =>{
        await inven.open()
        await driver.sleep(1000)
        await inven.detailitem6()
        const cek = await inven.checkerdetil()
        expect(cek).to.exist
    })
})