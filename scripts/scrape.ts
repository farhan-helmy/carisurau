// importing required modules
// import fs from 'fs';
// initializing the required browser
import playwright from 'playwright-core';
import type {Page} from 'playwright-core';
import fs from 'fs';



const heresurauname = 'surau annamira';
/**
 * Open browser, goto given url and collect data
 */

/**
 * Extract data from HTML content
 * @param {string} surauname object
*/
  export async function getScrapedGmapSurau( surauname:string ) {
  const browser = await playwright.chromium.launch({
    headless: false,
    // headless: true
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
  console.log("Entering "+ surauname + " in searchbar..");
  await page.locator('[aria-label="Search Google Maps"]').type(surauname, { 'delay': 500 });
   // Press Enter after entering the query
  console.log("Getting data.. Please wait a moment");
  await page.locator('[aria-label="Search Google Maps"]').press('Enter');

  //run functions below individually works fine. need to reconfigure the flow for it to work alltogether. page need to be reset into the main page of the surau in Google Maps before any function starts 
  // let scrappedImages = await saveImgFile(page); //need to be improved. need to use element screenshot instead.
  // let scrappedReviews = await getReviews(page);
  // let directionUrl = await getDirectionUrl(page);
  // let scrappedGeneralData = await extractDetails(page);
  
  // let scrappedData = {
  //   general: scrappedGeneralData,
  //   images: scrappedImages,
  //   reviews: scrappedReviews,
  //   direction: directionUrl,
  // }
  
  // let ListingPageDatastring = JSON.stringify(scrappedData);

  // saveJSONFile(ListingPageDatastring);

  let scrappedGeneralData = await extractDetails(page);

  let ListingPageDatastring = JSON.stringify(scrappedGeneralData);

  saveJSONFile(ListingPageDatastring); //save into data.json

   // Closing browser context after use
  //  await context.close();
   await browser.close();
};

/**
 * Extract data from HTML content
 * @param {playwright.Page} page object
*/
 async function extractDetails(page: Page) {
        // Wait for results
   let listedProductSelector = 'div.XltNde.tTVLSc';
   await page.waitForSelector(listedProductSelector);
   let results = page.locator(listedProductSelector);
        // All the selectors used to collect data
      let titleSelector = 'h1.DUwDvf.lfPIob';
      let reviewSelector = 'div.F7nice > span';
      let addressSelector = '[data-item-id=address]'
      let phoneSelector = '[data-tooltip=\"Copy phone number\"]'

      let tittle= null;
      let rating = null;
      let reviewCount = null;
      let address = null;
      let phone = null;

      console.log("Getting tittle...");

      try{
        tittle = await results.locator(titleSelector).innerText();
        
      }catch(err){
        console.log("Tittle not found!")
      };

      console.log("Getting rating...");
      try{
        rating = await results.locator(reviewSelector).nth(0).innerText();
      }catch(err){
        console.log("Rating not found!")
      };

      console.log("Getting review count...");
      try{
        let reviewRaw = await results.locator(reviewSelector).nth(1).innerText();
        reviewCount = reviewRaw.replace('(', '').replace(')', '');
      }catch(err){
        console.log("Review count not found!")
      }

      console.log("Getting address...");
      try{
        address = await results.locator(addressSelector).innerText();
      }catch(err){
        console.log("Address not found!")
      }

      console.log("Getting phone number...");
      try{
        phone = await results.locator(phoneSelector).locator('nth=0').innerText();
      }catch(err){
        console.log("Phone number not found!")
      }

     let productData = {
      tittle: tittle,
      rating: rating,
      reviewCount: reviewCount,
      address: address,
      phone: phone,
    };
    
  return productData;
 };

 /**
  * Save JSON data to .json file
  * @param jsonData -  Extracted data in JSON format
  */
 async function saveJSONFile(jsonData: string) {
   fs.writeFile("./scripts/data.json", jsonData, 'utf8', function (err) {
     if (err) {
       console.log("An error occured while writing JSON Object to File.");
       return console.log(err);
     };

     console.log("JSON file has been saved.");
   });
 };


 async function saveImgFile(page: Page) {
  const surauname = await page.locator('h1.DUwDvf.lfPIob').innerText();
  await page.getByRole('button', { name: 'Photo of ' + surauname }).click();
  
  let imgpath = [];
  
  for (let f = 5; f < 20; f+=5) {


    await page.locator('div.U39Pmb').nth(f).click();

    for (let i = f-5; i < f; i++) {
    const img = page.locator('div.U39Pmb').nth(i);
    const itemurl = await img.getAttribute('style');
    const imgurl = itemurl?.substring(23, 104);
    const imgnumberurl = itemurl?.substring(59, 103);

    const browser1 = await playwright.chromium.launch({
      headless: false
      // headless: true
    });
    const page1 = await browser1.newPage();
    let currentimgpath = './scripts/' + surauname + '/' + imgnumberurl + 'screenshot.png';

    if(imgurl){
    
    await page1.goto(imgurl+'h1000', { waitUntil: 'load' });
    // await page1.locator('//body//img').screenshot({ path: imgnumberurl + 'screenshot.png' }); must configure ts react first before can use this command.
    await page1.screenshot({ path: currentimgpath });
    
    }
    await browser1.close();
    imgpath.push(currentimgpath);
    };
    
  };
  console.log("Completed url scrap");
  return imgpath;
  // console.log(imgpath[1]);  

};

async function  getReviews(page: Page) {
  
  await page.locator('button.hh2c6').nth(1).click();

    // Wait for results
let listedProductSelector = 'div.jftiEf.fontBodyMedium';
await page.waitForSelector(listedProductSelector);
await page.locator('button.w8nwRe.kyuRq')?.click(); //click more button if any
let results = page.locator(listedProductSelector).nth(0);

    // All the selectors used to collect data
  let reviewerNameSelector = 'div.d4r55';
  let reviewerTittleSelector = 'div.RfnDt > span';
  let reviewerReviewCountSelector = 'div.RfnDt';
  let ratingSelector = 'span.kvMYJc';
  let ratingapproximatetimestampSelector = 'span.rsqaWe';
  let reviewSelector = 'span.wiI7pd';

  let name= null;
  let tittle= null;
  let count= null;
  let rating = null;
  let approximatetimestamp = null;
  let review = null;


    name = await results.locator(reviewerNameSelector).innerText();
    tittle = await results.locator(reviewerTittleSelector).innerText();
    count = await results.locator(reviewerReviewCountSelector).innerText();
    rating = await results.locator(ratingSelector).getAttribute('aria-label');
    approximatetimestamp = await results.locator(ratingapproximatetimestampSelector).innerText();
    review = await results.locator(reviewSelector).innerText();


    let data = {
      dataname: name,
      datatittle:tittle,
      datacount: count,
      datarating: rating,
      dataapproximatetimestamp: approximatetimestamp,
      datareview: review
    }

    
    console.log("name " + name + "\ntittle " + tittle +"\ncount " + count +"\nrating " + rating +"\napproximatetimestamp " + approximatetimestamp +"\nreview " + review);

    return data;
};

async function  getDirectionUrl(page: Page) {
  
  // const surauname = await page.locator('h1.DUwDvf.lfPIob').innerText();
  await page.locator('div.etWJQ.jym1ob.kdfrQc.pChizd.bWQG4d').click();
  await page.locator('input[placeholder=\'Choose starting point, or click on the map...\']').click();
  page.url();
  
  console.log(page.url());
  return page.url();

};

getScrapedGmapSurau(heresurauname);
