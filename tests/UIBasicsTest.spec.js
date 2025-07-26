// have to import the plawright module here 

const {test} = require(`@playwright/test`);


/* test(`First Playwright test`, async ()=>   //function() which do not have any name 
{
// playwright code-- automation
// since the function is anonymous then we will write as above 
// EX....test(`First Playwright test`, async function() 
// since JS is asynchronous so there is no gaurantee there will be step go step by step if JAVA is possible 
// to avoid these we will use "Await" IMP so async and await we need to use as they come in pair
// step1 - open browser

// step2 - enter o/p

// step3- click

// chrome - plugins / cookies

}
);
 */

//To execute single test case following is used 
test.only('Browser Context First Playwright test', async ({browser})=>   //function() which do not have any name 
{
    //browser - plugins / cookies
    // Telling browser to create new instance or new session like inbuilt proxy or cookies not now 
    const context = await  browser.newContext();
   const page = await context.newPage(); //here opening new method for opening a page we need to mention await here and above
   await page.goto("https://www.youtube.com");
});

   //OR page and Browser are the fixers 

   test('Page  Playwright test', async ({page})=>   //function() which do not have any name 
{
  /*  const context = await  browser.newContext();
   const page = await context.newPage(); //here opening new method for opening a page we need to mention await here and above
    */
   await page.goto("https://www.google.com");
});