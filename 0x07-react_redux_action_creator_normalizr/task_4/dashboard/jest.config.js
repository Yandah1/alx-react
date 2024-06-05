module.exports = {
  transform: {
    '^.+\\.jsx?$': 'babel-jest',  // ensures that Babel compiles your JS/JSX files
  },
  moduleNameMapper: {
    '\\.css$': '<rootDir>/__mocks__/styleMock.js',
    '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js',
  },
  setupFilesAfterEnv: ['<rootDir>/config/setupTests.js'],
  
};