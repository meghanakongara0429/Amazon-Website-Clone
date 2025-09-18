## Amazon Clone (React)

This is a simple Amazon-style storefront clone built while learning React. It includes a home page, products listing, product details, cart, authentication screens, and a basic account page. The goal is to demonstrate React fundamentals (routing, state, API calls, context) with clean code and readable structure.

### Tech Stack
- React 19, React Router 7
- Bootstrap 5 / React-Bootstrap
- Axios for HTTP

### Features
- Home, About, Signup, Login
- Products list and Product details
- Cart page
- Account details (fetched from API if `user_id` is present)

### Recent Improvements
- Amazon-like primary/secondary nav with accessible search
- Search routes to `/products?q=...` and filters the list on the page
- Consistent product grid layout with uniform card sizes
- Cart badge shows live item count for logged-in users
- Safer API calls with loading/error states to avoid runtime overlays

### Project Structure
- `src/App.js`: App shell, router, context provider
- `src/components/*`: Layout components like `Header`, `Footer`
- `src/pages/*`: Route pages (Home, Products, Product Details, Account, Cart, Auth)

### Getting Started
1. Install dependencies: `npm install`
2. Create a `.env` file (or copy `.env.example`) and set `REACT_APP_API_BASE` if needed
3. Start the dev server: `npm start` and open http://localhost:3000

### Environment Variables
- `REACT_APP_API_BASE` (optional): Base URL for API. Defaults to the public demo API used in the code.

Example `.env`:

```
REACT_APP_API_BASE=https://amazon.indianhackerslab.com
```

If the products API is unavailable, the products page shows a small set of mock items so the UI never looks empty.

### Available Scripts
- `npm start`: Run locally in development
- `npm run build`: Production build
- `npm test`: Run tests (if/when added)

### Routes
- `/` Home
- `/about` About
- `/signup` Signup
- `/login` Login
- `/products` Products list
- `/product-details/:product_id` Product details
- `/account` Account details
- `/cart` Cart

### Notes
- This is a learning project; no real payments are processed.
- UI and behavior are inspired by Amazon for educational purposes only.

### Credits
- Built with Create React App
- Bootstrap and React-Bootstrap for styles
