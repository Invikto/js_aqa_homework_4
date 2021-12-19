module.exports = async function enterSumToExchange(sumInput, digits, pseudoDatabase) {
  await sumInput.waitForDisplayed({ timeout: 3000, reverse: false });
  for (let index in digits) {
    await sumInput.addValue(digits[index]);

    await pseudoDatabase.waitUntil(async function () {
      let savedValue = await this.getHTML(false);
      savedValue = JSON.parse(savedValue)[index];
      return (savedValue.num === digits[index]);
    }, {
      timeout: 5000,
      timeoutMsg: "Entered value wasn't saved"
    });
  }
};
