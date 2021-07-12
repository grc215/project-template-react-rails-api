import React from 'react'
import {Card, Image} from 'semantic-ui-react'

export default function MenuCard(props) {

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
            </Card.Content>
        </Card>
    )
}
