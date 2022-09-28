const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task',{
        randomNumber(){
          return Math.floor(Math.random()*10)
        }
      })
    },
    'run_settings':  { network: true },
    baseUrl:'http://localhost:3000/',
  },
});
