// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('g', function() {
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
  it('g', async function() {
    await driver.get("https://www.apple.com/shop/product/MME73AM/A/airpods-3rd-generation")
    await driver.manage().window().setRect({ width: 1280, height: 672 })
    await driver.findElement(By.css(".as-buttonlink:nth-child(2) > span")).click()
    await driver.findElement(By.css("#\\37 bad8610-7df2-11ec-9a18-53ac434a2df0-tab-item-0 .form-selector-singlecolumn:nth-child(14) span:nth-child(1)")).click()
    {
      const element = await driver.findElement(By.id("7badd43a-7df2-11ec-8d64-cfab37bfe8e8"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    await driver.findElement(By.css("#\\37 bad8610-7df2-11ec-9a18-53ac434a2df0-tab-item-0 .form-selector-singlecolumn:nth-child(15) span:nth-child(1)")).click()
    await driver.findElement(By.css("#\\37 bad8610-7df2-11ec-9a18-53ac434a2df0-tab-item-0 .form-selector-singlecolumn:nth-child(16) span:nth-child(1)")).click()
    await driver.findElement(By.css(".button-super")).click()
  })
})
