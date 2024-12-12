import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
    projects: [
        {
            name: 'chromium',
            use: {
                ...devices['Desktop Chrome'],
                // It is important to define the `viewport` property after destructuring `devices`,
                // since devices also define the `viewport` for that device.
                viewport: { width: 1280, height: 720 },
            },
        },
    ]
});