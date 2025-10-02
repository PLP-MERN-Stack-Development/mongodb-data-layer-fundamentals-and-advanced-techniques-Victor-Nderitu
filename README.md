# PLP Bookstore MongoDB Assignment

This repository contains the solution for the **Week 1 MongoDB Assignment** for the PLP Bookstore project.  
It demonstrates basic and advanced MongoDB operations, including CRUD, aggregation pipelines, and indexing.

---

## 📂 Project Structure
plp-bookstore/
├── insert_books.js # Script to populate the database with sample book data
├── queries.js # MongoDB queries for all tasks (CRUD, aggregation, indexing)
├── README.md # Documentation file (this one)
└── screenshot.png # Screenshot of MongoDB Compass/Atlas showing collections and data


---

## ⚙️ Setup Instructions

### 🔑 Prerequisites
- **MongoDB** installed locally OR a **MongoDB Atlas** account
- **Node.js** installed (for running `.js` scripts)
- **MongoDB Shell (`mongosh`)** or **MongoDB Compass**

---

### Option 1: Local MongoDB Setup
1. Install MongoDB Community Edition from the [MongoDB Website](https://www.mongodb.com/try/download/community).
2. Start the MongoDB service:
   ```bash
   mongod
   mongod

3. Open the MongoDB shell:

bash
Copy code
mongosh


Option 2: MongoDB Atlas Setup

Sign up for MongoDB Atlas
.

Create a cluster and database named plp_bookstore.

Connect to your cluster using MongoDB Compass or mongosh.

Running the Scripts
1. Insert Sample Data

Run the following command to insert initial book records:
bash

node insert_books.js
This will create the books collection inside the plp_bookstore database.

2. Run Queries
Option A: Run all queries at once

From the terminal:

mongosh < queries.js

Option B: Run queries interactively

Open mongosh:

mongosh


Copy-paste individual queries from queries.js.

📸 Screenshot

A screenshot (screenshot.png) is included in this repo showing the plp_bookstore database and its books collection in MongoDB Compass/Atlas with sample data.

📝 Contents

insert_books.js → Inserts initial book documents.

queries.js → Contains all MongoDB queries:

Basic CRUD operations

Advanced queries (filters, projections, pagination, sorting)

Aggregation pipelines (average price, books per decade, top author)

Indexing and performance testing

screenshot.png → Evidence of database and collection setup

README.md → Documentation and instructions
