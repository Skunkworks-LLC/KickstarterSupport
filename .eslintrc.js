/**
 * These rules enforce the Hack Reactor Style Guide
 *
 * Visit this repo for more information:
 *   https://github.com/reactorcore/eslint-config-hackreactor
 */

module.exports = {
  "env": { "es6": true },
  "extends": ["airbnb", "plugin:jsx-a11y/recommended", "plugin:react/recommended"],
  "rules": {
    "semi": ["error", "always"],
    "no-console": "off",
  },
  "parserOptions": {
    "ecmaVersion": 6,
    "ecmaFeatures": {
      "jsx": true
    },
  },
};