module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    extends: [
        '@nuxtjs',
        'plugin:nuxt/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
    ],
    parser: '@typescript-eslint/parser', // Парсер для TypeScript
    parserOptions: {
        project: './tsconfig.json', // Укажите проект TypeScript
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint'],
    globals: {
        useDevice: 'readonly', // Добавляем useDevice как глобальную переменную
    },
    overrides: [
        {
            files: ['*.vue'], // Для файлов .vue используем стандартный парсер
            parser: 'vue-eslint-parser', // Стандартный парсер для Vue
            parserOptions: {
                ecmaVersion: 2020,
                sourceType: 'module',
            },
        },
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off', // Разрешаем console в dev-режиме
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off', // Разрешаем debugger в dev-режиме
        '@typescript-eslint/no-unused-vars': 'warn', // Предупреждения о неиспользуемых переменных
    },
};