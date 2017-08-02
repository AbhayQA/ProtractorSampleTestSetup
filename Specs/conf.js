var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

var reporter = new HtmlScreenshotReporter({
  dest: 'target/screenshots',
  filename: 'my-report.html'
});

exports.config = {
	// Setup the report before any tests start
	beforeLaunch: function() {
		return new Promise(function(resolve){
			reporter.beforeLaunch(resolve);
		});
	},
	
	directConnect: true,
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['homePageSpec.js'],
	ignoreUncaughtExceptions: true,

    multiCapabilities: [{
        'browserName': 'firefox'
    }, {
        'browserName': 'chrome'
    }],

	/*capabilities: {
        'browserName': 'chrome'
    },*/
    
	//chromeOnly: true,
	//directConnect: true,
	
    onPrepare: function () {
		jasmine.getEnv().addReporter(reporter);
        browser.driver.manage().window().setSize(1680, 900);
        
    },
    
	// Close the report after all tests finish
	afterLaunch: function(exitCode) {
		return new Promise(function(resolve){
			reporter.afterLaunch(resolve.bind(this, exitCode));
		});
	}
}