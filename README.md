# ShopGo AI Marketplace

A full-stack e-commerce platform built with the MERN stack (MongoDB, Express.js, React, Node.js), featuring an AI-powered chatbot for enhanced customer assistance.

## Features

- **User Authentication**: Secure login and registration with JWT tokens
- **Product Catalog**: Browse products across multiple categories (Electronics, Sports, Home, Books, Clothing, Accessories)
- **Search & Filter**: Advanced search functionality and category-based filtering
- **Shopping Cart**: Add, update, and remove items from cart
- **Checkout Process**: Seamless order placement with payment integration (placeholder)
- **Order Management**: View order history and track order status
- **AI Chatbot**: Intelligent customer support using Hugging Face Transformers
- **Responsive Design**: Mobile-friendly UI built with Tailwind CSS
- **Real-time Updates**: Redux for state management

## Tech Stack

### Frontend
- React 19
- Redux Toolkit for state management
- React Router for navigation
- Tailwind CSS for styling
- Vite for build tooling
- Axios for API calls

### Backend
- Node.js with Express.js
- MongoDB with Mongoose ODM
- JWT for authentication
- bcryptjs for password hashing
- Hugging Face Inference API for AI chatbot
- CORS for cross-origin requests

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd mern
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   ```
   - Create a `.env` file in the backend directory with the following variables:
     ```
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret_key
     PORT=5000
     ```
   - Start the backend server:
     ```bash
     npm run dev
     ```

3. **Frontend Setup**
   ```bash
   cd ../frontend_new
   npm install
   npm run dev
   ```

4. **Access the Application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:5000

## Usage

1. Register a new account or login with existing credentials
2. Browse products on the home page or filter by categories
3. Use the search bar to find specific products
4. Add items to cart and proceed to checkout
5. Interact with the AI chatbot for assistance
6. View your order history in the user dashboard

## API Endpoints

### Authentication
- `POST /api/user/register` - User registration
- `POST /api/user/login` - User login
- `GET /api/user/profile` - Get user profile (protected)

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product by ID
- `POST /api/products` - Create new product (admin)
- `PUT /api/products/:id` - Update product (admin)
- `DELETE /api/products/:id` - Delete product (admin)
- `GET /api/products/categories` - Get product categories

### Cart
- `GET /api/cart` - Get user's cart
- `POST /api/cart` - Add item to cart
- `PUT /api/cart/:id` - Update cart item
- `DELETE /api/cart/:id` - Remove item from cart

### Orders
- `POST /api/orders` - Create new order
- `GET /api/orders` - Get user's orders
- `GET /api/orders/:id` - Get order by ID

### Chatbot
- `POST /api/chatbot` - Send message to AI chatbot

## Project Structure

```
mern/
├── backend/
│   ├── config/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   │   ├── controllers/
│   ├── index.js
│   ├── package.json
│   └── README.md
├── frontend_new/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── slices/
│   │   ├── utils/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── README.md
└── README.md
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.
