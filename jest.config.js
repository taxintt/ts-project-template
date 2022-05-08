/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
  "roots": [
    "<rootDir>/src"
  ],

  // The test environment that will be used for testing
  "testEnvironment": "node",

  // The glob patterns Jest uses to detect test files
  "testMatch": [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)"
  ],

  // A map from regular expressions to paths to transformers
  "transform": {
    '^.+\\.(ts|tsx)$': 'esbuild-jest',
  },

  // Indicates whether each individual test should be reported during the run
  // verbose: true,
};
