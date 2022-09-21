module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    "prettier"
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    "comma-dangle": 0,
    "space-before-function-paren": 0,
    "react/prop-types": 0,
    "react/jsx-handler-names": 0,
    "react/jsx-fragments": 0,
    "react/no-unused-prop-types": 0,
    "react/jsx-curly-newline": 0,
    "import/export": 0,
    "@typescript-eslint/explicit-function-return-type": "off",
    "no-unused-vars": "off",
    "no-use-before-define": "off",
  }
}
