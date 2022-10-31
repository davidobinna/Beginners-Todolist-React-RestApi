import React from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import Rating from './Rating';

function Product(props) {
  return (
    <div className='d-flex'>
      <img
        src={props.data.imageUrl}
        alt='Product image'
        className='me-3 rounded-circle'
        style={{ width: '60px', height: '60px' }}
      />
      <div> 
        <h5>{props.data.productName}</h5>
        {props.data.releasedDate}
        <Rating rating = {props.data.rating} 
        numOFReviews={props.datanumOFReviews}/>
        <p>
     {props.data.description}
        </p>
      </div>
    </div>
  );
} 

export default Product;