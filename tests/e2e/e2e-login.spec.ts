import { test, expect } from '@playwright/test'
import {LoginPage} from '../../page-objects/LoginPage'

test.describe.parallel.only("Login / Logout Flow", () => {
let loginPage: LoginPage;
// Before Hook ---> it will always build the website and reduce dupplications
test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page)
    await loginPage.visit()
    // await page.goto("http://zero.webappsecurity.com/")
})

// Negative Scenanario
  test("Negative Scenario for login", async ({ page }) => {
      await page.click("#signin_button")
      // await page.type("#user_login", "invalid username")
      // await page.type("#user_password", "invalid password)")
      // await page.click("text=Sign In")
      await loginPage.login('invalid username', 'invalid password')
      // const errorMessage = await page.locator(".alert-error")
      // await expect(errorMessage).toContainText("Login and/or password are wrong.")
      await loginPage.assertErrorMessage()
  })
// Positive Scenatio + logout
  test("Positive Scenario for login + logout", async ({ page }) => {
       await page.click("#signin_button")
      //  await page.type("#user_login", "username")
      //  await page.type("#user_password", "password")
      //  await page.click("text=Sign In")
      await loginPage.login("username", "password")
       
      //  const accountSummaryTab = await page.locator("#account_summary_tab")
      //  await expect(accountSummaryTab).toBeVisible()
       
       await page.goto("http://zero.webappsecurity.com/logout.html")
       await expect(page).toHaveURL('http://zero.webappsecurity.com/index.html')
  })
})