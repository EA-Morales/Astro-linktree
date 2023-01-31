module.exports = {
    plugins: [require.resolve('prettier-plugin-astro')],
    overrides: [
      {
        files: '*.astro',
        options: {
          parser: 'astro',
        },
      },
    ],
    "useTabs": true,
    "singleQuote": true,
    "jsxSingleQuote": true,
    "bracketSameLine": true,
    "arrowParens": "always",
    "endOfLine": "auto",
    "singleAttributePerLine": true // Enforce single attribute per line in HTML, Vue and JSX.
  };