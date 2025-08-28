import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import styled from "styled-components";
import { FaShoppingCart, FaUser, FaHome, FaPhone, FaStore } from "react-icons/fa";

// Import components
import Home from "./Home";
import Products from "./Products";
import Cart from "./Cart";
import Contact from "./Contact";
import SingleProduct from "./SingleProduct";

// Theme configuration
const theme = {
  colors: {
    heading: "rgb(24 24 29)",
    text: "rgba(29, 29, 29, .8)",
    white: "#fff",
    black: "#212529",
    helper: "#8490ff",
    bg: "#F6F8FA",
    footer_bg: "#0a1435",
    btn: "rgb(98 84 243)",
    border: "rgba(98, 84, 243, 0.5)",
    hr: "#ffffff",
    gradient: "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
    shadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
    shadowSupport: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
  },
  media: {
    mobile: "768px",
    tab: "998px",
  },
};

// Styled components
const Header = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: ${({ theme }) => theme.colors.shadow};
  
  .logo {
    font-size: 3rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.heading};
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 3rem;
  
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
    font-size: 1.8rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: color 0.3s ease;
    
    &:hover {
      color: ${({ theme }) => theme.colors.btn};
    }
  }
`;

const Main = styled.main`
  min-height: calc(100vh - 10rem);
`;

const Footer = styled.footer`
  background-color: ${({ theme }) => theme.colors.footer_bg};
  color: ${({ theme }) => theme.colors.white};
  padding: 3rem 0;
  text-align: center;
  
  p {
    font-size: 1.6rem;
    margin: 0;
  }
`;

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        <Header>
          <div className="logo">Thapa E-Commerce</div>
          <Nav>
            <a href="/"><FaHome /> Home</a>
            <a href="/products"><FaStore /> Products</a>
            <a href="/cart">
              <FaShoppingCart /> Cart ({cartItems.reduce((total, item) => total + item.quantity, 0)})
            </a>
            <a href="/contact"><FaPhone /> Contact</a>
          </Nav>
        </Header>
        
        <Main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route 
              path="/products" 
              element={<Products addToCart={addToCart} />} 
            />
            <Route 
              path="/cart" 
              element={
                <Cart 
                  cartItems={cartItems} 
                  removeFromCart={removeFromCart}
                  updateQuantity={updateQuantity}
                />
              } 
            />
            <Route path="/contact" element={<Contact />} />
            <Route 
              path="/product/:id" 
              element={<SingleProduct addToCart={addToCart} />} 
            />
          </Routes>
        </Main>
        
        <Footer>
          <p>&copy; 2024 Thapa E-Commerce. All rights reserved.</p>
        </Footer>
      </Router>
    </ThemeProvider>
  );
};

export default App;
