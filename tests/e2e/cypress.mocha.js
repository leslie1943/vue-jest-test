/* eslint-disable @typescript-eslint/no-var-requires */
const cypress = require('cypress')
const fse = require('fs-extra')
const { merge } = require('mochawesome-merge')
const generator = require('mochawesome-report-generator')

async function runTests() {
  await fse.remove('mochawesome-report')
  const { totalFailed } = await cypress.run({
    configFile: './tests/e2e/cypress.mocha.report.json',
    browser: 'edge',
  })
  const jsonReport = await merge()
  await generator.create(jsonReport)
  process.exit(totalFailed)
}

runTests()
