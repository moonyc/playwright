//import assertion and packages 
import {test, expect, } from '@playwright/test'
import { loadHomePage, assertTitle} from '../helpers'
// everything in playwright is async so we have to use async-await syntax
// pass the page object into the arrow function because it will let us access to the browser's functionality
test("Simple basic test", async( {page}) => {
    // we have autocomplete by default since we're using ts
     await page.goto("https://www.example.com")
     // with the pageTitle variable we have access to the h1 element and 
     // we can use it in out assertions.
     const pageTitle = await page.locator("h1")
     
     await expect(pageTitle).toContainText("Example Domain")

})

test("Clickin on Elements", async({page}) => {
    await page.goto("http://zero.webappsecurity.com")
    // selecting an id

    await page.click("#signin_button")
    // selecting a text because there's no id nor class
    await page.click("text=Sign in")

    // selecting a class
    const errorMessage = await page.locator(".alert-error")
    await expect(errorMessage).toContainText(" Login and/or password are wrong. ")
})


test.describe('My first test suite', () => {
    test("Working eith inputs", async({page}) => {
        await page.goto("http://zero.webappsecurity.com")
           await page.click("#signin_button")
           // fill in the form
           // "selector", "text"
           await page.type("#user_login", "some login")
           await page.type("#user_password", "some password")
           await page.click("text=Sign in")
    
           const errorMessage = await page.locator(".alert-error")
           await expect(errorMessage).toContainText(" Login and/or password are wrong. ")
    })
    
    test("Assertion @myTag", async ({page}) => {
        await page.goto("https://www.example.com")
        // assert that we are in the correct page and that the page has a title
        await expect(page).toHaveURL("https://www.example.com")
        await expect(page).toHaveTitle("Example Domain")
    
        const element = await page.locator("h1")
            await expect(element).toBeVisible()
            await expect(element).toHaveText("Example Domain")
            await expect(element).toHaveCount(1)
    
        const nonExistingElement = await page.locator("h4")
            await expect(nonExistingElement).not.toBeVisible()
            
    })
})

//describe isn't asynchronous so it won't need async
test.describe.parallel.only("Hooks", () => {
    test.beforeEach(async ({ page }) =>
    await page.goto("https://www.example.com")
    )
  
test("Screenshots", async({ page }) => {
    await page.screenshot({ path: "screenshot.png", fullPage: true})
})

test("Single element screenshot", async ({ page }) => {
    
    const element = await page.$('h1')
    await element.screenshot({ path: "single_element_screenshot.png"})
})
})

test("Custom Helpers", async ({ page }) => {
    await loadHomePage(page)
    await page.pause()
    await assertTitle(page)

})