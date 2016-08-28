'use strict';

import { expect } from 'chai'
import path from 'path'
import shell from 'shelljs'

const exec = cmd => expect( shell.exec(cmd, { silent: true }).code ).to.equal(0)

describe('command line tools tests', function () {

  this.timeout(20000)
  before( () => {
    
  })

  it('add:page', () => {
    exec('npm run add:page temp_page')
    shell.rm(path.join(__dirname, '..', 'assets/sass/temp_page.scss'))
    shell.rm(path.join(__dirname, '..', 'jsondata/temp_page.json'))
    shell.rm(path.join(__dirname, '..', 'src/temp_page.js'))
    shell.rm(path.join(__dirname, '..', 'views/temp_page.html'))
  })

  it('build', () => {
    exec('npm run build')
    shell.rm('-rf', path.join(__dirname, '..', 'dist'))
  })

})