import { test, expect } from '@playwright/test'


test.describe("Currency Exchange", () => {
    // login
    test.beforeEach(async({page}) => {
        await page.goto("http://zero.webappsecurity.com")
        await page.click("#signin_button")
        await page.type("#user_login","username")
        await page.type("#user_password","password")
        await page.click("text=Sign in")

    })
    

    test("Should send a form", async ({ page }) => {
       //find the currect page navigating through the tabs
       await page.click("ul > li#pay_bills_tab")
       await page.click("text=Purchase Foreign Currency")
       await page.selectOption("#pc_currency", "EUR")
       await page.type("#pc_amount", "500")
       await page.click("#pc_inDollars_false")
       await page.click("#pc_calculate_costs")
       await page.waitForSelector("#pc_conversion_amount")
       await page.click("#purchase_cash")
       
       const message = await page.locator("#alert_content")
       await expect(message).toContainText("Foreign currency cash was successfully purchased.")




    })
})