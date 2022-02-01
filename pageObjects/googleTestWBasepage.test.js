const { Builder, Capabilities} = require('selenium-webdriver');
const Google = require('../pageObjects/extendingGooglePage')
const driver = new Builder().withCapabilities(Capabilities.chrome()).build()
const myPage = new Google(driver, 'https://www.google.com/')

test ('Searching Google', async ()=> {
    await myPage.navigate()
    await myPage.doSearch('Puppies')
    expect(result).toContain("puppies")

    await myPage.driver.quit()

})