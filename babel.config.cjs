module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-typescript', '@babel/preset-react'],
  babelrcRoots: ['.', 'src/*'],
  plugins: [
    ["@babel/plugin-transform-react-jsx", {
      "runtime": "automatic"
    }]
  ]
};
