module.exports = {

  apps : [{
    name      : "WDS",
    script    : "webpack-dev-server",
    env: {
      NODE_ENV: "development"
    },
    env_production : {
      NODE_ENV: "production"
    }
  }],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy : {
    production : {
      user : "elser",
      host : "values.life",
      ref  : "origin/master",
      repo : "https://github.com/ifElser/react-test-app.git",
      path : "/var/www/",
      env  : {
        NODE_ENV: "production"
      },
      "post-deploy" : "npm install && pm2 startOrRestart ecosystem.json --env production"
    },
    development : {
      user : "elser",
      host : "lab.values.life",
      ref  : "origin/master",
      repo : "https://github.com/ifElser/react-test-app.git",
      path : "/var/www/",
      "post-deploy" : "npm install && pm2 startOrRestart ecosystem.json --env development",
      env  : {
        NODE_ENV: "development"
      }
    }
  }
}
