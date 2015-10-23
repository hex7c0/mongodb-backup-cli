# [mongodb-backup-cli](https://github.com/hex7c0/mongodb-backup-cli)

[![NPM version](https://img.shields.io/npm/v/mongodb-backup-cli.svg)](https://www.npmjs.com/package/mongodb-backup-cli)
[![Linux Status](https://img.shields.io/travis/hex7c0/mongodb-backup-cli.svg?label=linux)](https://travis-ci.org/hex7c0/mongodb-backup-cli)
[![Windows Status](https://img.shields.io/appveyor/ci/hex7c0/mongodb-backup-cli.svg?label=windows)](https://ci.appveyor.com/project/hex7c0/mongodb-backup-cli)
[![Dependency Status](https://img.shields.io/david/hex7c0/mongodb-backup-cli.svg)](https://david-dm.org/hex7c0/mongodb-backup-cli)

CLI for [`mongodb-backup`](https://github.com/hex7c0/mongodb-backup)

Similar to [mongodump](http://docs.mongodb.org/manual/reference/program/mongodump/)

## Installation

Install through NPM

```bash
npm install -g mongodb-backup-cli
```
or
```bash
git clone git://github.com/hex7c0/mongodb-backup-cli.git
```

## API

global cli with `-g` option
```bash
$ mongodb-backup -h

Usage:
  mongodb-backup [OPTIONS] [ARGS]

Options: 
      --verbose FILE       Save internal reporting into a logfile
      --host STRING        Specifies a resolvable hostname for the mongod
  -p, --parser [STRING]    Data parser (bson, json) (Default is bson)
  -o, --out [STRING]       Specifies the directory where saves the output  (Default is dump/)
  -t, --tar STRING         Pack files into a .tar file
  -c, --collections STRING Specifies a collection to backup
  -q, --query STRING       Query that optionally limits the documents included
  -m, --metadata           Save metadata of collections as Index, ecc
  -v, --version            Display the current version
  -h, --help               Display help and usage details
```

## Examples

Take a look at my [examples](examples)

### [License GPLv3](LICENSE)
