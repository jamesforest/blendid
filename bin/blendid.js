#!/usr/bin/env node
const path = require('path');
// do not commit!
const additionalArgs   = require('minimist')(process.argv.slice(2))._
const blendidEntryFile = './gulpfile.js/index.js';
const gulpModulePath   = './node_modules/gulp';
const gulpBinaryFile   = path.join(gulpModulePath, 'bin/gulp.js');

let args = ['--gulpfile', blendidEntryFile]

if(additionalArgs.length) {
  args = args.concat(additionalArgs)
}

require('child_process').fork(gulpBinaryFile, args)
