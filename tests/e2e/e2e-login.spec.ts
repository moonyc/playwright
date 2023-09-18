import { test, expect } from '@playwright/test'
import {LoginPage} from '../../page-objects/LoginPage'
import { HomePage } from '../../page-objects/HomePage';


test.describe.parallel("Login / Logout Flow", () => {
let loginPage: LoginPage;
let homePage: HomePage;

// Before Hook ---> it will always build the website and reduce dupplications
test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page)
    homePage =  new HomePage(page)
    await homePage.visit()
})

// Negative Scenanario
  test("Negative Scenario for login", async ({ page }) => {
      await homePage.clickOnSignIn()
      await loginPage.login('invalid username', 'invalid password')
      await loginPage.assertErrorMessage()
  })
// Positive Scenatio + logout
  test("Positive Scenario for login + logout", async ({ page }) => {
       await homePage.clickOnSignIn()
       await loginPage.login("username", "password")
       await page.goto("http://zero.webappsecurity.com/logout.html")
       await expect(page).toHaveURL('http://zero.webappsecurity.com/index.html')
  })
})