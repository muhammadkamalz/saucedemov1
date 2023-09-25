const {By} = require('selenium-webdriver')
const halaman = require('./halaman')

class Login extends halaman {
    //inisialisasi
    constructor(driver){
        super(driver)
    }

    //element locators

    username = By.id('user-name')
    password = By.id('password')
    submit = By.id('login-button')
    error = By.xpath('//h3[@data-test="error"]')
    logor = By.xpath('//div[contains(@class, "login_logo")]')
    gambar = By.xpath('//div[@class="inventory_item_img"]//a//img')
    judul = By.xpath('//div[@class="inventory_details_name"]')

    async open() {
        await this.buka('/')
    }
    async proseslogin (user, pass) {
        await this.driver.findElement(this.username).sendKeys(user)
        await this.driver.findElement(this.password).sendKeys(pass)
        await this.driver.findElement(this.submit).click()
    }

    async errormsg (){
        return await this.driver.findElement(this.error).getText()
    }

    async logo () {
        return await this.driver.findElement(this.logor)
    }

    async image() {
        await this.driver.findElement(this.gambar).click()
    }

    async title() {
        return await this.driver.findElement(this.judul).getText()
    }
}

module.exports = Login