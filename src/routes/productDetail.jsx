import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Product() {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  const fetchProductDetails = async () => {
    const item = await fetch(`https://dummyjson.com/products/${id}`);
    if (item.ok) {
      const productsJson = await item.json();
      setProduct(productsJson)
    }
  }

  useEffect(() => {
    fetchProductDetails();
  }, [id])

  return (
    <>
      <div className="card">
        <div className="thumbnail">
          <img src={product.thumbnail} alt={product.title} />
        </div>

        <div className="details">
          <span>
            {product.title}
          </span>

          <div>
          </div>

        </div>
      </div>
    </>
  )
}