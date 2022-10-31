//import './App.css';
import { useState } from 'react';
import {IoIosStar,IoIosStarOutline} from 'react-icons/io';

function Rating(props) {
    const [rating,setRating] = useState(props.rating);
    return (
     <div style={styles.starStyle}>
        <h4>Rating: {rating}</h4>
        {rating >= 1 ? (
            <IoIosStar onClick={()=>setRating(1)}/>
        ):(
            <IoIosStarOutline onClick={()=>setRating(1)}/>
        )}
        {rating >= 2 ? (
            <IoIosStar onClick={()=>setRating(2)}/>
        ):(
            <IoIosStarOutline onClick={()=>setRating(2)}/>
        )}

        {rating >= 3 ? (
            <IoIosStar onClick={()=>setRating(3)}/>
        ):(
            <IoIosStarOutline onClick={()=>setRating(3)}/>
        )}

        {rating >= 4 ? (
            <IoIosStar onClick={()=>setRating(4)}/>
        ):(
            <IoIosStarOutline onClick={()=>setRating(4)}/>
        )}

        {rating >= 5 ? (
            <IoIosStar onClick={()=>setRating(5)}/>
        ):(
            <IoIosStarOutline onClick={()=>setRating(5)}/>
        )}
        <p>{props.numOFReviews}</p>
     </div>    
    ); 
}
export default Rating;

const styles = {
    starStyle:{
        color:'orange'
    }
}