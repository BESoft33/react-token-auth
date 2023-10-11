import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useSelector } from "react-redux";

function Basket(){
    const carts = useSelector((state) => state.cart.carts)
    return(
        <Link to="/cart">
            <Button color="inherit" variant='outlined'>
                <ShoppingBasketIcon />
                {carts.length? <span>{carts.length}</span> : null}
            </Button>&nbsp;
        </Link>
    )
}

export default Basket;