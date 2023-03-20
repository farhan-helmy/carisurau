import { chromium } from "@playwright/test";

export const scrapeWebsite = async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://www.malaysiakini.com/');

    const elementText: any = await page.$eval('div', pageItems => {
        console.log(pageItems)
        return pageItems.textContent
    });
    console.log(elementText)
}