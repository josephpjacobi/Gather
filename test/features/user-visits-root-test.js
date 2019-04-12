const {assert} = require('chai');

describe('User visits root', () => {
  describe('without existing items', () => {
    it('starts blank', () => {
      browser.url('/');
      assert.equal(browser.getText('#items-container'), '');
    });
  });

  describe('and can navigate', () => {
    it('to /create', () => {
      //Setup
      browser.url('/');
      //exercise
      browser.click('a[href="/items/create"]');
      //verify
      assert.include(browser.getText('body'), 'Create');
    });
  });
});
