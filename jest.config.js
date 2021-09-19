module.exports = {
    verbose: false,
    collectCoverage: true,
    testEnvironment: 'jsdom',
    collectCoverageFrom: [
        'src/**/*.ts',
        '!src/**/*.test.ts'
    ],
    coverageThreshold: {
        global: {
            "branches": 90,
            "functions": 90,
            "lines": 90
        }
    },
    coverageReporters: [
        'text-summary',
        'html'
    ],
    setupFilesAfterEnv: [
        "@testing-library/jest-dom/extend-expect",
        "./testing/setupTests.ts"
    ],
    moduleNameMapper: {
        ".+\\.(css|scss)$": "identity-obj-proxy",
        "^react$": "<rootDir>/node_modules/react/index.js",
    },
    modulePaths: [
        "<rootDir>/src",
    ],
    roots: [
        "<rootDir>/src"
    ],
    testMatch: [
        "**/__tests__/**/*.+(ts|tsx|js)",
        "**/?(*.)+(spec|test).+(ts|tsx|js)"
    ],
    transform: {
        "^.+\\.(ts|tsx)$": "ts-jest",
    },
    globals: {
        'ts-jest': {
            tsconfig: 'tsconfig.test.json'
        }
    }
};
