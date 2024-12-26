import baseConfig from "../../jest.config.js";

export default {
    ...baseConfig,
    rootDir: '.',
    setupFilesAfterEnv: ['./jest.setup.ts'],
    transform: {
      '^.+\\.(ts|tsx)$': 'ts-jest',
    },
    testRegex: '(/src/_tests_/.*|(\\.|/)(test|spec))\\.test\\.(ts|tsx)$',
    coverageDirectory: 'coverage',
    collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
  };
  