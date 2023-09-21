const {By} = require('selenium-webdriver')
const halaman = require('./halaman')

class checkout extends halaman {
    constructor(driver){
        super(driver)
    }

    tombolout = By.xpath('//div[@class="cart_footer"]/a[contains(text(), "CHECKOUT")]')
    formcheckout = By.xpath('//div[@class="checkout_info_wrapper"]')
    firstname = By.id('first-name')
    lastname = By.id('last-name')
    zipcode = By.id('postal-code')
    submit = By.xpath('//div[@class="checkout_buttons"]/input')
    summary = By.css('.summary_info')
    tombolcekout = By.css('.cart_button')
    complete = By.xpath('//h2[@class="complete-header"]')

    async open () {
        await this.driver.findElement(this.tombolout).click()
    }

    async info(){
        return await this.driver.findElement(this.formcheckout)
    }
    async input(name1, name2, postcode) {
        await this.driver.findElement(this.firstname).sendKeys(name1)
        await this.driver.findElement(this.lastname).sendKeys(name2)
        await this.driver.findElement(this.zipcode).sendKeys(postcode)
        await this.driver.findElement(this.submit).click()
    }

    async sumary () {
        return await this.driver.findElement(this.summary)
    }
    async finish() {
        await this.driver.findElement(this.tombolcekout).click()
    }

    async completed(){
        return await this.driver.findElement(this.complete).getText()
    }
}

module.exports = checkout