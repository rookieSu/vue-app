/*
 * @Author: suliang 
 * @Date: 2020-07-14 14:20:36 
 * @Last Modified by: suliang
 * @Last Modified time: 2020-07-14 14:27:25
 */
module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'plugin:vue/essential',
        'eslint:recommended'
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production'? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production'? 'error' : 'off',
        'no-unused-vars': 'off'
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
}