# URL Shortener

A simple URL shortener application built with Node.js and Express. This project allows users to generate short URLs for their long URLs and get redirected to the original URL by entering the short URL.

## Features
- Create a short URL for any valid URL.
- Redirect to the original URL using the short URL.

## Technologies Used
- **Node.js**: Backend runtime.
- **Express.js**: Server framework.
- **shortid**: Generates unique IDs for short URLs.

## API Endpoints

### 1. POST `/url`
#### Description:
Creates a short URL for the provided original URL.

#### Request Body:
```json
{
  "url": "https://example.com"
}
```

#### Response:
```json
{
  "shortUrl": "<shortid>",
  "originalUrl": "https://example.com"
}
```

### 2. GET `/:id`
#### Description:
Redirects to the original URL associated with the provided short URL string.

#### Example:
- Short URL: `http://localhost:3000/abc123`
- Redirects to: `https://example.com`

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd url-shortener
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm start
   ```

4. The server will run on `http://localhost:3000` by default.

## Project Structure
```
url-shortener/
├── server.js         # Entry point of the application
├── routes/           # Contains route definitions
├── models/           # Data model for URL storage
├── middleware/       # Middleware logic (if applicable)
└── package.json      # Project configuration and dependencies
```

## Example Usage
### Create a Short URL:
- Send a POST request to `/url` with a JSON body containing the `url` field.

### Redirect Using Short URL:
- Open the short URL in a browser, or send a GET request to the `/:id` endpoint.

## Dependencies
- **express**: ^4.x
- **shortid**: ^2.x
