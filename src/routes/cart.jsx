import { useSelector } from "react-redux";
import { Button } from "@mui/material";
import { removeFromCart } from "../cartSlice";
import { useDispatch } from "react-redux"; 

export default function Cart() {
  const carts = useSelector((state) => state.cart.carts)
  const dispatch = useDispatch()
  
  const removeProductFromCart = (product) =>(
    dispatch(removeFromCart(product))
  )

  const cartElements = carts.map((product)=>(
    <div id="contact">
      <div className="details">
        <p>
          {product.title}
        </p>

        <div>
          <p>
            <strong>Rs.{product.price}</strong><br/>
            <span>{product.discountPercentage} % off</span>
          </p>
        </div>
        <Button variant="outlined" onClick={()=>removeProductFromCart(product)}>Remove from Cart</Button>
      </div>
    </div>
  )
  )


  return (
    <>
      {cartElements}
    </>
  )
}