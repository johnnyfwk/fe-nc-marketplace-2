//Marketplace API: https://oct-b-sem-1-market.onrender.com/

import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import * as api from './api';
import Header from './Components/Header';
import Nav from './Components/Nav';
import Home from './Components/Home';
import Items from './Components/Items';
import Footer from './Components/Footer';
import SingleProduct from './Components/SingleProduct';
import OrderConfirmation from './Components/OrderConfirmation';
import Users from './Components/Users';
import Logout from './Components/Logout';
import CreateAnAccount from './Components/CreateAnAccount';
import SellAnItem from './Components/SellAnItem';
import OrderedItems from './Components/OrderedItems';

function App() {
  const [availableCategories, updateAvailableCategories] = useState( ["All"] );
  const [allUsers, updateAllUsers] = useState( [] );
  const [loggedInUsername, updateLoggedInUsername] = useState(null);
  const [buyNow, updateBuyNow] = useState( {} );
  const [orderedItems, updateOrderedItems] = useState( [] );

  console.log(loggedInUsername, "<<<<<<<<<<<<<<<<< loggedInUsername")

  useEffect(() => {
    api.getUsers()
        .then((users) => {
            updateAllUsers(users);
        })
  }, []);

  return (
    <div className="App">      
      <Header />
      {loggedInUsername ? <Logout loggedInUsername={loggedInUsername}/> : null}      
      {loggedInUsername ? <Nav loggedInUsername={loggedInUsername}/> : null}
      <Routes>
        <Route path="/" element={<Home allUsers={allUsers} updateLoggedInUsername={updateLoggedInUsername}/>}></Route>
        <Route path="/items" element={<Items loggedInUsername={loggedInUsername} updateLoggedInUsername={updateLoggedInUsername} availableCategories={availableCategories} updateAvailableCategories={updateAvailableCategories}/>}></Route>
        <Route path="/items/:item_id" element={<SingleProduct loggedInUsername={loggedInUsername} updateBuyNow={updateBuyNow} orderedItems={orderedItems} updateOrderedItems={updateOrderedItems}/>}></Route>
        <Route path="/order-confirmation" element={<OrderConfirmation buyNow={buyNow}/>}></Route>
        <Route path="/users" element={<Users allUsers={allUsers} updateAllUsers={updateAllUsers} loggedInUsername={loggedInUsername}/>}></Route>
        <Route path="/create-an-account" element={<CreateAnAccount />}></Route>
        <Route path="/sell-an-item" element={<SellAnItem loggedInUsername={loggedInUsername} availableCategories={availableCategories} updateAvailableCategories={updateAvailableCategories}/>}></Route>
        <Route path="/ordered-items" element={<OrderedItems loggedInUsername={loggedInUsername} orderedItems={orderedItems} updateOrderedItems={updateOrderedItems}/>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
