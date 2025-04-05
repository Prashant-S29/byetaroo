/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */

const config = {
  plugins: ['prettier-plugin-tailwindcss'],
  bracketSpacing: true,
  singleQuote: true,
  semi: true,
  trailingComma: 'all',
  printWidth: 120,
  tabWidth: 2,
  endOfLine: 'auto',
};

export default config;
