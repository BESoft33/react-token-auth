import { Link } from "react-router-dom";

export function Nav(){

    return(
        <>
            <nav>   
                <ul>
                <li>
                    <Link to={`products/`}>Products</Link>
                </li>
                <li>
                    <Link to={`cart/`}>Cart</Link>
                </li>
                </ul>
            </nav>
        </>
    )
}