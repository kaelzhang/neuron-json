[![Build Status](https://travis-ci.org/neuron-js/neuron-json.svg?branch=master)](https://travis-ci.org/neuron-js/neuron-json)
<!-- [![NPM version](https://badge.fury.io/js/neuron-json.svg)](http://badge.fury.io/js/neuron-json)
[![npm module downloads per month](http://img.shields.io/npm/dm/neuron-json.svg)](https://www.npmjs.org/package/neuron-json)
[![Dependency Status](https://david-dm.org/neuron-js/neuron-json.svg)](https://david-dm.org/neuron-js/neuron-json) -->

# neuron-json

The utility to read neuron.json

## Install

```sh
$ npm install neuron-json --save
```

## Usage

```js
var nj = require('neuron-json');
var cwd = '/path/to/package';
nj.read(cwd, function (err, json){
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

### `process.env.NEURON_NO_TEST_ENTRY`

If `process.env.NEURON_NO_TEST_ENTRY` is specified, then neuron-json will not include test entries automatically.

## License

MIT
