import { browser, ExpectedConditions } from 'protractor';

const form = element(by.tagName('form'));
const emailField = element(by.name('email'));
const passwordField = element(by.name('password'));
const submitBtn = element(by.css('button[type="submit"]'));

export const fillForm = async (email, password) => {
  await browser.wait(ExpectedConditions.presenceOf(form), defaultTimeout);
  await emailField.sendKeys(email);
  await passwordField.sendKeys(password);
};

export const submitForm = async () => {
  await submitBtn.click();
};
