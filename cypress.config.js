const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    'run_settings':  { network: true },
    baseUrl:'http://localhost:3000/'
  },
});
