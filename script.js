// public/script.js

const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');
const authorSelect = document.getElementById('author-select');
const searchBtn = document.getElementById('search-btn');

// Function to fetch random quote
async function fetchRandomQuote() {
  try {
    const response = await fetch('/random-quote');
    const data = await response.json();
    displayQuote(data);
  } catch (error) {
    console.error('Error fetching random quote:', error);
  }
}

// Function to display quote
function displayQuote(quote) {
  quoteText.textContent = `"${quote.text}"`;
  quoteAuthor.textContent = `- ${quote.author}`;
}

// Function to fetch quotes by author
async function fetchQuotesByAuthor(author) {
  try {
    const response = await fetch(`/quotes-by-author/${author}`);
    const data = await response.json();
    displayQuote(data[0]); // Display the first quote found
  } catch (error) {
    console.error(`Error fetching quotes by ${author}:`, error);
  }
}

// Event listener for search button
searchBtn.addEventListener('click', () => {
  const selectedAuthor = authorSelect.value;
  if (selectedAuthor) {
    fetchQuotesByAuthor(selectedAuthor);
  } else {
    fetchRandomQuote();
  }
});

// Initial load: fetch and display random quote
fetchRandomQuote();
