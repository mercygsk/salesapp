# MERN Product Review App

Welcome to the MERN Product Review App! This application allows users to browse, submit, and read reviews for various products.

## Introduction

The "Product Review App" is a MERN (MongoDB, Express.js, React, Node.js) application that allows users to review and manage their favorite products, providing a seamless and interactive platform for sharing and editing product experiences.

## Table of Contents

- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Trello Board](#trello-board)
- [Deployed App](#deployed-app)
- [Installation](#install-dependencies)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [API Endpoints](#api-endpoints)
- [Flow Chart](#flow-chart)
- [ER Diagram](#er-diagram)
- [Wireframes](#wireframes)
- [Unsolved Problems](#unsolved-problems)
- [Future Enhancements](#future-enhancements)
- [Acknowledgments](#acknowledgments)

## Getting Started

These instructions will help you set up and run the MERN Product Review App on your local machine.

#### Trello Board

https://trello.com/b/0GB6lpVT/product-review-app

#### Deployed App

https://product-review-app.onrender.com

### Prerequisites

- Node.js and npm installed on your machine.
- MongoDB installed locally or a MongoDB Atlas account.

### Install Dependencies

```console
npm install
npm create vite@lates
npm run build

  "bcrypt": "^5.1.1",
  "dotenv": "^16.3.1",
  "express": "^4.18.2",
  "jsonwebtoken": "^9.0.2",
  "mongoose": "^8.0.3",
  "morgan": "^1.10.0",
  "nodemon": "^3.0.2",
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-icons": "^5.0.1",
  "react-router-dom": "^6.21.1",
  "serve-favicon": "^2.5.0"
```

### Features
Browse products and their reviews.
Submit reviews for products.
User authentication for submitting reviews.


### Tech Stack
React.js for the frontend.
Node.js and Express for the backend.
MongoDB for the database.

### Project Structure

```console
/mern-product-review-app
  ├── /client          # Frontend React app
  ├── /server          # Backend Node.js and Express server
      ├── /config      # Server configurations
      ├── /controllers # Route controllers
      ├── /models      # MongoDB models
      ├── /routes      # Express routes
      └── server.js    # Server entry point
  ├── /database        # Database configurations
  ├── /public          # Public assets
  └── README.md        # Project documentation
```

### Configuration 
Database configuration settings can be found in /database/config.js.
Server configuration settings can be found in /server/config/.

### API Endpoints

GET /api/products: Get all products.
GET /api/products/:productId: Get a specific product by ID.
GET /api/favorites/:productId: Get reviews for a specific product.
POST /api/favorites/:productId: Submit a review for a specific product.

More detailed API documentation to follow....

### Flow Chart

![Product Review - Flow Chart](specs/flowchart-prod-review.jpg)

### ER Diagram

![Product Review - ER Diagram](specs/er-prod-review.jpg)

### Wireframes

#### Login Page

![Product Review - Wireframes](specs/wireframe-001.png)

#### Product Display Page

![Product Review - Wireframes](specs/wireframe-002.png)

#### User Product Review Display Page

![Product Review - Wireframes](specs/wireframe-003.png)

### Unsolved Problems
  - Deleting the current text is not possible.
  - When adding a new comment, it appends to the existing comment instead of replacing it.

### Future Enhancements
Future enhancements for the "Product Review App" include 
  - add to favorites with ratings
  - implementing advanced search functionality
  - integrating social media sharing features

### Acknowledgments
Thanks to my Instructor C Takara, per scholas team for inspiration and guidance.