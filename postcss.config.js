module.exports = ({ options }) => ({
  plugins: [
    require('postcss-import'),
    require('postcss-nested'),
    options.entry.name === 'basestyles.min' && require('cssnano')
  ]
});
