module.exports = {
   // 默认情况下，ESLint会在所有父级组件中寻找配置文件，一直到根目录。ESLint一旦发现配置文件中有 "root": true，它就会停止在父级目录中寻找。
    root: true,
    // 对Babel解析器的包装使其与 ESLint 兼容。
    parser: 'babel-eslint',
    parserOptions: {
        // 代码是 ECMAScript 模块
        sourceType: 'module'
    },
    env: {
        // 预定义的全局变量，这里是浏览器环境
        browser: true,
    },
    // 扩展一个流行的风格指南，即 eslint-config-standard
    // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
    extends: ['react-app', 'standard'],
    // required to lint *.vue files
    plugins: [
        // 此插件用来识别.html 和 .vue文件中的js代码
        'html'
    ],
    // add your custom rules here
    rules: {
        // allow paren-less arrow functions
        'arrow-parens': 0,
        // allow async-await
        'generator-star-spacing': 0,
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        // 句尾必须加分号
        'semi': [2, "always"],
        // 可以不用===
        'eqeqeq': [0],
        // 关键字后可以不加空格
        'keyword-spacing': [0],
        // function 定义时可以不加空格
        'space-before-function-paren': [0],
        // 不检查模板字符串格式
        'no-template-curly-in-string': [0],
        // 禁止使用var
        'no-var': [2],
        // 允许在一个作用于内有多个变量申明
        'one-var': [0]
    }
}