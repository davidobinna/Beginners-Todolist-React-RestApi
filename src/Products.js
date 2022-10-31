//import './App.css';
import Product from "./Product";



function getProducts(){
 
    const arr = [/**{
        imageUrl: "https://mdbcdn.b-cdn.net/img/new/avatars/2.webp",
        productName: "Product 1",
        releasedDate: "May 31, 2016",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor, tellus laoreet venenatis facilisis, enim ex faucibus nulla, id rutrum ligula purus sit amet mauris. ",
        rating: 4, 
        numOfReviews: 2, 
      }, 
     {
        imageUrl: "https://mdbcdn.b-cdn.net/img/new/avatars/2.webp",
        productName: "Product 2",
        releasedDate: "October 31, 2016",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor, tellus laoreet venenatis facilisis, enim ex faucibus nulla, id rutrum ligula purus sit amet mauris. ",
        rating: 2,
        numOfReviews: 12 
    }**/]

    return arr ;

 };

 function Products() {
    const products = getProducts();
    const listProducts = products.map((product)=>
    <Product key={product.productName} data={product}/>
    );
  
    return (
        <div>
        <h1>
            My Products
        </h1>
         {listProducts.length > 0 ? (
            <ul>{listProducts}</ul>
         ) : (
            <ul>No Products to display</ul>
         )}           
    </div>
    );   
 }
/**    const products = [
        "Learning React ",
        "Pro React",
        "Beginning React"
    ];
    const listProducts = products.map((product)=>
    <li key={product.toString()}>{product}</li>
    );
  **/
export default Products;