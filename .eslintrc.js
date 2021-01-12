module.exports = {
    "root": true,
    "env": {
        "browser": true,
        "node": true,
        "es6": true
    },
    "extends": [
        "plugin:vue/vue3-essential",
        "eslint:recommended",
        "@vue/typescript/recommended",
        "@vue/prettier",
        "@vue/prettier/@typescript-eslint"
    ],
    "parserOptions": {
        "parser": 'babel-eslint',
        "ecmaVersion": 2020,
        "sourceType": 'module',
        "ecmaFeatures":{
            jsx: true,
            tsx: true
        }
    },
    "rules": {
        "@typescript-eslint/indent": "off",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/member-delimiter-style": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/ban-ts-ignore": "warn",
        "@typescript-eslint/no-empty-interface": "off",
        "@typescript-eslint/camelcase": "warn",
        "@typescript-eslint/interface-name-prefix": "warn",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-empty-function": "off",
        "prettier/prettier": ["error", {
            "usePrettierrc": false,
            "stylelintIntegration": true,
            "eslintIntegration": true,
            "singleQuote": true,
            "semi": false,
            "insertPragma": false,
            "trailingComma": "none",
            "arrowParens": "avoid"
        }]
    }
}