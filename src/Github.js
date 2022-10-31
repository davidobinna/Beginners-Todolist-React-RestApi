import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import ReactLoading from 'react-loading';


function Github() {
const [apidata,setData] = useState([]);
const [searchTerm,setSearchTerm] = useState("");
const [ isLoading, setIsLoading ] = useState();

const handleSubmit = (event) => {
event.preventDefault();
setIsLoading(true);
getData();
}
  
const getData = async () => {
const res = await axios.get("http://localhost/websitesX/Api/RestServer/users/"+searchTerm)   
setData(res.data);
setIsLoading(false);
}


const listUser = apidata.map((user) =>
<div className='d-flex'>
     <img
       src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
       alt='Product image'
       className='me-3 rounded-circle'
       style={{ width: '60px', height: '60px' }}
       key={user.name}
     />
     <div> 
       <h5>Name:{user.name}</h5>
       <p>email:{user.email}</p>
       <p>
       phone number: {user.phone} 
       </p>
     </div>
   </div>
     );

    return (
        <div>
            <form onSubmit = {handleSubmit}>
  <input type="text" onChange={event => setSearchTerm(event.target.value) } />
  <button type="submit">Search</button>
  </form>
 
       { isLoading &&
            <ReactLoading type="spinningBubbles" color="#444"/>
           }
           
         <ul>{listUser}</ul>
        </div>
    )
};

export default Github;
