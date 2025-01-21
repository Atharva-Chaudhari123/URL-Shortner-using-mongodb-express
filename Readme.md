# URL Shortener

A simple URL shortener application built with Node.js, Express, and EJS. This project allows users to generate short URLs for their long URLs and get redirected to the original URL by entering the short URL.

## Features
- Create a short URL for any valid URL
- Redirect to the original URL using the short URL
- Clean and responsive user interface using EJS templates
- MVC architecture for better code organization

## Technologies Used
- **Node.js**: Backend runtime
- **Express.js**: Server framework
- **EJS**: Server-side templating
- **MongoDB**: Database (assumed from the model structure)
- **MVC Pattern**: Architectural pattern

## Project Structure
```
url-shortner/
├── config/
│   └── connection.js     # Database configuration
├── controller/
│   └── controller_url.js # URL handling logic
├── model/
│   └── urlModel.js      # URL data model
├── routes/
│   ├── routes.js        # Main route definitions
│   └── staticURL.js     # Static route handlers
├── views/
│   ├── home.ejs         # Main template
│   └── styles.css       # Styling
├── node_modules/        # Dependencies
├── .env                 # Environment variables
├── index.js            # Application entry point
├── package.json        # Project configuration
├── package-lock.json   # Dependency lock file
└── README.md          # Project documentation
```

## API Endpoints & Views

### Views
1. **Home Page (`/`)**
   - Renders the main URL shortening interface
   - Displays form for URL submission
   - Shows shortened URL after generation

### API Endpoints

1. **POST `/shorten`**
   - Creates a short URL for the provided original URL
   - Request Body:
     ```json
     {
       "longUrl": "https://example.com"
     }
     ```
   - Response: Redirects back to home page with shortened URL

2. **GET `/:shortUrl`**
   - Redirects to the original URL associated with the provided short URL

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd url-shortner
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create `.env` file:
   ```env
   PORT=3000
   MONGODB_URI=your_mongodb_connection_string
   ```

4. Start the server:
   ```bash
   npm start
   ```

5. Access the application at `http://localhost:3000`

## Development

### MVC Components
- **Models**: Handle data logic and database interactions
- **Views**: EJS templates for rendering the user interface
- **Controllers**: Process user requests and manage application logic

### Key Files
- `connection.js`: Database configuration and connection setup
- `controller_url.js`: URL shortening and redirect logic
- `urlModel.js`: Database schema and model definitions
- `routes.js`: Route configurations
- `home.ejs`: Main template for the user interface

## Dependencies
- express
- ejs
- mongoose 
- dotenv
- Other dependencies as listed in package.json

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License
This project is open source and available under the [MIT License](LICENSE).