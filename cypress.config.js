const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "pc2qqc",
  retries: {
    runMode: 0,
    openMode: 0,
  },
  viewportWidth: 1280,
  viewportHeight: 720,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://localhost:3000/",
    watchForFileChanges: false
  },
});