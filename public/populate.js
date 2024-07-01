const mongoose = require('mongoose');

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

const quotes = [
  { text: 'Be yourself; everyone else is already taken.', author: 'Oscar Wilde' },
  { text: 'Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.', author: 'Albert Einstein' },
  { text: 'So many books, so little time.', author: 'Frank Zappa' },
  { text: 'A room without books is like a body without a soul.', author: 'Marcus Tullius Cicero' },
  { text: 'You only live once, but if you do it right, once is enough.', author: 'Mae West' },
  { text: 'Be the change that you wish to see in the world.', author: 'Mahatma Gandhi' },
  { text: 'If you tell the truth, you don\'t have to remember anything.', author: 'Mark Twain' },
  { text: 'A friend is someone who knows all about you and still loves you.', author: 'Elbert Hubbard' },
  { text: 'To live is the rarest thing in the world. Most people exist, that is all.', author: 'Oscar Wilde' },
  { text: 'Without music, life would be a mistake.', author: 'Friedrich Nietzsche' },
  { text: 'We accept the love we think we deserve.', author: 'Stephen Chbosky' },
  { text: 'I am so clever that sometimes I don\'t understand a single word of what I am saying.', author: 'Oscar Wilde' },
  { text: 'It is better to be hated for what you are than to be loved for what you are not.', author: 'André Gide' },
  { text: 'Life is what happens to us while we are making other plans.', author: 'Allen Saunders' },
  { text: 'Everything you can imagine is real.', author: 'Pablo Picasso' },
  { text: 'Sometimes the questions are complicated and the answers are simple.', author: 'Dr. Seuss' },
  { text: 'I\'m not afraid of death; I just don\'t want to be there when it happens.', author: 'Woody Allen' },
  { text: 'We are all in the gutter, but some of us are looking at the stars.', author: 'Oscar Wilde' },
  { text: 'Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.', author: 'Neil Gaiman' },
  { text: 'The only way to do great work is to love what you do.', author: 'Steve Jobs' },
  { text: 'Life is like riding a bicycle. To keep your balance, you must keep moving.', author: 'Albert Einstein' },
  { text: 'The journey of a thousand miles begins with one step.', author: 'Lao Tzu' },
  { text: 'Do not go where the path may lead, go instead where there is no path and leave a trail.', author: 'Ralph Waldo Emerson' },
  { text: 'In three words I can sum up everything I\'ve learned about life: it goes on.', author: 'Robert Frost' },
  { text: 'To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.', author: 'Ralph Waldo Emerson' },
  { text: 'Success is not final, failure is not fatal: It is the courage to continue that counts.', author: 'Winston Churchill' },
  { text: 'What lies behind us and what lies before us are tiny matters compared to what lies within us.', author: 'Ralph Waldo Emerson' },
  { text: 'The only impossible journey is the one you never begin.', author: 'Tony Robbins' },
  { text: 'Believe you can and you\'re halfway there.', author: 'Theodore Roosevelt' },
  { text: 'The purpose of our lives is to be happy.', author: 'Dalai Lama' },
  { text: 'You have within you right now, everything you need to deal with whatever the world can throw at you.', author: 'Brian Tracy' },
  { text: 'There are no mistakes, only opportunities.', author: 'Tina Fey' },
  { text: 'The best way to predict the future is to invent it.', author: 'Alan Kay' },
  { text: 'You miss 100% of the shots you don\'t take.', author: 'Wayne Gretzky' },
  { text: 'Act as if what you do makes a difference. It does.', author: 'William James' },
  { text: 'Success usually comes to those who are too busy to be looking for it.', author: 'Henry David Thoreau' },
  { text: 'The future belongs to those who believe in the beauty of their dreams.', author: 'Eleanor Roosevelt' },
  { text: 'Life is what we make it, always has been, always will be.', author: 'Grandma Moses' },
  { text: 'The way to get started is to quit talking and begin doing.', author: 'Walt Disney' },
  { text: 'Don\'t watch the clock; do what it does. Keep going.', author: 'Sam Levenson' },
  { text: 'You only pass through this life once, you don\'t come back for an encore.', author: 'Elvis Presley' },
  { text: 'The best time to plant a tree was 20 years ago. The second best time is now.', author: 'Chinese Proverb' },
  { text: 'The biggest risk is not taking any risk.', author: 'Mark Zuckerberg' },
  { text: 'The best revenge is massive success.', author: 'Frank Sinatra' },
  { text: 'Your time is limited, don’t waste it living someone else’s life.', author: 'Steve Jobs' },
  { text: 'If life were predictable it would cease to be life, and be without flavor.', author: 'Eleanor Roosevelt' },
  { text: 'If you look at what you have in life, you’ll always have more.', author: 'Oprah Winfrey' },
  { text: 'If you set your goals ridiculously high and it’s a failure, you will fail above everyone else’s success.', author: 'James Cameron' },
  { text: 'Life is what happens when you’re busy making other plans.', author: 'John Lennon' },
  { text: 'Spread love everywhere you go. Let no one ever come to you without leaving happier.', author: 'Mother Teresa' },
  { text: 'When you reach the end of your rope, tie a knot in it and hang on.', author: 'Franklin D. Roosevelt' },
  { text: 'Always remember that you are absolutely unique. Just like everyone else.', author: 'Margaret Mead' },
  { text: 'Don’t judge each day by the harvest you reap but by the seeds that you plant.', author: 'Robert Louis Stevenson' },
  { text: 'The future belongs to those who prepare for it today.', author: 'Malcolm X' },
  { text: 'The best way to find yourself is to lose yourself in the service of others.', author: 'Mahatma Gandhi' },
  { text: 'If you tell the truth, you don’t have to remember anything.', author: 'Mark Twain' },
  { text: 'The only limit to our realization of tomorrow is our doubts of today.', author: 'Franklin D. Roosevelt' },
  { text: 'Do what you can, with what you have, where you are.', author: 'Theodore Roosevelt' },
  { text: 'In the end, we will remember not the words of our enemies, but the silence of our friends.', author: 'Martin Luther King Jr.' },
  { text: 'It does not matter how slowly you go as long as you do not stop.', author: 'Confucius' },
  { text: 'Everything you’ve ever wanted is on the other side of fear.', author: 'George Addair' },
  { text: 'Life is either a daring adventure or nothing at all.', author: 'Helen Keller' },
  { text: 'Dream big and dare to fail.', author: 'Norman Vaughan' },
  { text: 'Life is short, and it is up to you to make it sweet.', author: 'Sarah Louise Delany' },
  { text: 'Keep smiling, because life is a beautiful thing and there’s so much to smile about.', author: 'Marilyn Monroe' },
  { text: 'The greatest glory in living lies not in never falling, but in rising every time we fall.', author: 'Nelson Mandela' },
  { text: 'Go confidently in the direction of your dreams! Live the life you’ve imagined.', author: 'Henry David Thoreau' },
  { text: 'The purpose of our lives is to be happy.', author: 'Dalai Lama' },
  { text: 'To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.', author: 'Ralph Waldo Emerson' },
  { text: 'Life is what happens when you’re busy making other plans.', author: 'John Lennon' },
  { text: 'You have within you right now, everything you need to deal with whatever the world can throw at you.', author: 'Brian Tracy' },
  { text: 'Life itself is the most wonderful fairy tale.', author: 'Hans Christian Andersen' },
  { text: 'Do not let making a living prevent you from making a life.', author: 'John Wooden' },
  { text: 'Life is ours to be spent, not to be saved.', author: 'D. H. Lawrence' },
  { text: 'Keep smiling, because life is a beautiful thing and there’s so much to smile about.', author: 'Marilyn Monroe' },
  { text: 'You only live once, but if you do it right, once is enough.', author: 'Mae West' },
  { text: 'In the end, it’s not the years in your life that count. It’s the life in your years.', author: 'Abraham Lincoln' },
  { text: 'Life is really simple, but we insist on making it complicated.', author: 'Confucius' },
  { text: 'May you live all the days of your life.', author: 'Jonathan Swift' },
  { text: 'Life is made of ever so many partings welded together.', author: 'Charles Dickens' },
  { text: 'Your time is limited, so don’t waste it living someone else’s life.', author: 'Steve Jobs' },
  { text: 'Life is a succession of lessons which must be lived to be understood.', author: 'Ralph Waldo Emerson' },
  { text: 'You will face many defeats in life, but never let yourself be defeated.', author: 'Maya Angelou' },
  { text: 'Never let the fear of striking out keep you from playing the game.', author: 'Babe Ruth' },
  { text: 'Life is never fair, and perhaps it is a good thing for most of us that it is not.', author: 'Oscar Wilde' },
  { text: 'The only impossible journey is the one you never begin.', author: 'Tony Robbins' },
  { text: 'In this life we cannot do great things. We can only do small things with great love.', author: 'Mother Teresa' },
  { text: 'Only a life lived for others is a life worthwhile.', author: 'Albert Einstein' },
  { text: 'The purpose of our lives is to be happy.', author: 'Dalai Lama' },
  { text: 'Life is really simple, but we insist on making it complicated.', author: 'Confucius' },
  { text: 'Life is a long lesson in humility.', author: 'James M. Barrie' }
];

Quote.insertMany(quotes)
  .then(() => {
    console.log('Quotes added successfully');
    mongoose.connection.close();
  })
  .catch(err => {
    console.error('Error adding quotes:', err);
    mongoose.connection.close();
  });
