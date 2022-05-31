module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins:[
    [
      "module-resolver", 
      {
        root: ["./src"],
        alias: {
          "@views": "./src/views",
          '@components': './src/components',
          '@constants': './src/constants',
          '@assets': './src/assets',
          '@navigation': './src/navigation',
        }
      }
    ]
  ]
};
