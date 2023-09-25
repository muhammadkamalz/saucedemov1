const {Builder, Browser} = require('selenium-webdriver')

async function bukahalaman() {
    const driver = await new Builder()
    .forBrowser(Browser.CHROME)
    .build()

    const originalWindowSize = await driver.manage().window().getSize();

    await driver.manage().window().setSize(originalWindowSize)
    return driver
}

module.exports = bukahalaman