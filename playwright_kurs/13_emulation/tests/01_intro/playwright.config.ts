import { defineConfig, devices } from '@playwright/test'; // import devices

export default defineConfig({
    projects: [
        {
            name: 'chromium',
            use: {
                ...devices['Desktop Chrome'],
            },
        },
        {
            name: 'Mobile Safari',
            use: {
                ...devices['iPhone 13'],
            },
        },
    ],
});