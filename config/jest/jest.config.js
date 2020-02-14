module.exports = {
  rootDir: '../../src',
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['**/*.{js,jsx}'],
  coveragePathIgnorePatterns: ['index.js'],
  coverageDirectory: '../coverage',
  coverageThreshold: {
    './src/': {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
};
