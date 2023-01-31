import { test, expect } from '@playwright/test'

test.describe.parallel("Feedback Form", () => {
    test.beforeEach( async ({ page }) => {
      await page.goto("http://zero.webappsecurity.com/feedback.html")
      
    })
    // Reset feedback form

    test("Reset feedback form", async ({ page }) => {
        await page.type("#name", "some name")
        await page.type("#email", "someemail@email.com")
        await page.type("#subject", "whatever")
        await page.type("#comment", "some text")
        await page.click("input[name=clear]")
        

        const nameInput = await page.locator("#name")
        const commentInput = await page.locator('#comment')

        await expect(nameInput).toBeEmpty()
        await expect(commentInput).toBeEmpty()

    })
    // Submit feedback form
    test("Submit feedback form", async ({ page }) => {
        await page.type("#name", "some name")
        await page.type("#email", "someemail@email.com")
        await page.type("#subject", "whatever")
        await page.type("#comment", "some text")
        // input with attribute of type and the type is submit
        await page.click("input[type=submit]")
        // shorter version of assertions
        await page.waitForSelector("#feedback-title")
    })
})