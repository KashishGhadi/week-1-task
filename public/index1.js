const express = require('express');
const path = require('path');
const app = express();

const PUBLIC_DIR = path.join(__dirname, 'public');

// Serve static files from the 'public' directory
app.use(express.static(PUBLIC_DIR));

// Example route for the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(PUBLIC_DIR, 'index.html'));
});

// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
