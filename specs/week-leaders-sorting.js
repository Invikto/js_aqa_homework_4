const checkAscSortingArrow = require('../utils/check-asc-sorting-arrow.js');
const checkDescSortingArrow = require('../utils/check-desc-sorting-arrow.js');
const logInTheApp = require('../utils/log-in-the-app.js');
const logOut = require('../utils/log-out.js');

describe('Week leaders sorting', async function () {

  beforeEach('Log in the app', async function () {
    await logInTheApp();
  });

  afterEach('Log out', async function () {
    await logOut();
  });

  context('Column "Id"', async function () {

    it(`Ascending order (browser — ${browser.capabilities.browserName})`, async function () {
      const idColumn = await $('//*[@role="columnheader" and .//*[contains(text(), "Id")]]');
      await idColumn.waitForClickable({ timeout: 5000, reverse: false });
      await idColumn.click();

      await checkAscSortingArrow(idColumn);

      const idElements = await $$('//*[@class="tabulator-table"]//*[@tabulator-field="id"]');
      const ids = [];
      for (let element of idElements) {
        ids.push(await element.getText());
      }
      const ascSortedIds = [...ids].sort((a, b) => a - b);

      expect(ids).toEqual(ascSortedIds);
    });

    it(`Descending order (browser — ${browser.capabilities.browserName})`, async function () {
      const idColumn = await $('//*[@role="columnheader" and .//*[contains(text(), "Id")]]');
      await idColumn.waitForClickable({ timeout: 5000, reverse: false });
      await idColumn.click();
      await idColumn.waitForClickable({ timeout: 5000, reverse: false });
      await idColumn.click();

      await checkDescSortingArrow(idColumn);

      const idElements = await $$('//*[@class="tabulator-table"]//*[@tabulator-field="id"]');
      const ids = [];
      for (let element of idElements) {
        ids.push(await element.getText());
      }
      const descSortedIds = [...ids].sort((a, b) => b - a);

      expect(ids).toEqual(descSortedIds);
    });

  });

  context('Column "Name"', async function () {

    it(`Ascending order (browser — ${browser.capabilities.browserName})`, async function () {
      const idColumn = await $('//*[@role="columnheader" and .//*[contains(text(), "Name")]]');
      await idColumn.waitForClickable({ timeout: 5000, reverse: false });
      await idColumn.click();

      await checkAscSortingArrow(idColumn);

      const idElements = await $$('//*[@class="tabulator-table"]//*[@tabulator-field="name"]');
      const ids = [];
      for (let element of idElements) {
        ids.push(await element.getText());
      }
      const ascSortedIds = [...ids].sort();

      expect(ids).toEqual(ascSortedIds);
    });

    it(`Descending order (browser — ${browser.capabilities.browserName})`, async function () {
      const idColumn = await $('//*[@role="columnheader" and .//*[contains(text(), "Name")]]');
      await idColumn.waitForClickable({ timeout: 5000, reverse: false });
      await idColumn.click();
      await idColumn.waitForClickable({ timeout: 5000, reverse: false });
      await idColumn.click();

      await checkDescSortingArrow(idColumn);

      const idElements = await $$('//*[@class="tabulator-table"]//*[@tabulator-field="name"]');
      const ids = [];
      for (let element of idElements) {
        ids.push(await element.getText());
      }
      const descSortedIds = [...ids].sort().reverse();

      expect(ids).toEqual(descSortedIds);
    });

  });

  context('Column "Age"', async function () {

    it(`Ascending order (browser — ${browser.capabilities.browserName})`, async function () {
      const idColumn = await $('//*[@role="columnheader" and .//*[contains(text(), "Age")]]');
      await idColumn.waitForClickable({ timeout: 5000, reverse: false });
      await idColumn.click();

      await checkAscSortingArrow(idColumn);

      const idElements = await $$('//*[@class="tabulator-table"]//*[@tabulator-field="age"]');
      const ids = [];
      for (let element of idElements) {
        ids.push(await element.getText());
      }
      const ascSortedIds = [...ids].sort((a, b) => a - b);

      expect(ids).toEqual(ascSortedIds);
    });

    it(`Descending order (browser — ${browser.capabilities.browserName})`, async function () {
      const idColumn = await $('//*[@role="columnheader" and .//*[contains(text(), "Age")]]');
      await idColumn.waitForClickable({ timeout: 5000, reverse: false });
      await idColumn.click();
      await idColumn.waitForClickable({ timeout: 5000, reverse: false });
      await idColumn.click();

      await checkDescSortingArrow(idColumn);

      const idElements = await $$('//*[@class="tabulator-table"]//*[@tabulator-field="age"]');
      const ids = [];
      for (const element of idElements) {
        ids.push(await element.getText());
      }
      const descSortedIds = [...ids].sort((a, b) => b - a);

      expect(ids).toEqual(descSortedIds);
    });

  });

});
