# 🛍️ ShopGo — Autonomous Marketplace Engine 

![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react) ![Node.js](https://img.shields.io/badge/Node.js-Latest-green?style=for-the-badge&logo=node.js) ![Express.js](https://img.shields.io/badge/Express.js-Latest-lightgrey?style=for-the-badge&logo=express) ![MongoDB](https://img.shields.io/badge/MongoDB-Latest-brightgreen?style=for-the-badge&logo=mongodb) ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-Latest-38B2AC?style=for-the-badge&logo=tailwind-css) ![Redux](https://img.shields.io/badge/Redux-Toolkit-764ABC?style=for-the-badge&logo=redux)

🚀 ShopGo is a next-generation, self-sustaining e-commerce ecosystem. It moves beyond traditional shopping carts by integrating a State-of-the-Art Autonomous Intelligence Layer that handles customer intent, real-time product recommendations, and automated order management.
✨ Features • 🛠 Tech Stack • 🚀 Getting Started • 📐 Architecture • 🎮 Demo

---

## 🎯 Problem Statement
Online shoppers often struggle to find exactly what they need quickly and frequently experience delays in receiving customer support. Traditional e-commerce platforms lack the personalized guidance required to resolve queries in real-time without human intervention.

## 💡 Our Solution
ShopGo modernizes the e-commerce experience by providing:

| Feature | Description |
|-----------|-------------|
| 🤖 **AI Customer Support** | Intelligent chatbot powered by Hugging Face Transformers to assist shoppers instantly. |
| 🛍️ **Advanced Catalog** | Comprehensive categories (Electronics, Sports, Home, etc.) with search & filtering. |
| 🛒 **Seamless Cart** | Add, update, and manage your cart items effortlessly in real-time. |
| 📦 **Order Management** | Track order history and checkout status within a unified dashboard. |
| 🔐 **Secure Authentication** | JWT-based secure login, registration, and session management. |

⚠️ **Disclaimer:** This platform currently uses simulated payment flows for demonstration purposes.

---

## ✨ Features

### 🛍️ Autonomous Catalog & Discovery
*   **Dynamic Intelligence** — Local `distilgpt2` model classifies user intent in real-time.
*   **Smart Categorization** — Massive support for Electronics, Sports, Home, Books, Clothing, and Accessories.
*   **Context-Aware Search** — Filters products based on natural language queries.

### 🤖 Core Intelligence (AI Assistant)
*   **Greet & Identify** — Warmly greets users and clarifies their specific needs (budget, use case).
*   **Intelligent Recommendations** — provides curated "Best Fit" matches with links.
*   **Seamless Upselling** — Suggests complementary products based on cart and browsing history.
*   **Autonomous Support** — Pulls real-time data from the Order Management System (OMS).
*   **Human-in-the-Loop Escalation** — Automatically transfers to human agents upon detecting user frustration.

### 💳 Cart, Checkout & Orders
*   **Persistence Layers** — Stateful cart management via Redux Toolkit with persistent session logic.
*   **Safe Checkout** — Streamlined verification and simulated payment gateways.
*   **Global Dashboard** — Manage profiles, track order history, and monitor real-time shipment status.

---

## 🛠 Tech Stack

### 🖥️ Frontend
| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 19 | UI framework building the interactive frontend |
| **Redux Toolkit** | Latest | Complex state management for carts and user sessions |
| **React Router** | Latest | Client-side routing and navigation |
| **Tailwind CSS** | Latest | Utility-first styling for beautiful responsive design |
| **Vite** | Latest | Ultra-fast build tooling and hot-module replacement |
| **Axios** | Latest | Handling API communications |

### ⚙️ Backend
| Technology | Purpose |
|------------|---------|
| **Node.js** | Runtime environment for the server |
| **Express.js**| Backend web framework building the REST API |
| **MongoDB** | NoSQL database for flexible data persistence |
| **Mongoose** | Object Data Modeling (ODM) library |
| **Hugging Face**| Generative AI API inference for the chatbot |

### 🏗️ Infrastructure
| Technology | Purpose |
|------------|---------|
| **JWT** | Secure stateless sessions |
| **bcryptjs** | Encrypted data hashing |

---

## 🔗 API Reference

### 👤 Authentication & Users
| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/api/user/signup` | POST | Register a new consumer account. |
| `/api/user/login` | POST | Secure JWT-based authentication. |
| `/api/user/logout` | GET | Session termination. |
| `/api/user/check-auth` | GET | Validate session status. |

### 🎁 Product Management
| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/api/products` | GET | Fetch the entire autonomous catalog. |
| `/api/products` | POST | **[Admin]** Add a new product listing. |
| `/api/products/:id` | GET | Detailed product view. |
| `/api/products/:id` | DELETE | **[Admin]** Remove product from catalog. |

### 🛒 Cart & Order Flow
| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/api/cart` | GET | Retrieve user-specific shopping cart. |
| `/api/cart` | POST | Add or sync items to the cart. |
| `/api/orders` | POST | Finalize checkout and create order. |
| `/api/orders/:id` | GET | Real-time status of a specific order. |

### 🧠 Intelligence
| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/api/chatbot/message` | POST | Process messages via AI Engine. |

---

## 🚀 Getting Started

### Prerequisites
✅ Node.js 18+  
✅ MongoDB instance (local or Atlas)  
✅ npm or yarn

### 1️⃣ Clone the Repository
```bash
git clone <repository-url>
cd mern
```

### 2️⃣ Backend Setup
```bash
cd backend
npm install
```

### 3️⃣ Set Up Environment Variables
Create `.env` in the `backend/` directory:
```env
# Database (MongoDB)
MONGO_URI=your_mongodb_connection_string

# Authentication
JWT_SECRET=your_jwt_secret_key

# Backend Port
PORT=5000

# Hugging Face AI (Optional for chatbot)
HUGGINGFACE_API_KEY=your_api_key 
```

### 4️⃣ Frontend Setup
```bash
cd ../frontend_new
npm install
```

### 5️⃣ Start the Servers
**Terminal 1 — Backend:**
```bash
cd backend
npm run dev
```

**Terminal 2 — Frontend:**
```bash
cd frontend_new
npm run dev
```

### 6️⃣ Open the App
🌐 Navigate to `http://localhost:5173` (Frontend)  
⚙️ API runs on `http://localhost:5000` (Backend)

---

## 📐 Architecture

```text
┌─────────────────────────────────────────────────────────────────────────┐
│                           User Interface                                │
│  ┌──────────┐ ┌──────────┐ ┌─────────────┐ ┌──────────┐ ┌────────────┐  │
│  │ Products │ │   Cart   │ │  Checkout   │ │ User Hub │ │ AI Chatbot │  │
│  └────┬─────┘ └────┬─────┘ └──────┬──────┘ └────┬─────┘ └─────┬──────┘  │
└───────┼────────────┼──────────────┼─────────────┼─────────────┼─────────┘
        │            │              │             │             │
        ▼            ▼              ▼             ▼             ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                        Express API Routes                               │
│  ┌──────────────┐ ┌────────────┐ ┌─────────────┐ ┌────────────────┐     │
│  │/api/products │ │ /api/cart  │ │ /api/orders │ │  /api/chatbot  │     │
│  └──────┬───────┘ └──────┬─────┘ └──────┬──────┘ └────────┬───────┘     │
└─────────┼────────────────┼──────────────┼─────────────────┼─────────────┘
          │                │              │                 │
          ▼                ▼              ▼                 ▼
┌─────────────────┐ ┌─────────────────────────┐ ┌─────────────────────────┐
│ Hugging Face API│ │        MongoDB          │ │   Authentication APIs   │
│ ┌─────────────┐ │ │   ┌─────────────────┐   │ │   ┌─────────────────┐   │
│ │ Transformer │ │ │   │ Users Collection│   │ │   │ /api/user/      │   │
│ │ Models      │ │ │   │ Products Coll.  │   │ │   │ login & register│   │
│ │ (Chatbot)   │ │ │   │ Orders & Carts  │   │ │   └─────────────────┘   │
│ └─────────────┘ │ │   └─────────────────┘   │ │                         │
└─────────────────┘ └─────────────────────────┘ └─────────────────────────┘
```

---

## 📁 Project Structure

```text
mern/
├── 📂 backend/               # Express.js Server
│   ├── 📂 config/            # Environment & database configs
│   ├── 📂 middleware/        # Authentication & error handling
│   ├── 📂 models/            # Mongoose schemas (User, Product, etc)
│   ├── 📂 routes/            # API endpoints definition
│   │   └── controllers/      # Business logic handlers
│   ├── index.js              # Server entry point
│   └── package.json          # Backend dependencies
│
└── 📂 frontend_new/          # React + Vite Frontend
    ├── 📂 public/            # Static assets
    ├── 📂 src/
    │   ├── 📂 components/    # Reusable React components
    │   ├── 📂 slices/        # Redux toolkit state slices
    │   ├── 📂 utils/         # Helper functions / Axios configs
    │   ├── App.jsx           # Main application router
    │   └── main.jsx          # React entry point
    └── package.json          # Frontend dependencies
```

---

## 🔒 Security & Privacy

| Feature | Description |
|---------|-------------|
| 🔐 **Authentication** | JWT with stateless secure sessions |
| 🗂️ **Password Hashing** | bcryptjs ensuring passwords are never stored in plaintext |
| 🔒 **Data Protection** | Backend routes protected via auth middleware |

---

## 🤝 Contributing
We welcome contributions! Here's how to get started:

1. 🍴 Fork the repository
2. 🌿 Create a feature branch (`git checkout -b feature/amazing-feature`)
3. ✏️ Commit changes (`git commit -m 'Add amazing feature'`)
4. 📤 Push to branch (`git push origin feature/amazing-feature`)
5. 🔃 Open a Pull Request

## 🙏 Acknowledgments
- ⚡ **React & Vite** — For rapid frontend development
- 🐘 **MongoDB & Express** — For scalable backend architecture
- 🎨 **Tailwind CSS** — For beautiful utility classes
- 🧠 **Hugging Face** — For the underlying AI chatbot models

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

🌟 _Built with ❤️ for the next generation of autonomous retail._
[⬆ Back to Top](#-shopgo--autonomous-marketplace-engine)
