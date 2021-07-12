import { NavLink } from 'react-router-dom'
import React, { useState, useEffect } from 'react'

export default function NavBar() {
    return (
        <div>
            <NavLink to='/login' style={{ marginRight: '50px', marginLeft: '30px', fontSize: '15pt', color:'black' }} activeClassName="active" activeStyle={{fontWeight: "bold", color: "black"}}>login</NavLink>
            <NavLink to='/menu' style={{ marginRight: '50px', fontSize: '15pt', paddingTop: '30px', color:'black' }} activeClassName="active" activeStyle={{fontWeight: "bold", color: "black"}}>Menu</NavLink>
            <NavLink to='/cart' style={{ marginRight: '50px', fontSize: '15pt', paddingTop: '30px', color:'black' }} activeClassName="active" activeStyle={{fontWeight: "bold", color: "black"}}>Cart</NavLink>
            <NavLink to='/' style={{ marginRight: '50px', fontSize: '15pt', color:'black' }} > Logout</NavLink>
        </div>
    )
}
