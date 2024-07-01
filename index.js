// index.js

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const PORT = process.env.PORT || 3000;

// Dummy data - replace with your actual quote data
const quotes = [
  { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
  { text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", author: "Albert Einstein" },
  { text: "So many books, so little time.", author: "Frank Zappa" },
];

// Route to get a random quote
app.get('/random-quote', (req, res) => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  res.json(randomQuote);
});

// Route to get quotes by author
app.get('/quotes-by-author/:author', (req, res) => {
  const { author } = req.params;
  const quotesByAuthor = quotes.filter(quote => quote.author.toLowerCase() === author.toLowerCase());
  res.json(quotesByAuthor);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
