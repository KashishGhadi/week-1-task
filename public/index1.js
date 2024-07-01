const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

const indexPath = path.join(__dirname, 'public', 'index.html');
console.log('Resolved path:', indexPath); // Check resolved path

// Check if index.html exists
fs.access(indexPath, fs.constants.F_OK, (err) => {
  if (err) {
    console.error('index.html does not exist or is inaccessible:', err);
    return;
  }

  // Serve index.html
  app.get('/', (req, res) => {
    res.sendFile(indexPath);
  });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

