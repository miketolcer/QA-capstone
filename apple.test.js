const { Builder, Capabilities, By } = require('selenium-webdriver') 

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

jest.setTimeout(30000)

// test("jest getting started", () => {
//     console.log("hello everyone")
// })

test("add air pods to cart", async () => {
    await driver.get('https://www.apple.com/shop/product/MME73AM/A/airpods-3rd-generation')

    await driver.findElement(By.css('button[id="add-to-cart"]')).click()
})


test("support search bar", async () => {
    await driver.get('https://support.apple.com/')

    await driver.findElement(By.css('a[id="ac-gn-link-search"]')).click()

    await driver.findElement(By.css('input[id="ac-gn-searchform-input"]')).sendKeys("forgot apple id")
    await driver.sleep(1000)

    await driver.findElement(By.css('button[id="ac-gn-searchform-submit"]')).click()

    await driver.findElement(By.css('a[id="ac-gn-link-search"]')).click()
    await driver.sleep(3000)

    await driver.findElement(By.css('input[id="ac-gn-searchform-input"]')).sendKeys("broke my screen")

    await driver.findElement(By.css('button[id="ac-gn-searchform-submit"]')).click()

})
test("Apple store location", async () => {
    await driver.get('https://www.apple.com/retail/')

    await driver.findElement(By.css('input[aria-label="Find a store"]')).sendKeys("warren ,MI")
})
test("H", async () => {
    await driver.get('https://www.apple.com/shop/product/MV7N2AM/A/airpods-with-charging-case')

    let price = driver.findElement(By.xpath('//span[text()="$129.00"]'))

    // await driver.findElement(By.xpath('//span[text()="Personalize them for free"]')).click()

    



})

