'use strict';

const path = require('path');
const fs = require('fs');
const expect = require('chai').use(require('dirty-chai')).expect;
const config = require('../es2015');
const configValidator = require('eslint/lib/config/config-validator');
const RULES_DIR = path.join(__dirname, '../node_modules/eslint/lib/rules/');
const CORE_RULES = fs.readdirSync(RULES_DIR)
  .filter(fileName => fileName.endsWith('.js'))
  .map(fileName => path.basename(fileName, '.js'))
  .reduce((rules, ruleName) => Object.assign(rules, { [ruleName]: require(path.join(RULES_DIR, ruleName)) }), {});

describe('rules', () => {
  it('has no nonexistent rules', () => {
    Object.keys(config.rules).forEach(ruleName => {
      expect(CORE_RULES).to.have.ownProperty(ruleName, `The ${ruleName} rule does not exist.`);
    });
  });
  it('has no deprecated rules', () => {
    Object.keys(config.rules).forEach(ruleName => {
      expect(CORE_RULES[ruleName].meta.deprecated).not.to.be.ok(`The ${ruleName} rule is deprecated.`);
    });
  });
  it('has a valid configuration for all rules', () => {
    Object.keys(config.rules).forEach(ruleName => {
      configValidator.validateRuleOptions(ruleName, config.rules[ruleName], 'node.js');
    });
  });
});
