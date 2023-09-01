// importing required modules
// import fs from 'fs';
// initializing the required browser
import type { Page } from "playwright-core";
import { chromium } from "playwright-core";
import { prisma } from "../src/server/db";



const heresurauname = ['surau annamira';]
/**
 * Open browser, goto given url and collect data
 */

/**
 * Extract data from HTML content
 * @param {string} surauname object
*/
export async function getScrapedGmapSurau(surauname: string) {
    const browser = await chromium.launch({
        // headless: false
        headless: true
    });
    // const context = await browser.newContext({
    //   proxy: { server: 'http://ProxyIP:Port' }
    // });
    // Open new page
    // const page = await context.newPage();
    const page = await browser.newPage();
    // Go to https://www.google.com/maps
    console.log("Getting into Google Maps..");
    await page.goto('https://www.google.com/maps', { waitUntil: 'load' });
    // Click on search tab
    await page.locator('[aria-label="Search Google Maps"]').click();
    // Enter the search query
    // const placenameinput = "surau annamira";
    console.log("Entering " + surauname + " in searchbar..");
    const surau = await prisma.surau.findMany({})

    await page.locator('[aria-label="Search Google Maps"]').type(surauname, { 'delay': 500 });
    // Press Enter after entering the query
    console.log("Getting data.. Please wait a moment");
    await page.locator('[aria-label="Search Google Maps"]').press('Enter');
    const ListingPageData = await extractDetails(page);

    console.log(typeof (ListingPageData.phone));

    // Closing browser context after use
    //  await context.close();
    await browser.close();
}

/**
 * Extract data from HTML content
 * @param {playwright.Page} page object
*/
async function extractDetails(page: Page) {
    // Wait for results
    const listedProductSelector = 'div.XltNde.tTVLSc';
    await page.waitForSelector(listedProductSelector);
    const results = page.locator(listedProductSelector);
    // Now we need to collect details from HTML content.
    //  let ListingPageData = [];
    // All the selectors used to collect data
    const titleSelector = 'h1.DUwDvf.lfPIob';
    const reviewSelector = 'div.F7nice > span';
    const addressSelector = '[data-item-id=address]'
    const phoneSelector = '[data-tooltip=\"Copy phone number\"]'

    let tittle = null;
    let rating = null;
    let reviewCount = null;
    let address = null;
    let phone = null;

    console.log("Getting tittle...");

    try {
        tittle = await results.locator(titleSelector).innerText();

    } catch (err) {
        console.log("Tittle not found!")
    }

    console.log("Getting rating...");
    try {
        rating = await results.locator(reviewSelector).nth(0).innerText();
    } catch (err) {
        console.log("Rating not found!")
    }

    console.log("Getting review count...");
    try {
        const reviewRaw = await results.locator(reviewSelector).nth(1).innerText();
        reviewCount = reviewRaw.replace('(', '').replace(')', '');
    } catch (err) {
        console.log("Review count not found!")
    }

    console.log("Getting address...");
    try {
        address = await results.locator(addressSelector).innerText();
    } catch (err) {
        console.log("Address not found!")
    }

    console.log("Getting phone number...");
    try {
        phone = await results.locator(phoneSelector).locator('nth=0').innerText();
    } catch (err) {
        console.log("Phone number not found!")
    }

    const productData = {
        tittle: tittle,
        rating: rating,
        reviewCount: reviewCount,
        address: address,
        phone: phone,
    };


    //  ListingPageData.push(productData);
    //  return ListingPageData;
    return productData;
}

/**
 * Save JSON data to .json file
 * @param jsonData -  Extracted data in JSON format
 */
//  async function saveJSONFile(jsonData) {
//    fs.writeFile("data.json", jsonData, 'utf8', function (err) {
//      if (err) {
//        console.log("An error occured while writing JSON Object to File.");
//        return console.log(err);
//      };

//      console.log("JSON file has been saved.");
//    });
//  };

getScrapedGmapSurau(heresurauname).then((data) => {
    console.log(data);
    // saveJSONFile(JSON.stringify(data));
}
).catch((err) => {
    console.log(err);
}
);
