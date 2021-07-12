import React from 'react'
import MenuCard from './MenuCard'
import {Card} from 'semantic-ui-react'

export default function MenuPage(props) {
    let renderFood = props.food.map(foodObj => (
        <MenuCard 
            key={foodObj.id}
            foodObj={foodObj}
        />
    ))
    return (
        <div>
            <Card.Group itemsPerRow={4}>
                {renderFood}
            </Card.Group>
        </div>
    )
}
