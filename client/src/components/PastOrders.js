import React from 'react'
import OrderCard from './OrderCard'



export default function PastOrders(props) {

    let arrayOfComps = props.past_orders.map(past_order => (
        <OrderCard 
            key={past_order.id} 
            past_order={past_order} 
        />
        ))
    
    return (
        <div>
            {arrayOfComps}
        </div>
    )
}
