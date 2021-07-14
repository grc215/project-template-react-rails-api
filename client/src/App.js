import NavBar from './components/NavBar'
import MenuPage from './components/MenuPage'
import CartPage from './components/CartPage'
import LoginPage from './components/LoginPage'
import SignupPage from './components/SignupPage'
import {Switch, Link, Route, withRouter} from 'react-router-dom'
import React, { useState, useEffect } from 'react'


function App(props) {
  const [food, setFood] = useState([])
  const [visits, setVisits] = useState([])

  const [state, setState] = useState({
    id: 0,
    username: "",
    orders: [],
    token: "",
  })
  
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

  
  let orderStarter = (addToCart) => {
    console.log("order started")
    let openOrder = state.orders.filter(order => order.checkout == false)
    if (openOrder.length === 0) {
      fetch('/orders', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "authorization": state.token
        },
        body: JSON.stringify({
          checkout: false
        })
      })
      .then((res) => res.json())
      .then((order) => addToCart(order))
    }
     else {
       addToCart(openOrder)
     }
  //   fetch('/visits', {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //         food_id : props.foodObj.id,
  //         quantity : 1,
  //         order_id : openOrder[0].id
  //     }),
  //   })
  //     .then((r) => r.json())
  //     .then((visitObj) => console.log(visitObj))
  // }
}
  

  let orderCheckerOuter = () => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();
    today = yyyy + '-' + mm + '-' + dd
    today.toString();

    fetch('/orders', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "authorization": state.token
      },
      body: JSON.stringify({
        checkout: true,
        date: today
      })
    })
  }

  let handleResponse = (resp) => {
    console.log(resp)
    if(resp.token){
      setState({
        name: resp.user.name,
        orders: resp.user.orders,
        token: resp.token
      })
      localStorage.token = resp.token

      props.history.push("/menu")
    } else {
      alert("Messed up")
    }
  }
  console.log(state)
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path={'/menu'}
          render={routerProps => {
            return <div>
          <MenuPage
            {...routerProps} orderStarter={orderStarter} 
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
              {...routerProps} orderCheckerOuter={orderCheckerOuter}
              visits = {visits}>
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
