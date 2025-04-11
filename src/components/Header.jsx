// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useCart } from '../context/CartContext';
// import '../styles/header.css';

// const Header = () => {
//   const { cart } = useCart();
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     navigate('/login');
//   };

//   return (
//     <header className="main-header">
//       <div className="logo" onClick={() => navigate('/')}>🛒 FakeStore</div>
//       <nav className="nav-links">
//         <Link to="/">Home</Link>
//         <Link to="/cart">Cart ({cart.length})</Link>
//         <button onClick={handleLogout}>Logout</button>
//       </nav>
//     </header>
//   );
// };

// export default Header;





import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import '../styles/header.css';

const Header = () => {
  const { cart } = useCart();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <header className="site-header">
      <div className="logo">🛒 FakeStore</div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart ({cart.length})</Link>
        <button onClick={handleLogout}>Logout</button>
      </nav>
    </header>
  );
};

export default Header;
