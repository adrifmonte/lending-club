const fs = require('fs');
const zlib = require('zlib');

fs.createReadStream('../output/accepted_small.csv')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('../input/accepted_small.csv.gz'));

fs.createReadStream('../output/rejected_small.csv')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('../input/rejected_small.csv.gz'));
