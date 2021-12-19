module.exports = async function checkAscSortingArrow(columnHeader) {
  const sortingArrow = await columnHeader.$('.tabulator-arrow');
  await sortingArrow.waitUntil(async function () {
    const sortingArrowColor = await this.getCSSProperty('border-bottom-color');
    const sortingArrowHeight = await this.getCSSProperty('border-bottom-width');
    return (sortingArrowColor.parsed.hex === '#666666') &&
      (parseInt(sortingArrowHeight.value.slice(0, -2), 10) > 0);
  }, {
    timeout: 500,
    timeoutMsg: 'The sorting arrow is incorrect'
  });
};
