import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { checkIfEmptyOject, denormalizeProductsData } from "../utils";
import { deleteProduct } from "../redux/EcomerceDucks";
import Card from "./Card";
import CardsContainer from "./CardsContainer";
import Styled from "styled-components";

const StyledLine = Styled.h4`
    padding: 5px 15px;
`;

const ProductList = () => {

    const dispatch = useDispatch();
    const { products, productsLoading, productsError } = useSelector((state) => state);
    const emptyProducts = checkIfEmptyOject(products);

    // Forma de hacerlo implementando una validación antes de asignar, según:
    // https://stackoverflow.com/questions/34226076/why-is-my-onclick-being-called-on-render-react-js/34226188
    // También funciona haciendo simplemente onClick={() => dispatch(deleteProduct(product.id))}
    const returnDeleteOnClickFunction = (product_id) => {
        if (product_id) return (
            () => {
                dispatch(deleteProduct(product_id))
            }
        );
    };

    return (
        <CardsContainer>
            {productsLoading && (
                <h2>Loading Products ...</h2>
            )}
            {productsError && (
                <h3>{productsError}</h3>
            )}
            {/* Se tiene que convertir el objeto products a un array, para poder hacer el map: */}
            {products && !emptyProducts && denormalizeProductsData(products).map(product => (
                <Card key={product.id} >
                    <div>
                        <StyledLine>Id: {product.id} </StyledLine>
                        <StyledLine>{product.description}</StyledLine>
                        <StyledLine>Price: ${product.price}</StyledLine>
                        <button name={product.id} onClick={returnDeleteOnClickFunction(product.id)}>Delete</button>
                    </div>
                    <br />
                </Card>
            ))}
        </CardsContainer>
    )
};

export default ProductList;