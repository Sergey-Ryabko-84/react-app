export default {
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "^@redux/(.*)$": "<rootDir>/src/redux/$1",
    "^@features/(.*)$": "<rootDir>/src/features/$1",
    "^@common/(.*)$": "<rootDir>/src/common/$1",
    "^@styles/(.*)$": "<rootDir>/src/styles/$1",
    "^@layouts/(.*)$": "<rootDir>/src/layouts/$1",
    "^@routes/(.*)$": "<rootDir>/src/routes/$1",
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  extensionsToTreatAsEsm: [".ts", ".tsx"],
};
