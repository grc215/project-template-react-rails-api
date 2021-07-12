import React from 'react'
import {Card, Image, Button} from 'semantic-ui-react'


export default function CartCard(props) {
          
    return (
        <Card>
            <Image src={props.visitsObj.image} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{props.visitsObj.name}</Card.Header>
                <Card.Meta>
                    <span className='price'>${props.visitsObj.price}</span>
                </Card.Meta>
            <Card.Description>
                {props.visitsObj.description}
            </Card.Description>
            </Card.Content>
        </Card>
    )
}
