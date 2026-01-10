/** @type {import("prettier").Config} */
module.exports = {
  semi: true,
  singleQuote: true,
  jsxSingleQuote: false,

  trailingComma: 'all',
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,

  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: 'always',

  endOfLine: 'lf',

  overrides: [
    {
      files: '*.md',
      options: {
        printWidth: 80,
      },
    },
  ],
};
  "semi": true,
  "singleQuote": false,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 100,
  "bracketSpacing": true,
  "endOfLine": "lf",
  "plugins": ["prettier-plugin-tailwindcss"]
}