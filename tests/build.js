'use strict';

const path = require('path');
const fs = require('fs');
const childProcess = require('child_process');
const expect = require('chai').use(require('dirty-chai')).expect;

function exec (command) {
  return childProcess.execSync(command).toString();
}

function getLatestCommitMessage () {
  return exec('git --no-pager show -s --oneline --format="%B" HEAD');
}

describe('build', () => {
  describe('package.json', () => {
    it('points to a file that exists', () => {
      const mainFile = path.join(__dirname, '..', require('../package.json').main);
      expect(fs.existsSync(mainFile)).to.be.true(`The main file ${mainFile} does not exist.`);
    });
  });
  describe('commit message', () => {
    it('has at most 72 characters', () => {
      const latestCommit = getLatestCommitMessage();
      expect(latestCommit.length).to.be.at.most(72, 'Commit message is too long; must be at most 72 characters.');
    });
    it('starts with a valid prefix', () => {
      const latestCommit = getLatestCommitMessage();
      const PREFIXES = ['Fix:', 'Update:', 'New:', 'Breaking:', 'Docs:', 'Build:', 'Upgrade:', 'Chore:'];
      expect(
        PREFIXES.some(prefix => latestCommit.startsWith(prefix))
      ).to.be.true(`Commit message must start with one of ${PREFIXES.join(', ')}`);
    });
  });
});
