const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json()); // Middleware to parse JSON

const PORT = process.env.PORT || 3000;

// MongoDB Atlas connection string
const mongoURI ='mongodb+srv://kashishghadi16:hAWHhWke2qSKCCvJ@quotes.cy4u0k4.mongodb.net/';

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
    const random = Math.floor(Math.random() * count);
    const randomQuote = await Quote.findOne().skip(random);
    res.json(randomQuote);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Route to get quotes by author
app.get('/quotes-by-author/:author', async (req, res) => {
  try {
    const quotesByAuthor = await Quote.find({ author: req.params.author });
    res.json(quotesByAuthor);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
