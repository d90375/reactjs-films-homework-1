module.exports = {
    clearMocks: true,
    collectCoverage: true,
    coverageDirectory: "../../coverage",
    coverageThreshold: {
        "./src/": {
            branches: 100,
            functions: 100,
            lines: 100,
            statements: -10
        }
    },
    rootDir: "../../src",
    moduleNameMapper: {
        ".+\\.(css|scss)$": "identity-obj-proxy",
        "\\.(gif|ttf|eot|svg)$": "./__mocks__/fileMock.js"
    }
};
