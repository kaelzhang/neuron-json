'use strict';

var cleaner = require('../lib/clean')
var expect = require('chai').expect
var run = require('run-mocha-cases')

run
  .description('cleaner')
  .runner(function (name) {
    return cleaner.check_name(name)
  })
  .start([
    {
      a: '.a',
      e: false
    },

    {
      a: '-a',
      e: false
    },

    {
      a: 'a_e',
      e: false
    },

    {
      a: 'name',
      e: true
    },

    {
      a: 'name-a',
      e: true
    },

    {
      a: 'name-a.js',
      e: true
    },

    {
      a: 'name-a-2.js',
      e: true
    },

    {
      a: '2name',
      e: false
    },

    {
      a: '2',
      e: false
    },

    {
      a: 'name.',
      e: false
    },

    {
      a: 'name-',
      e: false
    }
  ])