module.exports = async function logOut() {
  const logOutButton = await $('//*[@title="Log out"]');
  await logOutButton.waitForClickable({ timeout: 5000, reverse: false });
  await logOutButton.click();

  const logInButton = await $('//button[contains(text(), "Login")]');
  await logInButton.waitForDisplayed({ timeout: 15000, reverse: false });
};
