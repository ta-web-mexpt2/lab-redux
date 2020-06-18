import React from "react";
import { checkIfEmptyOject } from "../utils";

const ProductList = (props) => {
    console.log(props);
    const emptyProducts = checkIfEmptyOject(props.products);
    return(
        <div>
            <ul>
                { props.products && !emptyProducts && props.products.map(product => (
                <li key={product.id} >
                    {product.description} - ${product.price}
                </li>
            ))}
            </ul>
            
        </div>
    )
};

export default ProductList;