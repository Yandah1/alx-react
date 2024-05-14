module.exports = {
  // ... other config options ...
  preset: 'ts-jest', // or 'babel-jest' if you're using Babel
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  moduleNameMapper: {
    '^react-native$': 'react-native-web',
  },
};