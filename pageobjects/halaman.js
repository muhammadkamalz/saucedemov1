const {WebDriver} = require('selenium-webdriver')

class halaman {
    constructor (driver){
        this.driver = driver
    }

    async buka(path = '/') {
        this.driver.get('https://www.saucedemo.com/v1' + path)
    }

}

module.exports = halaman