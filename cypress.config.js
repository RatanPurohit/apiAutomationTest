const { defineConfig } = require("cypress");

module.exports = defineConfig({
  //viewportHeight: 1080,
  //viewportWidth: 1920,
  e2e: {
    baseUrl:'https://showcase.api.linx.twenty57.net',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    excludeSpecPattern:['**/1-getting-started/*',
    '**/2-advanced-examples/*'
  ]
  
  },
});
