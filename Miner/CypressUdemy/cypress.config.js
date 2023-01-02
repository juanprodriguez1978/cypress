const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '61wwpx',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
