# 🛒 FakeStore React App

A simple e-commerce frontend built with React, using the [FakeStore API](https://fakestoreapi.com/docs). This app allows users to log in, browse products, view details, manage a cart, and simulate a checkout process.

---

## 🚀 Live Demo

🌐 [Click here to view the deployed site](https://your-live-link.vercel.app)  
📂 [GitHub Repository](https://github.com/yourusername/fakestore-app)

---

## 🔧 Tech Stack

- **Frontend**: React.js (Vite)
- **Routing**: React Router v6
- **State Management**: React Context API (Cart)
- **CSS**: Traditional CSS (mobile-first responsive)
- **API**: [FakeStoreAPI](https://fakestoreapi.com/)

---

## 🧪 Features

### ✅ Authentication
- Login using `https://fakestoreapi.com/auth/login`
- JWT stored in `localStorage`

### 🏠 Home (Product Listing)
- Fetch all products
- Filter by category
- Optional search bar
- Responsive grid layout

### 📦 Product Detail
- View image, title, description, price
- Add to Cart button

### 🛍️ Cart Page
- View all added items
- Update quantity or remove item
- Calculate total price
- Checkout (shows confirmation popup for 4s)

### 🔗 Navigation
- Links: Home | Cart | Logout
- Show cart item count
- Logout clears JWT and redirects to login

---

## 📁 Folder Structure

