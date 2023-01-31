import { test, expect} from '@playwright/test'

test.describe("Search Results", () => {
  //we don't need any before or after hook
  test("Should find search results", async ({ page }) =>{
      await page.goto("http://zero.webappsecurity.com")
      await page.type("#searchTerm", "bank")
      // to simulate the act of digiting on the keyboard:
      await page.keyboard.press("Enter")
      const numberOfLinks = await page.locator("li > a")
      await expect(numberOfLinks).toHaveCount(2)
      
  })
})