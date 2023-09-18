import { PlaywrightTestConfig } from "@playwright/test";

const config : PlaywrightTestConfig = {
    timeout: 60000,
    retries: 0,
    // in this case we want to specify the path to our tests
    testDir:'tests/e2e',
    use: {
        headless: true,
        viewport: {width: 1280, height: 720},
        // demand for all the playwright functions, such as click type 
        // or wait for the selectors before it errors and times out
        actionTimeout: 10000,
        ignoreHTTPSErrors: false,
        video: "off",
        screenshot: "off",
        
    },
    // In the projects you can override and set a configuration for 
    // a specific browser, so it will take this global configuration from the 
    // playwright config and also add project settings on top of that

    projects: [
        {
            name: "Chromium",
            use: { browserName: "chromium"},
        },
        {
            name: "Firefox",
            use: { browserName: "firefox"}
        },
        {
            name: "Webkit",
            use: { browserName: "webkit"},
        }
    ]
}
export default config
