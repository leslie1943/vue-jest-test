/**
 *Clear data in localStorage for current domain and subdomain.
  cy.clearLocalStorage() // clear all local storage
  cy.clearLocalStorage(key)
  cy.clearLocalStorage(options)
  cy.clearLocalStorage(keys, options)
  */

import { expect } from 'chai'

describe('commands-clear-localstorage', () => {
  it('command clear: to page', () => {
    cy.visit('/#/cypress-command-clearLocalStorage')
    localStorage.setItem('menu', JSON.stringify([1, 2, 3, 45]))
    cy.wait(1000)
    cy.log(JSON.stringify(localStorage.getItem('menu')))
  })

  it('command clear cookie: set cookie', () => {
    cy.clearLocalStorage('menu').then((ls) => {
      cy.log(JSON.stringify(ls.getItem('menu')))
    })
  })
})
