'use strict';

const path = require('path');
const fs = require('fs');
const expect = require('chai').use(require('dirty-chai')).expect;

describe('build', () => {
  it('points to a file that exists', () => {
    const mainFile = path.join(__dirname, '..', require('../package.json').main);
    expect(fs.existsSync(mainFile)).to.be.true(`The main file ${mainFile} does not exist.`);
  });
});
