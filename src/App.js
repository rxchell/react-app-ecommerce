import React from 'react';
import { Link, NavLink, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Categories } from './pages/Categories';
import Login from './pages/Login';
import { Notfound } from './pages/Notfound';
import { CategoriesLayout } from './CategoriesLayout';
import "./styles.css";
import Carousel from './carousel'; 

function App() {
  const images = [
    'https://placehold.co/600x400?text=Hello+World!',
    'https://placehold.co/600x400?text=Hello\nWorld',
    'https://placehold.co/600x400/000000/FFFFFF/png?text=Hello+World',
  ];
  return (
    <div className="App">
      <h1>Simple React Carousel</h1>
      <Carousel images={images} />
    </div>
  );
  
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink
              style={({ isActive }) => {
                return isActive ? { color: 'blue' } : { color: 'black' };
              }}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/categories"replace>Categories</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<CategoriesLayout  />}>
          <Route path=":id" element={<Categories />} />
          <Route path=":id/:subcategory" element={<Categories />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App
