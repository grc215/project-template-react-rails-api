import React from 'react'
import CartCard from './CartCard'
import {Card, Button} from 'semantic-ui-react'

export default function CartPage(props) {
    let renderVisits = props.current_cart.visits.map(visitsObj => (
        <CartCard 
            key={visitsObj.id}
            visitsObj={visitsObj}
            deleteFromCart={props.deleteFromCart}
        />
    ))
    return (
        <div>
            <Card.Group itemsPerRow={4}>
                {renderVisits}
            </Card.Group>
            <Button onClick={props.checkoutAndCreateCart}>Checkout</Button>
        </div>
    )
}
