const {
  addBabelPlugin,
  override,
  addPostcssPlugins,
} = require('customize-cra');

module.exports = override(
  addBabelPlugin([
    'babel-plugin-root-import',
    {
      rootPathSuffix: 'src',
    },
  ]),
  addPostcssPlugins([require('tailwindcss')])
);
