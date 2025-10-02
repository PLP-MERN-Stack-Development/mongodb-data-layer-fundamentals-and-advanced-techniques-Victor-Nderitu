// queries.js - MongoDB queries for PLP Bookstore Assignment

// Switch to the plp_bookstore database
use('plp_bookstore');

// Task 2: Basic CRUD Operations

// 1. Find all books in a specific genre
db.books.find({ genre: "Fiction" });

// 2. Find books published after a certain year
db.books.find({ published_year: { $gt: 1950 } });

// 3. Find books by a specific author
db.books.find({ author: "George Orwell" });

// 4. Update the price of a specific book
db.books.updateOne(
  { title: "The Great Gatsby" },
  { $set: { price: 11.99 } }
);

// 5. Delete a book by its title
db.books.deleteOne({ title: "Moby Dick" });

// Task 3: Advanced Queries

// 1. Find books that are both in stock and published after 2010
db.books.find({
  in_stock: true,
  published_year: { $gt: 2010 }
});

// 2. Use projection to return only title, author, and price
db.books.find(
  { genre: "Fiction" },
  { title: 1, author: 1, price: 1, _id: 0 }
);

// 3. Implement sorting by price (ascending and descending)
// Ascending
db.books.find().sort({ price: 1 });

// Descending
db.books.find().sort({ price: -1 });

// 4. Implement pagination (5 books per page)
// Page 1
db.books.find().limit(5).skip(0);

// Page 2
db.books.find().limit(5).skip(5);

// Page 3
db.books.find().limit(5).skip(10);

// Task 4: Aggregation Pipeline

// 1. Calculate average price of books by genre
db.books.aggregate([
  {
    $group: {
      _id: "$genre",
      averagePrice: { $avg: "$price" },
      count: { $sum: 1 }
    }
  },
  {
    $sort: { averagePrice: -1 }
  }
]);

// 2. Find author with the most books
db.books.aggregate([
  {
    $group: {
      _id: "$author",
      bookCount: { $sum: 1 }
    }
  },
  {
    $sort: { bookCount: -1 }
  },
  {
    $limit: 1
  }
]);

// 3. Group books by publication decade and count them
db.books.aggregate([
  {
    $project: {
      title: 1,
      author: 1,
      published_year: 1,
      decade: {
        $subtract: [
          "$published_year",
          { $mod: ["$published_year", 10] }
        ]
      }
    }
  },
  {
    $group: {
      _id: "$decade",
      bookCount: { $sum: 1 },
      books: { $push: "$title" }
    }
  },
  {
    $sort: { _id: 1 }
  }
]);

// Task 5: Indexing

// 1. Create index on title field
db.books.createIndex({ title: 1 });

// 2. Create compound index on author and published_year
db.books.createIndex({ author: 1, published_year: 1 });

// 3. Demonstrate performance improvement with explain()

// Without index (if no appropriate index exists)
db.books.find({ title: "1984" }).explain("executionStats");

// With index (after creating the index)
db.books.find({ title: "1984" }).explain("executionStats");

// Compound index example
db.books.find({ 
  author: "George Orwell", 
  published_year: { $gt: 1940 } 
}).explain("executionStats");

// Additional utility queries for verification

// Count total books
db.books.countDocuments();

// List all genres
db.books.distinct("genre");

// Find books with prices between range
db.books.find({
  price: { $gte: 10, $lte: 15 }
});

// Update multiple documents (example)
db.books.updateMany(
  { in_stock: false },
  { $set: { in_stock: true } }
);
