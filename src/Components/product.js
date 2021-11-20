import React, { useState }  from 'react';

import { Card , ListGroup} from 'react-bootstrap';


import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";

import { AiFillDelete } from "@react-icons/all-files/ai/AiFillDelete";

function Product({title, price, img, deleteProduct, like}) {

  const [isLiked, updateLike] = useState(false);




  const handleLike = () => {

    if (!isLiked) {
      updateLike(true);

      localStorage.setItem(title, JSON.stringify({
                title: title,
                liked: true
            }));
    
    } else {
      updateLike(false);

      localStorage.setItem(title, JSON.stringify({
                title: title,
                liked: false
            }));
   
    }


  };




 
  return (
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={require(`../images/${img}`)?.default} />
  <Card.Body>
    <Card.Title>{title}</Card.Title>
    <Card.Text>
    {price}$
    </Card.Text>

        <button onClick={() =>{ handleLike();}} disabled={isLiked}>
          <FontAwesomeIcon icon={faThumbsUp} style={{ paddingRight: 5 }} />
        </button>

        <button onClick={() =>{handleLike();}} disabled={!isLiked}>
          <FontAwesomeIcon icon={faThumbsDown} style={{ paddingLeft: 5 }} />
        </button>

  </Card.Body>


  <button onClick={() => {deleteProduct(title);}}>
          <AiFillDelete />
        </button>

</Card>
  );
}



export default Product;