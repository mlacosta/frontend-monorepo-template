/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
process.env.TZ = 'UTC';

module.exports = {
  verbose: true,
  transform: {
    '^.+\\.(t|j)sx?$': [
      '@swc/jest',
      {
        jsc: {
          transform: {
            react: {
              runtime: 'automatic',
            },
          },
        },
      },
    ],
    '.+\\.(css|styl|less|sass|scss)$': 'jest-transform-css',
    '^.+\\.svg$': 'svg-jest',
  },
  preset: 'ts-jest',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testURL: 'http://localhost',
  testEnvironment: 'jsdom',
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$'],
  testMatch: ['**/*.(spec|test).{ts,tsx}'],
  collectCoverage: true,
  collectCoverageFrom: ['**/*.{ts,tsx}', '!**/stories/*.{ts,tsx}'],
  coverageDirectory: './coverage/',
};
