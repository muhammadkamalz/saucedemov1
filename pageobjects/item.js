const {By} = require('selenium-webdriver')

const halaman = require('./halaman')

class item extends halaman{
    //inisialisasi (selalu inisialisasi terlebih dahulu)
    constructor (driver) {
        super(driver) //super(driver) karena mengambil dari parent class
    }

    list = By.id('inventory_container')
    burgor = By.xpath('//button[contains(text(), "Open Menu")]')
    logout = By.id('logout_sidebar_link')
    cart1 = By.xpath('//div[@class="inventory_list"]/div[position()=1]/div[@class="pricebar"]/button')
    cart2 = By.xpath('//div[@class="inventory_list"]/div[position()=2]/div[@class="pricebar"]/button')
    cart3 = By.xpath('//div[@class="inventory_list"]/div[position()=5]/div[@class="pricebar"]/button')
    badge = By.xpath('//span[contains(@class, "shopping_cart_badge")]')
    detilitem1 = By.xpath('//div[@class="inventory_item"][position()=1]/div[@class="inventory_item_label"]/a')
    detilitem2 = By.xpath('//div[@class="inventory_item"][position()=2]/div[@class="inventory_item_label"]/a')
    detilitem3 = By.xpath('//div[@class="inventory_item"][position()=3]/div[@class="inventory_item_label"]/a')
    detilitem4 = By.xpath('//div[@class="inventory_item"][position()=4]/div[@class="inventory_item_label"]/a')
    detilitem5 = By.xpath('//div[@class="inventory_item"][position()=5]/div[@class="inventory_item_label"]/a')
    detilitem6 = By.xpath('//div[@class="inventory_item"][position()=6]/div[@class="inventory_item_label"]/a')
    cekdetil = By.xpath('//div[@class="inventory_details"]')
    
    async open() {
        await this.buka('/inventory.html')
    }

    async mainpage () {
        return await this.driver.findElement(this.list)
    }

    async burger() {
        await this.driver.findElement(this.burgor).click()
    }
    
    async logouted() {
        await this.driver.findElement(this.logout).click()
    }

    async add() {
        await this.driver.findElement(this.cart1).click()
        await this.driver.findElement(this.cart2).click()

        await this.driver.findElement(this.cart3).click()
    }

    async carteks() {
        return await this.driver.findElement(this.badge).getText()
    }

    async detailitem1() {
        await this.driver.findElement(this.detilitem1).click()
    }
    async detailitem2() {
        await this.driver.findElement(this.detilitem2).click()
    }
    async detailitem3() {
        await this.driver.findElement(this.detilitem3).click()
    }
    async detailitem4() {
        await this.driver.findElement(this.detilitem4).click()
    }
    async detailitem5() {
        await this.driver.findElement(this.detilitem5).click()
    }
    async detailitem6() {
        await this.driver.findElement(this.detilitem6).click()
    }
    async checkerdetil() {
        return await this.driver.findElement(this.cekdetil)
    }
}

module.exports = item