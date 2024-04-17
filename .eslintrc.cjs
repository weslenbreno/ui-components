module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    "ecmaFeatures": {
      "jsx": true
    }
  },
  extends: [
    "airbnb",
    "prettier",
    "plugin:react/recommended",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:storybook/recommended'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  plugins: ["prettier", "react", "react-hooks"],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
  settings: {
    "import/resolver": {
      "node": { "extensions": [".ts", ".tsx"] }
    }
  },
  env: {
    "es6": true,
    "browser": true,
    "jest": true,
    "node": true
  }
}
