const { Builder, Capabilities, By } = require('selenium-webdriver') 

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

jest.setTimeout(30000)

// test("jest getting started", () => {
//     console.log("hello everyone")
// })

test("polestar newsletter", async () => {
    await driver.get('https://www.apple.com/shop/product/MME73AM/A/airpods-3rd-generation')

    await driver.findElement(By.css('button[id="add-to-cart"]')).click()
})


test("j", async () => {
    await driver.get('https://support.apple.com/')

    await driver.findElement(By.css('a[id="ac-gn-link-search"]')).click()

    await driver.findElement(By.css('input[id="ac-gn-searchform-input"]')).sendKeys("forgot apple id")

    await driver.findElement(By.css('button[id="ac-gn-searchform-submit"]')).click()

    await driver.findElement(By.css('a[id="ac-gn-link-search"]')).click()

    await driver.findElement(By.css('input[id="ac-gn-searchform-input"]')).sendKeys("broke my screen")

    await driver.findElement(By.css('button[id="ac-gn-searchform-submit"]')).click()



})

