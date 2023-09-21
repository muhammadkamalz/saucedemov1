const {Builder, Browser} = require('selenium-webdriver')

async function bukahalaman() {
    const driver = await new Builder()
    .forBrowser(Browser.CHROME)
    .build()

    return driver
}

module.exports = bukahalaman