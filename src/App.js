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
*/

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

function App() {
  const [allUsers, updateAllUsers] = useState( [] );
  const [loggedInUsername, updateLoggedInUsername] = useState(null);
  // const [isLoggedIn, updateIsLoggedIn] = useState(false);

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
      {loggedInUsername ? <Logout /> : null}      
      {loggedInUsername ? <Nav loggedInUsername={loggedInUsername}/> : null}
      <Routes>
        <Route path="/" element={<Home allUsers={allUsers} updateLoggedInUsername={updateLoggedInUsername}/>}></Route>
        <Route path="/items" element={<Items loggedInUsername={loggedInUsername} updateLoggedInUsername={updateLoggedInUsername}/>}></Route>
        <Route path="/items/:item_id" element={<SingleProduct loggedInUsername={loggedInUsername}/>}></Route>
        <Route path="/order-confirmation" element={<OrderConfirmation />}></Route>
        <Route path="/users" element={<Users allUsers={allUsers} updateAllUsers={updateAllUsers} loggedInUsername={loggedInUsername}/>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
