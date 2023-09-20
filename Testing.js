const { Builder, Browser, By} = require ('selenium-webdriver')

async function test () {
    const driver =await new Builder()
        .forBrowser(Browser.CHROME)
        .build()

        await driver.get('https://www.saucedemo.com/v1')
        await driver.findElement(By.id('user-name')).sendKeys('standard_user')
        await driver.findElement(By.id('password')).sendKeys('secret_sauce')
        await new Promise(done => setTimeout(done, 1000))
        await driver.findElement(By.id('login-button')).click()
        //login


        await new Promise(done => setTimeout(done, 1000))
        await driver.findElement(By.xpath('//button[contains(@class, "btn_primary")][1]')).click()
        await new Promise(done => setTimeout(done, 1000))
        await driver.findElement(By.xpath('//button[contains(@class, "btn_primary")][1]')).click()
        await new Promise(done => setTimeout(done, 1000))
        //menambah item ke keranjang 

        await driver.findElement(By.xpath('//a[contains(@class, "shopping_cart")]')).click()
        await new Promise(done => setTimeout(done, 1000))
        await driver.findElement(By.xpath('//a[contains(@class, "checkout_button")]')).click()
        await new Promise(done => setTimeout(done, 1000))
        //ke halaman checkout

        await driver.findElement(By.id('first-name')).sendKeys('John')
        await driver.findElement(By.id('last-name')).sendKeys('Jihn')
        await driver.findElement(By.id('postal-code')).sendKeys('25184')
        await new Promise(done => setTimeout(done, 1000))
        await driver.findElement(By.xpath('//input[contains(@class, "cart_button")]')).click()
        await new Promise(done => setTimeout(done, 1000))
        //fill halaman pemesanan

        await driver.findElement(By.xpath('//a[contains(@class, "cart_button")]')).click()
        await new Promise(done => setTimeout(done, 1000))
        //finish checkout

        await driver.findElement(By.xpath('//div[contains(@class, "bm-burger-button")]')).click()
        await new Promise(done => setTimeout(done, 2000))
        await driver.findElement(By.id('logout_sidebar_link')).click()
        await new Promise(done => setTimeout(done, 1000))
        await driver.close()
        //logout
    }  

    test()