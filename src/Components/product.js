import React from 'react';


import { Card , ListGroup} from 'react-bootstrap';


function Product(props) {
 
  return (
    <Card style={{ width: '100rem' ,height:'50rem'}}>
  <Card.Img variant="top" src="https://www.thegenerationpeace.com/wp-content/uploads/2021/04/pic-4-600x900.jpg" />
  <Card.Body>
    <Card.Title>Generation Peace</Card.Title>
  </Card.Body>

</Card>
  );
}



export default Product;