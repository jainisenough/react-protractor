import { browser, ExpectedConditions } from 'protractor';
import { fillForm, submitForm } from 'pages/login';
import { tableLoaded, clickLogout } from 'pages/user';
import { ADMIN } from 'route-link';

describe('Application testing', () => {
  beforeAll(async () => {});

  beforeEach(async () => {
    try {
      browser.get(ADMIN.LOGIN);
      await browser.waitForReact(defaultTimeout, '#app');
    } catch (e) {
      console.log(e);
    }
  });

  afterEach(() => {});

  afterAll(async () => {
    await browser.driver.quit();
  });

  it('login verification', async () => {
    try {
      await fillForm('admin@admin.com', 'admin');
      await submitForm();
      const result = await browser.wait(ExpectedConditions.urlContains(ADMIN.USER), defaultTimeout);
      expect(result).toEqual(true);
      await browser.sleep(2000);
    } catch (e) {
      console.log(e);
    }
  });

  it('logout verification', async () => {
    try {
      await fillForm('admin@admin.com', 'admin');
      await submitForm();
      await browser.wait(ExpectedConditions.urlContains(ADMIN.USER), defaultTimeout);
      await tableLoaded();
      await browser.sleep(1000);
      await clickLogout();
      const result = await browser.wait(ExpectedConditions.urlContains(ADMIN.LOGIN), defaultTimeout);
      expect(result).toEqual(true);
      await browser.sleep(2000);
    } catch (e) {
      console.log(e);
    }
  });
});
