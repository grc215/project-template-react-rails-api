import NavBar from './components/NavBar'
import MenuPage from './components/MenuPage'
import CartPage from './components/CartPage'
import LoginPage from './components/LoginPage'
import SignupPage from './components/SignupPage'
import PastOrders from './components/PastOrders'
import {Switch, Link, Route, withRouter} from 'react-router-dom'
import React, { useState, useEffect } from 'react'


function App(props) {
  const [food, setFood] = useState([])
  const [visits, setVisits] = useState([])

  const [state, setState] = useState({
    name: '',
    current_cart:{
      id: 0,
      visits: []
    },
    past_orders: [],
    token: "",
  })
  
  useEffect(() => {
    fetch('/menu')
    .then(res => res.json())
    .then(foodArr => setFood(foodArr))
  },[])


  // let orderCheckerOuter = () => {
  //   let today = new Date();
  //   let dd = String(today.getDate()).padStart(2, '0');
  //   let mm = String(today.getMonth() + 1).padStart(2, '0');
  //   let yyyy = today.getFullYear();
  //   today = yyyy + '-' + mm + '-' + dd
  //   today.toString();

  //   fetch('/orders', {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "authorization": state.token
  //     },
  //     body: JSON.stringify({
  //       checkout: true,
  //       date: today
  //     })
  //   })
  // }

  let handleResponse = (resp) => {
    console.log(resp)
    if(resp.token){
      setState({
        name: resp.user.name,
        past_orders: resp.user.past_orders,
        current_cart: resp.user.current_cart,
        token: resp.token
      })
      localStorage.token = resp.token

      props.history.push("/menu")
    } else {
      alert("Messed up")
    }
  }

  let createVisit = (food_id) => {
    fetch('/visits', {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        food_id: food_id,
        order_id: state.current_cart.id
      })
    })
    .then(res => res.json())
    .then(newVisit => {
      let copyOfVisits = [...state.current_cart.visits, newVisit]
      let copyOfCart = {
        ...state.current_cart,
        visits: copyOfVisits
      }
      setState({
        ...state,
        current_cart: copyOfCart
      })
    })
  }

  let checkoutAndCreateCart = () => {
    fetch(`/orders/${state.current_cart.id}/transform`, {
      method: 'PATCH',
      headers: {
        'Authorization': state.token
      }
    })
    .then(res => res.json())
    .then((resp) => {
      let copyOfPastOrders = [...state.past_orders, resp.transformed_cart]
      setState({
        ...state,
        current_cart: resp.current_cart,
        past_orders: copyOfPastOrders
      })
    })
  }

  let deleteFromCart = (deletedID) => {
    let copyOfVisits = state.current_cart.visits.filter(visitObj => {
      return visitObj.id !== deletedID
    })
    setState({
      ...state,
      current_cart: {
        id: state.current_cart.id,
        visits: copyOfVisits
      }
    })
  }
  
  console.log(state)
  console.log(state.past_orders)
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path={'/menu'}
          render={routerProps => {
            return <div>
          <MenuPage
            {...routerProps} createVisit={createVisit}
            food={food}>
          </MenuPage>
          </div>
          }}
          >
        </Route>
        <Route path={'/cart'}
        render={routerProps => {
          return <div>
            <CartPage 
              {...routerProps} checkoutAndCreateCart={checkoutAndCreateCart}
              deleteFromCart={deleteFromCart}
              current_cart = {state.current_cart}>
            </CartPage>
          </div>         
        }}
        >
        </Route>
        <Route path={'/login'}
          render={routerProps => {
            return <div>
              <LoginPage
                {...routerProps} setState={setState}
                handleResponse={handleResponse}
              >
              </LoginPage>
            </div>
          }}
          >
        </Route>
        <Route path={'/orders'}
        >
          <PastOrders 
            past_orders={state.past_orders}/>

        </Route>
        <Route path={'/signup'}>
          <SignupPage></SignupPage>
        </Route>
        <Route path={'/'}>
          3
        </Route>
      </Switch>
    </div>
  );
}

export default withRouter(App);
