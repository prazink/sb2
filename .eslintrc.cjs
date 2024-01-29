module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
    },
    extends: [
        '@nuxtjs',
        '@nuxtjs/eslint-config-typescript'
    ],
    plugins: [],
    rules: {
        'comma-dangle': ['error', {
            arrays: 'always-multiline',
            objects: 'always-multiline',
            imports: 'always-multiline',
            exports: 'always-multiline',
            functions: 'always-multiline',
        }],
        'vue/prop-name-casing': 0,
        'vue/multi-word-component-names': 'off',
    },
}