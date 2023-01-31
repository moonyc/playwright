import { PlaywrightTestConfig } from "@playwright/test";

const config : PlaywrightTestConfig = {
    timeout: 6000,
    retries: 0,
    use: {
        headless: true,
        viewport: {width: 1280, height: 720},
        // demand for all the playwright functions, such as click type 
        // or wait for the selectors before it errors and times out
        actionTimeout: 15000,
        ignoreHTTPSErrors: true,
        video: "retain-on-failure",
        screenshot: "off"
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
