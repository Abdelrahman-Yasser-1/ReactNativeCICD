module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
        alias: {
          '@src': './src',
          '@packageJson': './package.json',
          '@appJson': './app.json',
        },
      },
    ],
  ],
};
