var ProtractorUtils = function() {
    this.openBrowser = function (url) {
        browser.get(url);
        browser.driver.manage().window().maximize();
    };

    this.openMobileBrowser = function (url) {
        browser.get(url);
        browser.driver.manage().window().setSize(360, 720);
    };

    this.clickElementByClass = function (className) {
        element(by.className(className)).click();
    };
    
    this.wait = function () {
        browser.sleep(5000);
    }
};
module.exports = new ProtractorUtils();