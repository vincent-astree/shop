const { defineConfig } = require("cypress");
const { registerAIOTestsPlugin } = require('cypress-aiotests-reporter/src')

module.exports = defineConfig({
  projectId: "waa828",
  env: {
    aioTests: {
      enableReporting: true,
      cloud: { //Replace with server authentication if using Jira Server
        apiKey: "APIKEY"
      },
      jiraProjectId: "AS",
      cycleDetails: {
        createNewCycle: false,
        cycleName: "Tests Automatisés",
        cycleKey: "AS-CY-4"
      },
      addNewRun: true,
      addAttachmentToFailedCases: true,
      createNewRunForRetries: true,
      screenshotOnRunFailure: false,
      video: false
    },
  },
  e2e: {
    setupNodeEvents(on, config) {
      registerAIOTestsPlugin(on,config);
      // implement node event listeners here
      on('task', {
        log(message) {
          console.log(message)
          return null
        },
        table(message) {
          console.table(message)
          return null
        }
      })
    },
  }
});