import { test, expect } from '@playwright/test'

test.describe('New Payment', () => {
    test.beforeEach(async ( { page }) => {
        await page.goto("http://zero.webappsecurity.com")
        await page.click("#signin_button")
        await page.type("#user_login", "username")
        await page.type("#user_password","password")
        await page.click("text=Sign in")
    })

    test("Should send new payment", async ({ page }) => {
        await page.click("ul > li#pay_bills_tab")
        await page.selectOption("#sp_payee", "bofa")
        await page.click("#sp_get_payee_details")
        await page.waitForSelector("#sp_payee_details")
        await page.selectOption("#sp_account", "3")
        await page.type("#sp_amount", "5")
        // the date picker is actually an input, so you can just type the date
        await page.type("#sp_date","01-12-2003")
        await page.type("#sp_description", "some description")
        await page.click("#pay_saved_payees")
        const message = await page.locator("#alert_content > span ")
        await expect(message).toBeVisible()
        await expect(message).toContainText("The payment was successfully submitted.")

    })  
})