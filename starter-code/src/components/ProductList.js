import React from "react";
import { useSelector } from "react-redux";
import { checkIfEmptyOject, denormalizeProductsData } from "../utils";

const ProductList = () => {

    const { products, productsLoading, productsError } = useSelector((state) => state);
    const emptyProducts = checkIfEmptyOject(products);
    return(
        <div>
            <ul>
                { productsLoading && (
                    <h2>Loading Products ...</h2>
                )}
                { productsError && (
                    <h3>{productsError}</h3>
                ) }
                {/* Se tiene que convertir el objeto products a un array, para poder hacer el map: */}
                { products && !emptyProducts && denormalizeProductsData(products).map(product => (
                <li key={product.id} >
                    {product.description} - ${product.price}
                </li>
            ))}
            </ul>
            
        </div>
    )
};

export default ProductList;