module.exports = async function checkDescSortingArrow(columnHeader) {
  const sortingArrow = await columnHeader.$('.tabulator-arrow');
  await sortingArrow.waitUntil(async function () {
    const sortingArrowColor = await sortingArrow.getCSSProperty('border-top-color');
    const sortingArrowHeight = await sortingArrow.getCSSProperty('border-top-width');
    return (sortingArrowColor.parsed.hex === '#666666') &&
      (parseInt(sortingArrowHeight.value.slice(0, -2), 10) > 0);
  }, {
    timeout: 500,
    timeoutMsg: 'The sorting arrow is incorrect'
  });
};
