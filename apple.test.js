const { Builder, Capabilities, By } = require('selenium-webdriver') 

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

//To maximize the browser size of the test
driver.manage().window().maximize()

jest.setTimeout(30000)

//Test
// test("jest getting started", () => {
//     console.log("hello everyone")
// })

//Pull up airpods and add them to bag
test("add air pods to cart", async () => {
    await driver.get('https://www.apple.com/shop/product/MME73AM/A/airpods-3rd-generation')
    await driver.sleep(2000)

    await driver.findElement(By.css('button[id="add-to-cart"]')).click()
    await driver.sleep(3000)
})

//Navigate to support search bar and input "forgot apple id" and "broke my screen" and click icon to search.
test("support search bar", async () => {
    await driver.get('https://support.apple.com/')

    await driver.findElement(By.css('a[id="ac-gn-link-search"]')).click()

    await driver.findElement(By.css('input[id="ac-gn-searchform-input"]')).sendKeys("forgot apple id")
    await driver.sleep(2000)

    await driver.findElement(By.css('button[id="ac-gn-searchform-submit"]')).click()
    await driver.sleep(2000)

    await driver.findElement(By.css('a[id="ac-gn-link-search"]')).click()
    
    await driver.findElement(By.css('input[id="ac-gn-searchform-input"]')).sendKeys("broke my screen")
    await driver.sleep(2000)

    await driver.findElement(By.css('button[id="ac-gn-searchform-submit"]')).click()

    await driver.findElement(By.css('a[id="ac-gn-link-search"]')).click()

    await driver.findElement(By.css('input[id="ac-gn-searchform-input"]')).sendKeys("apple pay setup")
    await driver.sleep(2000)

    await driver.findElement(By.css('button[id="ac-gn-searchform-submit"]')).click()
    await driver.sleep(2000)

})
//Navigate to Apple retail search bar and input "warren, MI" to test this location
test("Apple store location", async () => {
    await driver.get('https://www.apple.com/retail/')
    await driver.sleep(2000)

    await driver.findElement(By.css('input[aria-label="Find a store"]')).sendKeys("warren ,MI")
    await driver.sleep(4000)
})
//Click on each buy button for the section and navigate back to previous page.
test("Air Pod Buying Options", async () => {
    await driver.get('https://www.apple.com/airpods/')
    await driver.sleep(1000)

    await driver.findElement(By.css('a[aria-label="Buy AirPods (2nd generation)."]')).click()
    await driver.sleep(1000)

    await driver.get('https://www.apple.com/airpods/')

    await driver.findElement(By.css('a[aria-label="Buy AirPods (3rd generation)."]')).click()
    await driver.sleep(1000)

    await driver.get('https://www.apple.com/airpods/')

    await driver.findElement(By.css('a[aria-label="Buy AirPods Pro."]')).click()
    await driver.sleep(1000)

    await driver.get('https://www.apple.com/airpods/')

    await driver.findElement(By.css('a[aria-label="Buy AirPods Max."]')).click()
    await driver.sleep(1000)
})
//Navigate to air pod 3rd gen 
test("Air Pod Price Assertion", async () => {
    await driver.get('https://www.apple.com/shop/product/MME73AM/A/airpods-3rd-generation')
    
    //Assertion on the price
    let check = await driver.findElement(By.css('span[class="rc-prices-fullprice"]')).getText()

    expect(check).toContain("$179.00")
})
