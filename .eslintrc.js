module.exports = {
    "root": true,
    "env": {
        "browser": true,
        "node": true,
        "es6": true
    },
    "extends": ["plugin:prettier/recommended", "eslint:recommended", "plugin:vue/recommended"],
    "rules": {
        "no-console": "warn",
        "prettier/prettier": [
            "warn",
            {
                "trailingComa": "es5",
                "tabWidth": 2,
                "singleQuote": true,
                "printWidth": 120
            }
        ]
    },
    "plugins": ["prettier"]
}
