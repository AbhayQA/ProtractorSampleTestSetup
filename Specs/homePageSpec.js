var protractorUtils = require('./ProtracorUtils.js');
var repo = require('./repository.json');

beforeEach(function() {
    protractorUtils.openBrowser(repo.URL);
});

describe('Hello, I am your 1st test scenario', function() {
    it('Hello, I am your 1st test', function() {
        protractorUtils.clickElementByClass(repo.LearnButton);
    });

    it('Hello, I am your 2nd test', function() {
        protractorUtils.clickElementByClass(repo.LearnButton);
    });
});

describe('Hello, I am your 2nd test scenario', function() {
    it('Hello, I am your 1st test', function() {
        protractorUtils.clickElementByClass(repo.LearnButton);
    });

    it('Hello, I am your 2nd test', function() {
        protractorUtils.clickElementByClass(repo.LearnButton);
    });
});