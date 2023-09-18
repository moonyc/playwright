import { expect, Locator, Page} from '@playwright/test'

export class HomePage {
    // selector
    readonly page: Page
    readonly signInButton: Locator
    readonly searchBox: Locator
    readonly linkFeedback: Locator

    // constructor
    constructor(page: Page) {
        this.page = page
        this. signInButton = page.locator("#signin_button")
        this.searchBox = page.locator("#searchTerm")
        this.linkFeedback = page.locator('#feedback')
    }

    // methods
    // load
    async visit() {
        await this.page.goto("http://zero.webappsecurity.com/")
    }
    // sign in

    async clickOnSignIn() {
        await this.signInButton.click()
    }


    async clickOnFeedbackLink() {
        await this.linkFeedback.click()
    }
    // search for

    async searchFor(phrase: string) {
        await this.searchBox.type(phrase)
        await this.page.keyboard.press('Enter')
    }
}