'use strict';

module.exports = {
  env: { es6: false },
  extends: './es2015.js',
  rules: {
    'no-inner-declarations': ['error', 'functions'],
    'no-var': 'off',
    'object-shorthand': 'off',
    'prefer-arrow-callback': 'off',
    'prefer-numeric-literals': 'off',
    'prefer-rest-params': 'off',
    'prefer-spread': 'off',
  },
};
