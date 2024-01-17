const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:'https://qa-challenge.ensolvers.com/'
  },
  env:{  
    login:{
    username: "user",
    password: "user"
      },
  endpoints:{
    
    manageToDoItems: "to-do-item?page=1&sort=id," ,
    idEndpoint: "to-do-item?page=1&sort=id,",
    titleEndpoint: "to-do-item?page=1&sort=title,",
    descriptionEndpoint: "to-do-item?page=1&sort=description,",
    loginEndpoint: "login",
    logoutEndpoint: "logout"
  },
}
});
