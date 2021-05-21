import { useEffect, useState } from 'react'
import { productService } from '../../services/products.service';

const ProductList = () => {
    
    const [products, setProducts] =  useState([]);

    useEffect(() => {
        productService.getProducts().then((products) => {
            setProducts(products)
        });
    }, [])
    return (
        
        <div className="products">
            {products.map(product => 
                <div>
                    <img src={product.image}></img>
                    <div>{product.price} €</div>
                    <div>{product.title}</div>
                    <button>Comprar</button>
                </div>
            )}
        </div>
    )

}

export default ProductList;