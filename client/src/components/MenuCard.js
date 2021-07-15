import React from 'react'
import {Card, Image, Button} from 'semantic-ui-react'


export default function MenuCard(props) {

const handleClick = (e) => {
    props.createVisit(props.foodObj.id)
}
          
    return (
        <Card className="menuCard">
            <Image src={props.foodObj.image} />
            <Card.Content>
                <Card.Header>{props.foodObj.name}</Card.Header>
                <Card.Meta>
                    <span className='price'>${props.foodObj.price}</span>
                </Card.Meta>
            <Card.Description>
                {props.foodObj.description}
            </Card.Description>
            <Button onClick={handleClick}>
                Add to Cart
            </Button>
            </Card.Content>
        </Card>
    )
}
