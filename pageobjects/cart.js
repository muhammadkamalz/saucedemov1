const {By} = require('selenium-webdriver')

const halaman = require('./halaman')

class keranjang extends halaman {
    constructor(driver){
        super(driver)
    }

    logo = By.xpath('//a[@href="./cart.html"]')
    list = By.xpath('//div[@class="cart_list"]')
    cart1 = By.xpath('//div[@class="cart_list"]/div[@class="cart_item"][position()=1]')
    cart2 = By.xpath('//div[@class="cart_list"]/div[@class="cart_item"][position()=2]')
    cart3 = By.xpath('//div[@class="cart_list"]/div[@class="cart_item"][position()=3]')
    buttoncart1 = By.xpath('//div[@class="cart_item"][position()=1]//div[@class="item_pricebar"]/button')
    buttoncart2 = By.xpath('//div[@class="cart_item"][position()=2]//div[@class="item_pricebar"]/button')
    removedcart = By.xpath('//div[@class="removed_cart_item"]')
    tombolback = By.xpath('//div[@class="cart_footer"]/a[contains(text(), "Continue Shopping")]')

    async open(){
        await this.driver.findElement(this.logo).click()
    }

    async checker() {
        return await this.driver.findElement(this.list)
    }

    async cartlis(){
        return await this.driver.findElement(this.cart1),
        await this.driver.findElement(this.cart2),
        await this.driver.findElement(this.cart3)
    }

    async remove() {
        await this.driver.findElement(this.buttoncart1).click()
        await this.driver.findElement(this.buttoncart2).click()
        await this.driver.findElement(this.buttoncart1).click()
    }

    async removed() {
        return await this.driver.findElement(this.removedcart)
    }

    async back() {
        await this.driver.findElement(this.tombolback).click()
    }
}

module.exports = keranjang