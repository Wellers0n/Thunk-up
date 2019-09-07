module.exports = {
  presets: [
    [
      "@babel/preset-env",
      "@babel/preset-flow",
      {
        targets: {
          node: "current"
        }
      }
    ],
    "@babel/preset-react"
  ],
  plugins: [
    "@babel/proposal-class-properties",
    "@babel/proposal-object-rest-spread",
    "@babel/plugin-transform-runtime",
    "react-hot-loader/babel"
  ]
};
