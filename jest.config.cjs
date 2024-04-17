module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  coverageDirectory: '<rootDir>/reports/',
  clearMocks: true,
  coverageReporters: ['cobertura', 'html', 'lcov', 'text-summary', 'text'],
  coverageThreshold: {
    global: {
      branches: 90,
      lines: 90,
      functions: 90,
      statements: 90,
    },
  },
  moduleNameMapper: {
    "^.+\\.(css|less|scss)$": "identity-obj-proxy"
  },
};
