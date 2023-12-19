import logo from './logo.svg';
import './App.css';
import {Routes, Route, Link } from "react-router-dom";
import { Home } from './Components/Home';
import { Category } from './Components/Category';
import { Products } from './Components/Products';

 const App = () => {
  return (
    <>
      <div>
        <nav className="navbar navbar-light">
          <ul className="nav navbar-nav">
            {/*  Link components are used for linking to other views */}
            <li>
              {" "}
              <Link to="/home">Homes</Link>
            </li>
            <li>
              <Link to="/category">Category</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
          </ul>
        </nav>
        {/*  Route components are rendered if the path prop matches the current URL  */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </div>
    </>
  );
 };
 export default App;