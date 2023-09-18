// capitals 

import { expect, Locator, Page} from '@playwright/test'

export class LoginPage {
    // Define selectors


    // Prefix readonly is used to make a property as read-only.
    //  Read-only members can be accessed outside the class, 
    // but their value cannot be changed.
    // Since read-only members cannot be changed outside the class, 
    // they either need to be initialized at declaration or initialized inside the class constructor.

    // name and type
       readonly page: Page
       readonly usernameInput: Locator
       readonly passwordInput: Locator
       readonly submitButton: Locator
       readonly errorMessage: Locator

    // init selectors using constructor 
       constructor(page: Page) {
           this.page = page;
           this.usernameInput = page.locator('#user_login')
           this.passwordInput = page.locator('#user_password')
           this.submitButton = page.locator('text=Sign in')
           this.errorMessage = page.locator('.alert-error')
       }
    // Define login page methods

    // goto method
    async visit() {
        await this.page.goto("http://zero.webappsecurity.com/")
    }
   
    // login in method

    async login(username: string, password: string) {
        await this.usernameInput.type(username)
        await this.passwordInput.type(password)
        await this.submitButton.click()
    }

    // assert the error message

    async assertErrorMessage () {
        await expect(this.errorMessage).toContainText("Login and/or password are wrong.")
    }

}