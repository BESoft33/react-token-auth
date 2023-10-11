import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { addToCart } from "../cartSlice";


export default function Products() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const allProducts = await fetch('https://dummyjson.com/products');
    if (allProducts.ok) {
      const productsJson = await allProducts.json();
      setProducts(productsJson.products)
    }
  }

  useEffect(()=> {
    fetchProducts();
  },[])

  const addProductToCart = (product) =>{
    dispatch(addToCart(product));
  }

  const productsElement = products.map((prod, index) => (
    <div key={index} id="contact">
      <Link to={`/details/${prod.id}`}>
        <div className="thumbnail">
          <img src={prod.thumbnail} alt={prod.title} />
        </div>

        <div className="details">
          <span>
            {prod.title}
          </span>

          <div>
          </div>

        </div>
      </Link>
      <Button variant="outlined" onClick={()=>addProductToCart(prod)}>Add to Cart</Button>
    </div>
  ));

  return (
    <>
      {productsElement}
    </>
  )
}