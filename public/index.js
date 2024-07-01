const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const app = express();

app.use(cors());
app.use(express.json()); // Middleware to parse JSON

const PORT = process.env.PORT || 3002;

// MongoDB Atlas connection string
const mongoURI = 'mongodb+srv://kashishghadi16:hAWHhWke2qSKCCvJ@quotes.cy4u0k4.mongodb.net/';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Define Quote schema and model
const quoteSchema = new mongoose.Schema({
  text: String,
  author: String,
});

const Quote = mongoose.model('Quote', quoteSchema);

// Route to get a random quote
app.get('/random-quote', async (req, res) => {
  try {
    const count = await Quote.countDocuments();
    console.log(`Total quotes: ${count}`);
    if (count === 0) {
      return res.status(404).send('No quotes found');
    }
    const random = Math.floor(Math.random() * count);
    console.log(`Random index: ${random}`);
    const randomQuote = await Quote.findOne().skip(random);
    console.log(`Random quote: ${randomQuote}`);
    res.json(randomQuote);
  } catch (error) {
    console.error('Error fetching random quote:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Route to get quotes by author
app.get('/quotes-by-author/:author', async (req, res) => {
  try {
    const quotesByAuthor = await Quote.find({ author: req.params.author });
    res.json(quotesByAuthor);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Route for the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
