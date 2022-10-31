import React from 'react';
import { Card, Button } from 'react-bootstrap';

function CardComponent(props) {
    return(
    <div>
    <h4>JumbotronComponent</h4>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" />
      <Card.Body>
        <Card.Title>Hello World</Card.Title>
        <Card.Text>
        {props.message}
        </Card.Text>
        <Button variant="primary">Learn More</Button>
      </Card.Body>
    </Card>    
    </div>
    );
}

export default CardComponent;