'use strict';

module.exports = {
  env: { es6: true },
  extends: ['eslint:recommended'],
  root: true,
  rules: {
    'accessor-pairs': 'error',
    'array-bracket-spacing': ['error', 'never'],
    'array-callback-return': 'error',
    'arrow-parens': ['error', 'as-needed'],
    'arrow-spacing': 'error',
    'block-spacing': ['error', 'never'],
    'brace-style': 'error',
    'comma-dangle': ['error', 'always-multiline'],
    'comma-spacing': 'error',
    'comma-style': 'error',
    'computed-property-spacing': 'error',
    curly: 'error',
    'dot-location': ['error', 'property'],
    'dot-notation': 'error',
    'eol-last': 'error',
    eqeqeq: 'error',
    'func-call-spacing': 'error',
    indent: ['error', 2, {
      CallExpression: { arguments: 1 },
      FunctionDeclaration: { body: 1, parameters: 1 },
      FunctionExpression: { body: 1, parameters: 1 },
      MemberExpression: 1,
      SwitchCase: 1,
    }],
    'key-spacing': 'error',
    'keyword-spacing': 'error',
    'linebreak-style': ['error', 'unix'],
    'lines-around-directive': 'error',
    'max-statements-per-line': 'error',
    'new-parens': 'error',
    'no-caller': 'error',
    'no-catch-shadow': 'error',
    'no-console': 'error',
    'no-duplicate-imports': 'error',
    'no-else-return': 'error',
    'no-eval': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-extra-parens': ['error', 'all', { nestedBinaryExpressions: false }],
    'no-floating-decimal': 'error',
    'no-global-assign': 'error',
    'no-implied-eval': 'error',
    'no-label-var': 'error',
    'no-lone-blocks': 'error',
    'no-lonely-if': 'error',
    'no-mixed-operators': 'error',
    'no-multi-spaces': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-object': 'error',
    'no-new-require': 'error',
    'no-octal-escape': 'error',
    'no-process-exit': 'error',
    'no-proto': 'error',
    'no-prototype-builtins': 'error',
    'no-restricted-properties': ['error', { object: 'describe', property: 'only' }, { object: 'it', property: 'only' }],
    'no-script-url': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-shadow': 'error',
    'no-tabs': 'error',
    'no-template-curly-in-string': 'error',
    'no-trailing-spaces': 'error',
    'no-unneeded-ternary': 'error',
    'no-unsafe-negation': 'error',
    'no-unused-expressions': 'error',
    'no-unused-vars': 'error',
    'no-useless-call': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-concat': 'error',
    'no-useless-constructor': 'error',
    'no-useless-escape': 'error',
    'no-useless-return': 'error',
    'no-var': 'error',
    'no-void': 'error',
    'no-whitespace-before-property': 'error',
    'no-with': 'error',
    'object-curly-spacing': ['error', 'always'],
    'object-shorthand': 'error',
    'operator-assignment': 'error',
    'padded-blocks': ['error', 'never'],
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'prefer-numeric-literals': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'quote-props': ['error', 'as-needed'],
    quotes: ['error', 'single', 'avoid-escape'],
    semi: ['error', 'always'],
    'semi-spacing': 'error',
    'space-before-blocks': 'error',
    'space-before-function-paren': 'error',
    'space-in-parens': 'error',
    'space-infix-ops': 'error',
    'space-unary-ops': 'error',
    'spaced-comment': 'error',
    strict: ['error', 'global'],
    'template-curly-spacing': 'error',
    'unicode-bom': 'error',
    'valid-typeof': ['error', { requireStringLiterals: true }],
    'wrap-iife': 'error',
    yoda: 'error',
  },
};
