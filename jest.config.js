module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    '<rootDir>/src/**/**.service.ts',
    '!<rootDir>/src/**/repository.service.ts',
  ],
};
