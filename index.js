// utility tools for neuron.json

'use strict'

var fse         = require('fs-extra')
var fs          = require('fs')
var node_path   = require('path')
var cleaner     = require('./lib/clean')
var comment_json = require('comment-json')


// Cleans the neuron.json for legacy
exports.clean = function (cwd, json, callback) {
  cleaner.clean(cwd, json, callback)
}


exports.read = function(cwd, callback) {
  cwd = node_path.resolve(cwd)
  var file = node_path.join(cwd, 'neuron.json')

  exports._read_json(file, function (err, json) {
    if (err) {
      return callback(err)
    }

    cleaner.clean(cwd, json, callback)
  })
}


exports.write = function(cwd, json, callback) {
  var file = node_path.join(cwd, 'neuron.json')
  exports._save_to_file(file, pkg, callback)
}


exports._save_to_file = function(file, json, callback) {
  fse.outputFile(file, comment_json.stringify(json, null, 2), function(err) {
    callback(err && {
      code: 'ERROR_SAVE_PKG',
      message: 'fail to save package to "' + file + '", error: ' + err.stack,
      data: {
        error: err,
        file: file
      }
    })
  })
}


exports._read_json = function(file, callback) {
  function cb (err, pkg) {
    if (err) {
      return callback({
        code: 'ERROR_READ_JSON',
        message: 'Error reading "' + file + '": \n' + err.stack,
        data: {
          error: err,
          file: file
        }
      })
    }

    callback(null, pkg)
  }

  fs.exists(file, function (exists) {
    if (!exists) {
      return callback(null, {})
    }

    fs.readFile(file, function (err, content) {
      if (err) {
        return cb(err)
      }

      var pkg
      try {
        pkg = comment_json.parse(content.toString())
      } catch(e) {
        return cb(e)
      }

      cb(null, pkg)
    })
  })
}

