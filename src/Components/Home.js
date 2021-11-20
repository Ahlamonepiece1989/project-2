import React, { Component, useState, useEffect } from 'react';
import axios from "axios";
import Product from './product.js';

import './Home.css';

import background from "./cover.jpg";

import {Container, Row, Col} from "react-bootstrap"

const baseURL = "http://localhost:8080";



export default function Home(props) {

    const [post, setPost] = useState(null);
    const [searchInput, setSearchInput] = useState('');
    const [filteredResults, setFilteredResults] = useState([]);


  useEffect(() => {
    axios.get(`${baseURL}/products`).then((response) => {


      setPost(response.data);
    });
  }, []);


  useEffect(() => {


  setSearchInput(props.data)
  if (searchInput !== '') {
    const filteredData = post.filter((item) => {
      return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
    })
    
    setFilteredResults(filteredData)
  }
  else{
    setFilteredResults(post)
  }

})

const deleteRow = (e) => {  

  console.log(e)
  axios.delete(`${baseURL}/product?title=${e}`)  
    .then(res => {  
      console.log(res);  
      console.log(res.data);  
  
      const posts = post.filter(item => item.e !== e);  
      setPost(posts);
      window.location.reload(); 
    })  
  
}


 
  


  
  if (!post) return null;



 


        return (

            <>


<img src={background} style={{width: "100%", height: '500px'}}></img>


<div style={{ display: 'block', padding: 30 }}>
        <Row>

          





{searchInput.length > 1 ? (
                    filteredResults.map((productItem) => {
                        return (
                         
                          <Col md={3}>
                            <div className="product">
                 
                              
                 
                                 <Product 
                                 
                                 title={productItem.title}
                                 price = {productItem.price}
                                 img = {productItem.imgLink}
                            
                                 deleteProduct = {e => deleteRow(e)}
                                 
                                 />
                           </div>
                           </Col>

                 
          
                        )
                    })
                ) : (
                  post.map((productItem) => {
                    return (
                      <Col md={3}>

                        <div className="product">
             
                          
             
                             <Product 
                             
                             title={productItem.title}
                             price = {productItem.price}
                             img = {productItem.imgLink}

                             deleteProduct = {e => deleteRow(e)}

                        
                             
                             
                             />
                       </div>
                       </Col>
      
                    )
                })
                )}
     



</Row>

</div>

          </>

          

          
        );

}
    
  
  


