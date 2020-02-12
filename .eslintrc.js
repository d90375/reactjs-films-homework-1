module.exports = {
    env: {
        browser: true,
        node: true,
        es6: true
    },
    plugins: ["react"],
    extends: "airbnb",
    parser: "babel-eslint",
    globals: {
        jest: "readonly",
        test: "readonly",
        expect: "readonly",
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module"
    },
    rules: {
    }
};
