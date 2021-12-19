const enterSumToExchange = require('../utils/enter-sum-to-exchange.js');
const logInTheApp = require('../utils/log-in-the-app.js');
const logOut = require('../utils/log-out.js');

describe('Currency exchange', async function () {

  beforeEach('Log in the app', async function () {
    await logInTheApp();
  });

  afterEach('Log out', async function () {
    await logOut();
  });

  it(`Purchase 1000 (browser — ${browser.capabilities.browserName})`, async function () {
    const testSum = 1000;

    const digits = testSum.toString().split('');
    const sumInput = await $('#sum-to-buy');
    const pseudoDatabase = await $('script#database');
    await enterSumToExchange(sumInput, digits, pseudoDatabase);

    const buyButton = await $('//button[contains(text(), "Buy")]');
    await buyButton.waitForDisplayed({ timeout: 3000, reverse: false });
    await buyButton.click();

    const currencyRate = await $('#currency-rate').getText();
    const expectedResult = testSum * currencyRate;
    let exchangeResult = await $('#withdrew');
    await exchangeResult.scrollIntoView();
    exchangeResult = await exchangeResult.getText();
    exchangeResult = exchangeResult.substr(exchangeResult.indexOf('=>') + '=>'.length).trim();
    expect(parseInt(exchangeResult)).toEqual(expectedResult);
  });

});
