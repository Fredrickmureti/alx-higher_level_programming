#!/usr/bin/node
const fs = require('fs');

if (process.argv.length !== 5) {
  console.error('Usage: node 102-concat.js <fileA> <fileB> <fileC>');
  process.exit(1);
}

const [,, fileA, fileB, fileC] = process.argv;

fs.readFile(fileA, 'utf-8', (err, dataA) => {
  if (err) {
    console.error(`Error reading file ${fileA}:`, err.message);
    process.exit(1);
  }

  fs.readFile(fileB, 'utf-8', (err, dataB) => {
    if (err) {
      console.error(`Error reading file ${fileB}:`, err.message);
      process.exit(1);
    }

    const result = dataA + dataB;

    fs.writeFile(fileC, result, 'utf-8', (err) => {
      if (err) {
        console.error(`Error writing to file ${fileC}:`, err.message);
        process.exit(1);
      }

      console.log(`Files ${fileA} and ${fileB} were concatenated into ${fileC}`);
    });
  });
});
