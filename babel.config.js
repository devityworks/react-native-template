module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.ios.js', '.android.js', '.js', '.json'],
        alias: {
          screens: './src/screens',
          navigation: './src/navigation',
          store: './src/store',
          config: './src/config',
          assets: './src/assets',
          shared: './src/shared',
          services: './src/services',
          utils: './src/utils',
          hooks: './src/hooks',
        },
      },
    ],
  ],
};
