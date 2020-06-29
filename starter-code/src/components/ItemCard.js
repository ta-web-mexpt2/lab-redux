import React from "react";
import styled from "styled-components";

const StyledItemCard = styled.div`
    border-radius: 3px;
    border: 1px solid lightslategray;
    margin: 10px;
    background: #8A5AB0;
`;

const ItemCard = (props) => (
    <StyledItemCard>
        {props.children}
    </StyledItemCard>
);

export default ItemCard;