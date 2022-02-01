const {By} = require('selenium-webdriver')
const BasePage = require('./basePage')

module.export = class Google extends BasePage {
    searchBar = By.css('input[name="q"')
    results = By.id('res')

    constructor(driver,url) {
        super(driver, url)
    } 
    
    async doSearch(term) {
        await this.setInput(this.searchBar, `${term}\n`)

    }

    async getResults() {
        return await this.getText(this.results)
    }

}
