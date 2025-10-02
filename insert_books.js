// insert_books.js
// Script to populate the plp_bookstore database with sample books

const { MongoClient } = require("mongodb");

async function run() {
  const uri = "mongodb://127.0.0.1:27017"; // update if using Atlas
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db("plp_bookstore");
    const books = db.collection("books");

    // Clear old data
    await books.deleteMany({});

    // Insert sample books
    await books.insertMany([
      {
        title: "1984",
        author: "George Orwell",
        genre: "Dystopian",
        published_year: 1949,
        price: 9.99,
        in_stock: true
      },
      {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: "Fiction",
        published_year: 1925,
        price: 10.99,
        in_stock: true
      },
      {
        title: "Moby Dick",
        author: "Herman Melville",
        genre: "Adventure",
        published_year: 1851,
        price: 8.50,
        in_stock: false
      },
      {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genre: "Fiction",
        published_year: 1960,
        price: 12.50,
        in_stock: true
      },
      {
        title: "The Silent Patient",
        author: "Alex Michaelides",
        genre: "Thriller",
        published_year: 2019,
        price: 14.99,
        in_stock: true
      }
    ]);

    console.log("✅ Books inserted successfully!");
  } catch (err) {
    console.error("Error inserting books:", err);
  } finally {
    await client.close();
  }
}

run();
