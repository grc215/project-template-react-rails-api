import React from 'react'
import {Card} from 'semantic-ui-react'

export default function OrderCard(props) {
    console.log(props.past_order.foods)
    let listOfFood = props.past_order.foods.map(food => {
        return <li>{food.name}</li>
    })
    return (
        <div>
            <Card>
                <Card.Header>{props.past_order.timestamp}</Card.Header>
                <Card.Meta>
                    <span className='food'>
                        <ul>
                            {listOfFood}
                        </ul>
                    </span>
                </Card.Meta>
            </Card>
        </div>
    )
}
