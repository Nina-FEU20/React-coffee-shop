import React, { useEffect } from 'react'; 
import './App.css';
// router
import { Redirect, Route, Switch } from 'react-router-dom';
// Importing useSelector to access Redux-global store and useDispatch to change it
import { useSelector, useDispatch } from 'react-redux';
// Importing redux-action
import { coffeeMenuAction } from './actions/index';
// import components
import Landing from './components/Landing/Landing'; 
import Menu from './components/Menu/Menu'; 
import About from './components/About/About'; 
import Cart from './components/Cart/Cart'; 
import Status from './components/Status/Status'; 
import Nav from './components/Nav/Nav'
// actions
import {increaseHowManyItemsInCartAction, userCartGetLocalStorageAction } from './actions/index';
// imports for Framer-Motion animation
import { AnimatePresence } from "framer-motion";
  
function App() {
  // Accessing global state of 'toggleNav'
  const toggleNav = useSelector(state => state.toggleNav)
  // Accessing global state of 'userCart'
  const userCart = useSelector(state => state.userCart)
  
  // Adding useDispatch to enable modification of redux store
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData () {
      try {
        // Fetching data from API
        const response = await fetch('http://localhost:5000/api/beans');
        
        // Converting the response from JSON JavaScript
        const data = await response.json();
      
        // Changing state of 'coffeeMenu'
        dispatch(coffeeMenuAction(data));
      } catch (error) {
        //
        let errorMenu = {
          menu: [{ 
              errorTitle: 'Något gick fel :(',
              errorMessage: 'Kunde inte hämta menyn'
            }]
        }
        dispatch(coffeeMenuAction(errorMenu));

        console.error(`Something went wrong when contacting the server: ${error.message}`)
      }
    };
    
    // retrieving LocalStorage
    let savedInLocal = JSON.parse(localStorage.getItem("userCart")); 
    // If there are items stored
    if (savedInLocal && userCart.length === 0) {
      // Dispatch all items to userCart-store
      savedInLocal.map((item) => dispatch(userCartGetLocalStorageAction(item)))
      // Check how many items in localStorage
      let itemsInCart = savedInLocal.map((item) => item.quantity).reduce((a, b) =>  a + b)
      // Increase quantity in CartIcon-store as many times as there are items in localStorage
      for(let i = 0; i < itemsInCart; i++) {
        dispatch(increaseHowManyItemsInCartAction()) 
      }
    }
    
    fetchData();
  }, []);

  return (
    <main>
      { toggleNav ?
        <Nav /> 
      : 
      <AnimatePresence exitBeforeEnter>
        <Switch>
          <Route path="/" exact>
              <Redirect to='/landing' />
          </Route>
          <Route path="/landing" component={ Landing } exact />
          <Route path="/menu" component={ Menu } />
          <Route path="/about" component={ About } />
          <Route path="/cart" component={ Cart } />
          <Route path="/status" component={ Status } />
        </Switch>
      </AnimatePresence>
      }
    </main>
  );
}

export default App;
 