/*import React from 'react';

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Intro />
    <Laurels />
    <Gallery />
    <FindUs />
    <Footer />
  </div>
);

export default App;*/


import './App.css';
import Home from './container/Home/Home.js';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import LogIn from './container/LogIn/LogIn.jsx';
import Signup from './container/Register/Register.jsx';
import { CartProvider } from './components/ContextReducer/ContextReducer.js';
import MyOrder from './container/MyOrder/MyOrder.js';


function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/createuser" element={<Signup />} />
            <Route path="/myOrder" element={<MyOrder />} />
          </Routes>
        </div>
      </BrowserRouter>
    </CartProvider>

  );
}

export default App;
