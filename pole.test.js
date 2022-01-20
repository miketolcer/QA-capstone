const { Builder, Capabilities, By } = require('selenium-webdriver') 

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

jest.setTimeout(40000)

// test("jest getting started", () => {
//     console.log("hello everyone")
// })

beforeAll(async ()  => {
    await driver.get('https://www.polestar.com/us/')
 
    await driver.findElement(By.css('button[id="onetrust-accept-btn-handler"]')).click()
})




 // Test will navigate to the newsletter page to fill out each input field for 1st name, last name, email, zipcode
 // and click subscribe to subscribe user to the newsletter. 

 test("polestar newsletter", async () => {
    await driver.get('https://www.polestar.com/us/newsletter/')

    await driver.findElement(By.css('input[id="4558923--first-name"]')).sendKeys('mike')

    await driver.findElement(By.css('input[name="lastName"]')).sendKeys('tolcer')

    await driver.findElement(By.css('input[name="email"]')).sendKeys('mietolcer@yahoo.com')

    await driver.findElement(By.css('input[id="5007965"]')).sendKeys('48082')

    await driver.findElement(By.css('button[type="submit"]')).click()

})
 // Test will stay on newsletter page click on the chat feature
 // to be available to chat with polestar support
 test("chat with support", async () => {
    await driver.findElement(By.css('span[id="helpButtonSpan"]')).click()

})
 //Code directs user to pre owned polestar 2 vechiles page with 48082 location already saved
 test("poles star preowned", async () => {
    await driver.get('https://www.polestar.com/us/preowned-cars/search-result/polestar-2/')

 })
