import NavBar from './components/NavBar'
import MenuPage from './components/MenuPage'
import CartPage from './components/CartPage'
import {Switch, Link, Route, withRouter} from 'react-router-dom'
import React, { useState, useEffect } from 'react'


function App(props) {
  const [food, setFood] = useState([])
  const [visits, setVisits] = useState([])
  
  useEffect(() => {
    fetch('/menu')
    .then(res => res.json())
    .then(foodArr => setFood(foodArr))
  },[])

  useEffect(() => {
    fetch('/cart')
    .then(res => res.json())
    .then(visitsArr => setVisits(visitsArr))
    console.log(visits)
  }, [])
  
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path={'/menu'}>
          <MenuPage 
            food={food}
          >
          </MenuPage>
        </Route>
        <Route path={'/cart'}>
          <CartPage visits = {visits}>
          </CartPage>
        </Route>
        <Route path={'/login'}>
          2
        </Route>
        <Route path={'/'}>
          3
        </Route>
      </Switch>
    </div>
  );
}

export default withRouter(App);
