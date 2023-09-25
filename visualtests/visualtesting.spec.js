const chai = require('chai')
const {expect} = chai
const base = require('../utility/openpage')
const pagevisual = require('../pageobjectsvisualtesting/visualtesting')
const {chaiImage} = require('chai-image')
chai.use(chaiImage)

describe.only('Visual Testing MK. 1', async() => {
    before(async() => {
        driver = await base()
        halvis = new pagevisual(driver)
    })

    after(async() => {
        driver.close()
    })

    afterEach(async() => {
        driver.sleep(1000)
    })
    
      it('Melakukan screenshot halaman utama saucedemo.com', async() => {
        await halvis.open()
        await halvis.take1()
        const cekking = await halvis.take1()
        const cekkout = await halvis.check1()
        expect(cekking).to.matchImage(cekkout)
    })
    it('Melakukan screenshot halaman Inventory saucedemo.com', async() => {
        await halvis.open2()
        await halvis.take2()
        const cekking = await halvis.take2()
        const cekkout = await halvis.check2()
        expect(cekking).to.matchImage(cekkout)
    })
    it('Melakukan screenshot halaman Detail Inventory saucedemo.com', async() => {
        await halvis.open3()
        await halvis.take3()
        const cekking = await halvis.take3()
        const cekkout = await halvis.check3()
        expect(cekking).to.matchImage(cekkout)
    })
    it('Melakukan screenshot halaman Cart saucedemo.com', async() => {
        await halvis.open4()
        await halvis.take4()
        const cekking = await halvis.take4()
        const cekkout = await halvis.check4()
        expect(cekking).to.matchImage(cekkout)
    })
    it('Melakukan screenshot halaman Checkout saucedemo.com', async() => {
        await halvis.open5()
        await halvis.take5()
        const cekking = await halvis.take5()
        const cekkout = await halvis.check5()
        expect(cekking).to.matchImage(cekkout)
    })
})