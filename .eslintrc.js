module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "airbnb", "prettier"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "import/prefer-default-export": "off",
    "react/prop-types": "off",
    "react/button-has-type": "off",
    "arrow-body-style": "off",
    "react/prefer-stateless-function": 0,
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
  },
};
