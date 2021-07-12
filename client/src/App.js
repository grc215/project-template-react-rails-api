import NavBar from './components/NavBar'
import MenuPage from './components/MenuPage'
import {Switch, Link, Route, withRouter} from 'react-router-dom'
import React, { useState, useEffect } from 'react'


function App(props) {
  const [food, setFood] = useState([])
  
  useEffect(() => {
    fetch('/menu')
    .then(res => res.json())
    .then(foodArr => setFood(foodArr))
  })
  
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
          1
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
