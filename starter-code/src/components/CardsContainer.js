import React from "react";
import Styled from "styled-components";

const StyledCardsContainer = Styled.div`
display: flex;
align-items: flex-start;
flex-wrap: wrap;
margin: 20px;
text-align: center;
`;

const CardsContainer = (props) => (
    <StyledCardsContainer>
        {props.children}
    </StyledCardsContainer>
);

export default CardsContainer;