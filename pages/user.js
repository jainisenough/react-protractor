import { browser } from 'protractor';

const allRow = element.all(by.css('table > tbody > tr'));
const logoutBtn = element.all(by.react('Link'));

export const tableLoaded = async () => {
  await browser.wait(async () => {
    const count = await allRow.count();
    return count > 0;
  }, defaultTimeout);
};

export const clickLogout = async () => {
  await logoutBtn.click();
};
