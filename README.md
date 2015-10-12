[![NPM version](https://badge.fury.io/js/read-neuron-json.svg)](http://badge.fury.io/js/read-neuron-json)
[![npm module downloads per month](http://img.shields.io/npm/dm/read-neuron-json.svg)](https://www.npmjs.org/package/read-neuron-json)
[![Build Status](https://travis-ci.org/neuron-js/read-neuron-json.svg?branch=master)](https://travis-ci.org/neuron-js/read-neuron-json)
[![Dependency Status](https://david-dm.org/neuron-js/read-neuron-json.svg)](https://david-dm.org/neuron-js/read-neuron-json)

# read-neuron-json

The utility to read neuron.json

## Install

```sh
$ npm install read-neuron-json --save
```

## Usage

```js
var read = require('read-neuron-json');
var cwd = '/path/to/package';
read(cwd, function (err, json){
  // ...
});
```

- cwd `path` the current working directory
- err `Error`
- json `Object` see below

#### json

Contains the fields below at least:

- name `String` the package name of the package
- main `path=` the filename(relative to `cwd`) of the main entry, if there is no main entry, there will be no `main` key in `json`
- entries `Array.<path>` if there's no entries, it will be an empty array.

## License

MIT
