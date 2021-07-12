import React from 'react'
import CartCard from './CartCard'
import {Card} from 'semantic-ui-react'

export default function CartPage(props) {
    let renderVisits = props.visits.map(visitsObj => (
        <CartCard 
            key={visitsObj.id}
            visitsObj={visitsObj}
        />
    ))
    return (
        <div>
            <Card.Group itemsPerRow={4}>
                {renderVisits}
            </Card.Group>
        </div>
    )
}
