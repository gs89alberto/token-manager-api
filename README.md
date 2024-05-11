# Token Manager API

## Introduction

This project implements a RESTful JSON API for managing digital assets known as "tokens" in the cryptocurrency industry. It allows for the creation and retrieval of token records stored in a PostgreSQL database. This API is built using Node.js, Express.js, and TypeScript to highlight a clean and efficient backend structure suitable for managing and interacting with token data within a dynamic cryptocurrency ecosystem.

## Technologies

- **Backend Language**: TypeScript
- **Server Framework**: Node.js with Express.js
- **Database**: PostgreSQL

## Deployment URL
https://token-manager.onrender.com

## Local setup - Getting Started

### Prerequisites

Ensure you have Node.js and Docker installed on your system to run it locally.

### Configuration

Copy the .env.example file to .env and update the database connection settings if needed.

### Installation

Clone the repository to your local machine:

```bash
git clone https://github.com/gs89alberto/token-manager-api.git
cd token-manager-api
```
Install the necessary packages:
```bash
npm run build
```

Start docker container for DB inicialization:
```bash
npm run docker:up
```

### Running the Application
Start the server using:
```bash
npm start
```
The API will be available at http://localhost:3000.

## API Endpoints
There is a Swagger file and a Postman collection in the /src/docs directory.
### POST /tokens
Creates a new token record in the database.
* Request Body:
  ```bash
  {
  "name": "Bitcoin",
  "ticker": "BTC",
  "description": "Bitcoin is a digital currency"
  }
  ```
* Response:
  ```bash
  {
  "id": 1,
  "name": "Bitcoin",
  "ticker": "BTC",
  "description": "Bitcoin is a digital currency"
  }
  ```
### GET /tokens/:id
Retrieves a token record by its ID.

* Response:
  ```bash
  {
  "id": 1,
  "name": "Bitcoin",
  "ticker": "BTC",
  "description": "Bitcoin is a digital currency"
  }
  ```
  If the token with the specified ID does not exist, returns a 404 status code with an error message.

## Contact
Alberto González - gs89alberto@gmail.com