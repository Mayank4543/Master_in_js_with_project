const fs = require('fs');

// File path
const filePath = 'example.txt';

// Asynchronous file read
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('File content:', data);
});

console.log('Reading file...'); // This will be printed first
