import { test, expect} from '@playwright/test'
import { HomePage } from '../../page-objects/HomePage'

test.describe.only("Search Results", () => {
  let homePage: HomePage
  //we don't need any before or after hook
  test("Should find search results", async ({ page }) =>{
      homePage = new HomePage(page)

      await homePage.visit()
      await homePage.searchFor("bank")
      
      const numberOfLinks = await page.locator("li > a")
      await expect(numberOfLinks).toHaveCount(2)
      
  })
})