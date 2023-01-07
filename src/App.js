/*
Marketplace API: https://oct-b-sem-1-market.onrender.com/

Functionality:
- A user can view all available items
- A user can view items in a particular category
- A user can order an item
- A user can list an item for sale
- A user can delete an item they have posted for sale
- A user can view items they have previously ordered
- A user can give another user kudos
- A user can add an item to their basket and continue browsing items
- A user can view the items in their basket
- A user can remove items from their basket
- A user can create a new user profile

Endpoints and states:
/ - Homepage - does not require access to any states
/items - View all items - [availableItems, updateAvailableItems]

*/

import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Nav from './Components/Nav';
import Home from './Components/Home';
import Items from './Components/Items';
import Footer from './Components/Footer';
import SingleProduct from './Components/SingleProduct';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/items" element={<Items />}></Route>
        <Route path="/items/:item_id" element={<SingleProduct />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
