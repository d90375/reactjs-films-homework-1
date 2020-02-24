module.exports = {
    env: {
        browser: true,
        node: true,
        es6: true
    },
    plugins: ["react", "import", "jsx-a11y", "react-hooks"],
    extends: "airbnb",
    parser: "babel-eslint",
    globals: {
        jest: "readonly",
        test: "readonly",
        expect: "readonly",
        describe: "readonly",
        it: "readonly"
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module"
    },
    rules: {
        "react/state-in-constructor": ["off"]
    }
};
