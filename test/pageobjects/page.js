/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/

module.exports = class Page {
    /**
    * This keyword is used to open a specific sub page from volvocars.com page
    * @param path path of the page to open
    */
    async open (path) {
        await browser.url(path);
    }
}
