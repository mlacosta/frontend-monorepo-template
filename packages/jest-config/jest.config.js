/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
process.env.TZ = "UTC";

module.exports = {
  verbose: true,
  transform: {
    "^.+\\.(t|j)sx?$": [
      "@swc/jest",
      {
        jsc: {
          transform: {
            react: {
              runtime: "automatic",
            },
          },
        },
      },
    ],
    ".+\\.(css|styl|less|sass|scss)$": "jest-transform-css",
    "^.+\\.svg$": "jest-transformer-svg",
  },
  preset: "ts-jest",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  moduleNameMapper: { "^uuid$": "uuid" },
  testEnvironment: "jsdom",
  testEnvironmentOptions: {
    url: "http://localhost",
  },
  testPathIgnorePatterns: ["/node_modules/"],
  transformIgnorePatterns: [
    "/node_modules/(?!@react-dnd|react-dnd|dnd-core|react-dnd-html5-backend)",
  ],
  testMatch: ["**/*.(spec|test).{ts,tsx}"],
  collectCoverage: true,
  collectCoverageFrom: ["**/*.{ts,tsx}", "!**/stories/*.{ts,tsx}"],
  coverageDirectory: "./coverage/",
  projects: ["<rootDir>/packages/*/jest.config.js"],
  testMatch: ["<rootDir>/packages/**/*.(spec|test).{ts,tsx}"],
};


