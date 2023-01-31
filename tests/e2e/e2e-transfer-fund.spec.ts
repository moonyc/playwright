import { test, expect } from '@playwright/test'

test.describe("Transfer Funds and Make Payments", () => {
    test.beforeEach(async({page}) => {
        await page.goto("http://zero.webappsecurity.com")
        await page.click("#signin_button")
        await page.type("#user_login","username")
        await page.type("#user_password","password")
        await page.click("text=Sign in")

    })
    test("Transfer funds", async ({ page }) => {
        await page.click("ul > li#transfer_funds_tab")
        // access a dropdown menu
        // select with an id 
        await page.selectOption("#tf_fromAccountId", "2")
        await page.selectOption("#tf_toAccountId", "3")
        await page.type("#tf_amount", "500")
        await page.type("#tf_description", "some description")
        await page.click("#btn_submit")
        //target h2 with the class of board-header
        const boardHeader = page.locator("h2.board-header")
        await expect(boardHeader).toContainText("Verify")
        await page.click("#btn_submit")
        const message = await page.locator(".alert-success")
        await expect(message).toContainText("You successfully submitted your transaction.")
    })
})