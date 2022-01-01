/* eslint-disable @typescript-eslint/no-var-requires */
const execSync = require('child_process').execSync
const exec = require('child_process').exec

console.info('running in scripts file - start')
execSync('npm run dev', { stdio: 'inherit' })
console.info('running in scripts file - finish')
