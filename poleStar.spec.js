// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Untitled', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('Untitled', async function() {
    // Test name: Untitled
    // Step # | name | target | value
    // 1 | open | /us/ | 
    await driver.get("https://www.polestar.com/us/")
    // 2 | setWindowSize | 1296x688 | 
    await driver.manage().window().setRect({ width: 1296, height: 688 })
    // 3 | click | css=.css-1b3jyu8 > svg | 
    await driver.findElement(By.css(".css-1b3jyu8 > svg")).click()
    // 4 | assertText | css=.css-1aq72ux > span | Home
    assert(await driver.findElement(By.css(".css-1aq72ux > span")).getText() == "Home")
    // 5 | mouseOver | css=.css-1aq72ux | 
    {
      const element = await driver.findElement(By.css(".css-1aq72ux"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    // 6 | assertText | css=.css-1aq72ux > span:nth-child(1) | Polestar 1
    assert(await driver.findElement(By.css(".css-1aq72ux > span:nth-child(1)")).getText() == "Polestar 1")
    // 7 | mouseOver | css=.css-1aq72ux | 
    {
      const element = await driver.findElement(By.css(".css-1aq72ux"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    // 8 | verifyText | css=.css-1aq72ux > span:nth-child(1) | Polestar 2
    assert(await driver.findElement(By.css(".css-1aq72ux > span:nth-child(1)")).getText() == "Polestar 2")
    // 9 | verifyText | css=.css-1aq72ux:nth-child(4) > span | Fleet & Business
    assert(await driver.findElement(By.css(".css-1aq72ux:nth-child(4) > span")).getText() == "Fleet & Business")
    // 10 | assertText | css=.css-1aq72ux > span | Spaces
    assert(await driver.findElement(By.css(".css-1aq72ux > span")).getText() == "Spaces")
    // 11 | assertText | css=.css-1aq72ux > span | Service & Assistance
    assert(await driver.findElement(By.css(".css-1aq72ux > span")).getText() == "Service & Assistance")
    // 12 | runScript | window.scrollTo(0,0) | 
    await driver.executeScript("window.scrollTo(0,0)")
    // 13 | assertText | css=.css-1aq72ux > span | Electric driving
    assert(await driver.findElement(By.css(".css-1aq72ux > span")).getText() == "Electric driving")
    // 14 | assertText | css=.css-1aq72ux > span | Sustainability
    assert(await driver.findElement(By.css(".css-1aq72ux > span")).getText() == "Sustainability")
    // 15 | assertText | css=.css-1aq72ux > span | News
    assert(await driver.findElement(By.css(".css-1aq72ux > span")).getText() == "News")
    // 16 | assertText | linkText=About | About
    assert(await driver.findElement(By.linkText("About")).getText() == "About")
    // 17 | assertText | linkText=Investor Relations | Investor Relations
    assert(await driver.findElement(By.linkText("Investor Relations")).getText() == "Investor Relations")
    // 18 | assertText | css=.css-38ty28:nth-child(5) > .css-o2b8ot | Media
    assert(await driver.findElement(By.css(".css-38ty28:nth-child(5) > .css-o2b8ot")).getText() == "Media")
    // 19 | assertText | css=.css-38ty28:nth-child(2) > .css-o2b8ot | Polestar support
    assert(await driver.findElement(By.css(".css-38ty28:nth-child(2) > .css-o2b8ot")).getText() == "Polestar support")
    // 20 | mouseOver | css=.css-38ty28:nth-child(4) > .css-o2b8ot | 
    {
      const element = await driver.findElement(By.css(".css-38ty28:nth-child(4) > .css-o2b8ot"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    // 21 | assertText | css=.css-38ty28:nth-child(4) > .css-o2b8ot | Legal
    assert(await driver.findElement(By.css(".css-38ty28:nth-child(4) > .css-o2b8ot")).getText() == "Legal")
    // 22 | mouseOut | css=.css-38ty28:nth-child(4) > .css-o2b8ot | 
    {
      const element = await driver.findElement(By.CSS_SELECTOR, "body")
      await driver.actions({ bridge: true }).moveToElement(element, 0, 0).perform()
    }
    // 23 | assertText | linkText=polestar.com | polestar.com
    assert(await driver.findElement(By.linkText("polestar.com")).getText() == "polestar.com")
    // 24 | click | css=.css-1n9kg32 svg | 
    await driver.findElement(By.css(".css-1n9kg32 svg")).click()
  })
})
