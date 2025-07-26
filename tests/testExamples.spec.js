// This is the playwright test practice by step by sptep automation lecture 4 
// Dated: 2025/07/26 Saturday
// Author: Akshay Dohe  
// desc: this is rgearding the practicce project

const {test,expect} = require('@playwright/test')
test('My  First test', async({page})  => {
await page.goto('https://google.com')
await expect (page).toHaveTitle('Google')

})


// 1step write : require('@playwright/test') after that -> const{test, expect}
//the follwing is for information purpose
// const {hello,helloWorld }= require('./demo/hello.js')
// console.log(hello()) ;
// console.log(helloWorld());

