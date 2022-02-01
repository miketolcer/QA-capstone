const {By, until, webDriver} = require('selenium-webdriver');
const chromedriver = require('chromedriver')


module.exports = class BasePage {
    driver;
    url;

    constructor(myDriver, myUrl) {
        this.driver = myDriver
        this.url = myUrl
    }

    async navigate() {
        return await this.driver.get(this.url)

    }

    async getElement (elementBy) {
        await this.driver.wait(until.elementLocated(elementBy));
        let element = await this.driver.findElement(elementBy);
        await this.driver.wait(until.elementLocated(elementBy));
        return element;
    
    }

    async click(elementBy) {
        return (await this.getElement(elementBy)).clcik()

    }

    async setInput(elementBy, keys) {
        let input = await this.getElement(elementBy);
        await input.clear();
        return input.sendKeys(keys)
    }

    async getText(elementBy) {
        return(await this.getElement(elementBy)).getText();

    }
    
}