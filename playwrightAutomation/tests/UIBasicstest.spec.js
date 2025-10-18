import {test} from '@playwright/test';

test('Browser Context Playwright test', async ({browser}) => {

    const context = await browser.newContext(); // Create a new browser context
    const page = await context.newPage(); // Create a new page in the browser context
    await page.goto('https://shreyanshshukla.in/testwithshreyansh');

    // Verify the page title
    const title = await page.title();
    console.log(`Page title is: ${title}`);
    
});

test.skip('Page fixture Playwright test', async ({page}) => {
    await page.goto('https://shreyanshshukla.in/testwithshreyansh');

   // Verify the page title
   const title =  await page.title();
   console.log(`Page title is: ${title}`);
});
