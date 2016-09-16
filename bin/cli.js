#!/usr/bin/env node
'use strict';

process.title = 'mongodbBackup';
var VERSION = require('../package.json').version;
var cli = require('cli');
var backup = require('mongodb-backup');

cli.enable('timeout').enable('version');
cli
    .parse({
      verbose: [ false, 'Save internal reporting into a logfile', 'file' ],
      host: [ false, 'Specifies a resolvable hostname for the mongod', 'string' ],
      cursors: [ 'c', 'Num of cursors', 'int', 0 ],
      parser: [ 'p', 'Data parser (bson, json)', 'string', 'bson' ],
      out: [ 'o', ' Specifies the directory where saves the output', 'string',
        'dump/' ],
      tar: [ 'r', 'Pack files into a .tar file', 'string' ],
      collections: [ 'c', 'Specifies a collection to backup', 'string' ],
      query: [ 'q', 'Query that optionally limits the documents included',
        'string' ],
      metadata: [ 'm', 'Save metadata of collections as Index, ecc' ]
    });

cli.setApp(process.title, VERSION).main(
  function(args, options) {

    var self = this;

    if (options.version) {
      return self.info(process.title + ' v' + VERSION);
    } else if (args.length === 0 && !options.host) {
      self.fatal('Missing uri option');
    }

    self.spinner('Working..');
    try {
      backup({
        uri: args[0] || options.host,
        root: options.out,
        parser: options.parser,
        numCursors: options.cursors,
        collections: options.collections ? JSON.parse(options.collections)
          : null,
        tar: options.tar,
        query: options.query ? JSON.parse(options.query) : null,
        logger: options.verbose,
        metadata: options.metadata,
        callback: function(err) {

          if (err) {
            self.spinner('Working.. error\n', true);
            self.fatal(err.message);
          } else {
            self.spinner('Working.. done\n', true);
          }
        }
      });
    } catch (e) {
      self.spinner('Working.. error\n', true);
      self.fatal(e.message);
    }
  });
