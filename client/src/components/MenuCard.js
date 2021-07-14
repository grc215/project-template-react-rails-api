import React from 'react'
import {Card, Image, Button} from 'semantic-ui-react'


export default function MenuCard(props) {

// let handleClick = (order) => {
//     props.orderStarter()
//     addToCart(order)
// }

let addToCart = (order) => {
   
    fetch('/visits', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            food_id : props.foodObj.id,
            quantity : 1,
            order_id : order.id
        }),
      })
        .then((r) => r.json())
        .then((visitObj) => console.log(visitObj))

}
          
    return (
        <Card>
            <Image src={props.foodObj.image} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{props.foodObj.name}</Card.Header>
                <Card.Meta>
                    <span className='price'>${props.foodObj.price}</span>
                </Card.Meta>
            <Card.Description>
                {props.foodObj.description}
            </Card.Description>
            <Button onClick={props.orderStarter(addToCart)} >
                Add to Cart
            </Button>
            </Card.Content>
        </Card>
    )
}
