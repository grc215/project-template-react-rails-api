import React from 'react'
import {Card, Image, Button} from 'semantic-ui-react'


export default function CartCard(props) {

    let handleDelete = () => {
        fetch(`/visits/${props.visitsObj.id}`,{
            method: "DELETE",
        })
        .then(res => res.json())
        .then(() => props.deleteFromCart(props.visitsObj.id))
    }
          
    return (
        <Card className="cartCard">
            <Image src={props.visitsObj.food_image} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{props.visitsObj.food_name}</Card.Header>
                <Card.Meta>
                    <span className='price'>${props.visitsObj.food_price}</span>
                    <span className='quantity'>quantity: {props.visitsObj.quantity}</span>
                    <span className='total'>total price: {props.visitsObj.quantity * props.visitsObj.food_price}</span>
                </Card.Meta>
            <Button onClick={handleDelete}>delete</Button>
            </Card.Content>
        </Card>
    )
}
