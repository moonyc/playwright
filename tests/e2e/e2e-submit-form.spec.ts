import { test, expect } from '@playwright/test'
import { HomePage } from '../../page-objects/HomePage'
import { FeedbackPage } from '../../page-objects/FeedbackPage'

// trying to access authors :moonyc
test.describe.parallel.only("Feedback Form", () => {
    let homePage: HomePage
    let feedbackPage: FeedbackPage
    test.beforeEach( async ({ page }) => {
      homePage = new HomePage(page)
      feedbackPage = new FeedbackPage(page)

      await homePage.visit()
      await homePage.clickOnFeedbackLink()
    })
    // Reset feedback form

    test("Reset feedback form", async ({ page }) => {
        
        await feedbackPage.fillForm(
            'name',
            'email@email.com',
            'subject',
            'a message'
        )
        
        await feedbackPage.resetForm()

        await feedbackPage.assertReset()
        
    })
    // Submit feedback form
    test("Submit feedback form", async ({ page }) => {
        await feedbackPage.fillForm(
            'name',
            'email@email.com',
            'subject',
            'a message'
        )
        
        await feedbackPage.submitForm()
        await feedbackPage.feedbackFormSent()
    })
})