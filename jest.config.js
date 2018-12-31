module.exports = {
  clearMocks: true,
  collectCoverageFrom: ['client/src/**/*.{js,jsx,mjs}'],
  coverageDirectory: 'coverage',
  moduleFileExtensions: ['js', 'json', 'jsx'],
  setupFiles: ['<rootDir>enzyme.config.js'],
  testEnvironment: 'jsdom',
  testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
  testPathIgnorePatterns: ['\\\\node_modules\\\\'],
  testURL: 'http://localhost:1234',
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  verbose: true,
};