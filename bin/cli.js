#!/usr/bin/env node
'use strict';

process.title = 'mongodb-backup';
var VERSION = require('../package.json').version;
var cli = require('cli');

cli
    .parse({
      verbose: [ false, ' Save internal reporting into a logfile', 'file' ],
      host: [ false, ' Specifies a resolvable hostname for the mongod',
          'string' ],
      parser: [ 'p', ' Data parser (bson, json)', 'string', 'bson' ],
      out: [ 'o', ' Specifies the directory where saves the output', 'string',
          'dump/' ],
      tar: [ 't', ' Pack files into a .tar file', 'string' ],
      collections: [ 'c', 'Specifies a collection to backup', 'string' ],
      query: [ 'q', 'Query that optionally limits the documents included',
          'string' ],
      version: [ 'v', 'Display the current version' ]
    });

cli.main(function(args, options) {

  var self = this;
  if (options.version) {
    return console.log(process.title + ' v' + VERSION);
  } else if (args.length == 0 && !options.host) {
    self.fatal('Missing uri option');
  }

  self.spinner('Working..');
  var backup = require('mongodb-backup');
  backup({
    uri: args[0] || options.host,
    root: options.out,
    parser: options.parser,
    collections: options.collections ? JSON.parse(options.collections) : null,
    tar: options.tar,
    query: options.query ? JSON.parse(options.query) : null,
    logger: options.verbose,
    callback: function() {

      self.spinner('Working.. done\n', true);
    }
  });
});
