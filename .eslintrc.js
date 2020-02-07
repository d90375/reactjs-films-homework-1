module.exports = {
  "env": {
    "browser": true,
    "node": true,
    "es6": true,
    
  },
  "plugins": [ "react" ],
  "extends": "airbnb/hooks",
  "parser": "babel-eslint",
  "globals": {
    "jest": "readonly",
  },
  "parserOptions": {
      "ecmaVersion": 2018,
      "sourceType": "module"
  },
  "rules": {
  }
};