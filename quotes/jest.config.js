module.exports = {
  collectCoverageFrom: [
    'src/**/*.js',
    'src/config/wording/**/*.js',
    '!src/**/index.js',
    '!src/config/**/*.js',
    '!src/setupTests.js',
    '!src/components/**/*.stories.js',
    '!src/scripts/ensighten.js',
    '!src/scripts/loader.js',
    '!src/redux/store.js',
    '!src/redux/testUtils.js',
    '!src/mocks/*.js',
    '!src/config/wording/**/*.js',
  ],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: -10,
    },
  },
  coverageReporters: ['lcov', 'text'],
  setupFiles: ['<rootDir>/src/setupTests.js'],
  transform: {
    '^.+\\.(js|jsx)$': '<rootDir>/node_modules/babel-jest',
  },
  reporters: ['default', 'jest-html-reporters'],
  testEnvironment: 'jsdom',
};
